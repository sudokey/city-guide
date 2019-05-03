import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Autosuggest from '../Autosuggest';
import styles from './styles.less';
import Tag from '../Tag';
import Tags from '../Tags';
import { Api } from '../../utils';
import IconPlus from '../Icons/Plus';

// TODO: Max length
const TagsInput = ({ tags, onChange }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div className={styles.tagInput}>
      <div className={styles.autosuggest}>
        <Autosuggest
          suggestions={suggestions}
          getSuggestionValue={suggestion => suggestion.name}
          renderSuggestion={(item, { isHighlighted }) => (
            <div className={styles.item}>
              <Tag
                {...item}
                blue={isHighlighted}
              />
            </div>
          )}
          onSuggestionsClearRequested={() => {}}
          onSuggestionsFetchRequested={async ({ value }) => {
            try {
              let data = await Api.searchTags(value);
              data = data.filter(item => tags.every(i => i.name.toLowerCase() !== item.name.toLowerCase()));
              const matches = data.filter(item => item.name.toLowerCase() === value.toLowerCase());
              if (!matches.length) {
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
            // TODO: Create tag on enter
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

      <Tags blue tags={tags} />
    </div>
  );
};

TagsInput.propTypes = {
  tags: Tags.propTypes.tags,
  onChange: PropTypes.func.isRequired,
};

TagsInput.defaultProps = {
  tags: [],
};

export default TagsInput;
