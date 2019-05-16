import PropTypes from 'prop-types';
import React from 'react';
import TextInput from '../TextInput';
import { Field } from '../Form';
import UploadIcon from './UploadIcon';
import Tag from '../Tag';

const CategoryForm = ({
  data, loading, onChange, onSubmit, errors,
}) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit(data);
    }}
  >
    <Field>
      {/* TODO: Add validation */}
      {/* TODO: Add max length */}
      <TextInput
        placeholder="Введите имя категории"
        disabled={loading}
        value={data.name}
        onChange={(e) => {
          onChange({
            ...data,
            name: e.target.value,
          });
        }}
      />
      {errors.name}
    </Field>
    <Field>
      <UploadIcon
        disabled={loading}
        url={data.iconUrl}
        onUpload={({ url }) => {
          onChange({
            ...data,
            iconUrl: url,
          });
        }}
        onClickRemove={() => {
          onChange({
            ...data,
            iconUrl: '',
          });
        }}
      />
      {errors.iconUrl}
    </Field>
    {data.name && (
      <Field>
        <Tag
          name={data.name}
          iconUrl={data.iconUrl}
        />
      </Field>
    )}
  </form>
);

CategoryForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    iconUrl: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

CategoryForm.defaultProps = {
  errors: {},
};

export default CategoryForm;
