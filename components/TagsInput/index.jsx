import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';
import Autosuggest from '../Autosuggest';
import Tag from '../Tag';
import styles from './styles.less';
import autosuggestStyles from '../Autosuggest/styles.less';

const renderLayout = (tagComponents, inputComponent) => (
  <div className={styles.layout}>
    {tagComponents}
    <div className={`${styles.item} ${styles.field}`}>
      {inputComponent}
    </div>
  </div>
);

/* eslint-disable react/prop-types */
const renderTag = ({
  key, tag, getTagDisplayValue, disabled, onRemove,
}) => (
  <div className={styles.item} key={key}>
    <Tag
      title={getTagDisplayValue(tag)}
      onClickRemove={disabled ? undefined : () => onRemove(key)}
    />
  </div>
);
/* eslint-enable react/prop-types */

/* eslint-disable react/prop-types */
const renderInput = ({ addTag, ...props }) => (
  <Autosuggest
    theme={{
      ...autosuggestStyles,
      container: styles.autosuggestContainer,
    }}
    suggestions={[{ name: 'Test' }, { name: 'Test2' }]}
    getSuggestionValue={suggestion => suggestion.name}
    renderSuggestion={item => <>{item.name}</>}
    onSuggestionSelected={(e, { suggestionValue }) => {
      addTag(suggestionValue);
    }}
    onSuggestionsClearRequested={() => {}}
    onSuggestionsFetchRequested={() => {}}
    inputProps={{
      ...props,
      className: styles.input,
      placeholder: 'А теперь теги…',
      onChange: (e, { method }) => {
        if (method === 'enter') {
          e.preventDefault();
        } else {
          props.onChange(e);
        }
      },
    }}
  />
);
/* eslint-enable react/prop-types */

const Component = () => {
  const [value, setValue] = useState([]);

  return (
    <TagsInput
      className={styles.tagName}
      renderLayout={renderLayout}
      renderTag={renderTag}
      renderInput={renderInput}
      value={value}
      onChange={(tags) => {
        setValue(tags);
      }}
    />
  );
};

export default Component;
