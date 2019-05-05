import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Autosuggest from '../Autosuggest';
import styles from './styles.less';
import Tag from '../Tag';
import Tags from '../Tags';
import { Api } from '../../utils';
import IconPlus from '../Icons/Plus';

// TODO: Max length
const TagsInput = ({ tags, defaultTags, onChange }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div className={styles.tagInput}>
      <div className={styles.autosuggest}>
        <Autosuggest
          highlightFirstSuggestion={!!query}
          focusInputOnSuggestionClick={false}
          suggestions={suggestions}
          getSuggestionValue={suggestion => suggestion.name}
          shouldRenderSuggestions={() => true}
          renderSuggestion={(item, { isHighlighted }) => (
            <div className={styles.item}>
              <Tag
                {...item}
                blueDark={isHighlighted}
              />
            </div>
          )}
          onSuggestionsClearRequested={() => {}}
          onSuggestionsFetchRequested={async ({ value }) => {
            // TODO: Disable create same tags
            // TODO: Dont show tags in search when it selected
            try {
              let data = await Api.searchTags(value);
              data = data.filter(item => tags.every(i => i.name.toLowerCase() !== item.name.toLowerCase()));
              if (!data.length) {
                // TODO: Dont show default tags when search
                data = data.concat(defaultTags);
              }
              const matches = data.filter(item => item.name.toLowerCase() === value.toLowerCase());
              if (!matches.length && value) {
                data.unshift({
                  value,
                  name: `Создать новый тег ${value}`,
                  icon: <IconPlus />,
                  type: 'new',
                });
              }
              setSuggestions(data);
            } catch (e) {
              // TODO: Show error notification
            }
          }}
          onSuggestionSelected={(e, { suggestion }) => {
            // TODO: Create only unique tags
            // TODO: Disable create new tag when api create new tag
            let tag;
            if (suggestion.type === 'new') {
              // TODO: Create tag api call
              tag = {
                name: suggestion.value,
              };
            } else {
              tag = suggestion;
            }
            setQuery('');
            onChange(tags.concat(tag));
          }}
          inputProps={{
            placeholder: 'Добавьте подходящие теги',
            value: query,
            onChange: (e, { newValue, method }) => {
              if (method === 'type') {
                setQuery(newValue);
              }
            },
          }}
          renderSuggestionsContainer={({ containerProps, children }) => (
            <div {...containerProps}>
              <div className={styles.item}>
                <Tags blue tags={tags} />
              </div>
              {children}
            </div>
          )}
          renderInputComponent={inputProps => (
            <div className={styles.input}>
              <input {...inputProps} />
            </div>
          )}
        />
      </div>

      {/* TODO: Add remove tag by click */}
      <Tags blue tags={tags} />
    </div>
  );
};

TagsInput.propTypes = {
  tags: Tags.propTypes.tags,
  defaultTags: Tags.propTypes.tags,
  onChange: PropTypes.func.isRequired,
};

TagsInput.defaultProps = {
  tags: [],
  defaultTags: [],
};

export default TagsInput;
