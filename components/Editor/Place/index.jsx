import { debounce } from 'lodash';
import React, { PureComponent, createRef } from 'react';
import Autosuggest from '../../Autosuggest';
import styles from './styles.less';

// TODO: Replace with user coordinates
const MOSCOW_LAT = 55.751244;
const MOSCOW_LNG = 37.61556;

class Place extends PureComponent {
  constructor() {
    super();
    this.map = null;
    this.mapRef = createRef();
    this.autocompleteService = new google.maps.places.AutocompleteService();
    this.geocoder = new google.maps.Geocoder();
    this.searchPlaces = debounce(this.searchPlaces, 300);
    this.state = {
      value: '',
      suggestions: [],
    };
  }

  componentDidMount() {
    // TODO: Add pin to map on click
    this.map = new google.maps.Map(this.mapRef.current, {
      zoom: 3,
      controlSize: 20,
      zoomControl: true,
      clickableIcons: false,
      disableDefaultUI: true,
      keyboardShortcuts: false,
      center: {
        lat: MOSCOW_LAT,
        lng: MOSCOW_LNG,
      },
    });

    // TODO: Replace this with positive tabIndex for inputs
    /* eslint-disable no-param-reassign */
    google.maps.event.addListenerOnce(this.map, 'tilesloaded', () => {
      setTimeout(() => {
        if (!this.map) {
          return;
        }

        this.map.getDiv().querySelectorAll('[tabindex], area, button, a, iframe, input')
          .forEach((el) => {
            el.tabIndex = -1;
          });
      }, 1000);
    });
    /* eslint-enable no-param-reassign */
  }

  componentWillUnmount() {
    this.map = null;
  }

  searchPlaces(query) {
    // TODO: Add session token
    this.autocompleteService.getPlacePredictions({
      input: query,
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.setState({
          suggestions: results,
        });
      }
    });
  }

  render() {
    const { suggestions, value } = this.state;

    return (
      <div className={styles.place}>
        <div className={styles.input}>
          <Autosuggest
            suggestions={suggestions}
            getSuggestionValue={item => item.description}
            renderSuggestion={item => <>{item.description}</>}
            onSuggestionsFetchRequested={(e) => {
              this.searchPlaces(e.value);
            }}
            onSuggestionsClearRequested={() => {
              this.setState({
                suggestions: [],
              });
            }}
            onSuggestionSelected={(e, { suggestion, suggestionValue }) => {
              // TODO: Add pin to map
              this.geocoder.geocode({
                placeId: suggestion.place_id,
              }, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                  console.log(results);
                }
              });
              this.setState({
                value: suggestionValue,
              });
            }}
            inputProps={{
              value,
              placeholder: 'Введите адресс или отметьте пин на карте',
              onChange: (e) => {
                this.setState({
                  value: e.target.value,
                });
              },
            }}
          />
        </div>
        {/* TODO: Make map aspect ration */}
        <div className={styles.mapContainer}>
          <div className={styles.map} ref={this.mapRef} />
        </div>
      </div>
    );
  }
}

export default Place;
