import PropTypes from 'prop-types';
import React from 'react';
import TextInput from '../TextInput';
import { Field } from '../Form';
import UploadIcon from './UploadIcon';
import Tag from '../Tag';

const CategoryForm = ({
  data, errors, loading, submited, onChange, onSubmit,
}) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit(data);
    }}
  >
    <Field
      error={errors.name}
      submited={submited}
    >
      {({ setDirty }) => (
        <TextInput
          placeholder="Введите имя категории"
          disabled={loading}
          value={data.name}
          onChange={(e) => {
            setDirty(true);
            onChange({
              ...data,
              name: e.target.value,
            });
          }}
        />
      )}
    </Field>

    <Field
      error={errors.iconUrl}
      submited={submited}
    >
      {({ setDirty }) => (
        <UploadIcon
          disabled={loading}
          url={data.iconUrl}
          onUpload={({ url }) => {
            setDirty(true);
            onChange({
              ...data,
              iconUrl: url,
            });
          }}
          onClickRemove={() => {
            setDirty(true);
            onChange({
              ...data,
              iconUrl: '',
            });
          }}
        />
      )}
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
  submited: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

CategoryForm.defaultProps = {
  errors: {},
  submited: false,
};

export default CategoryForm;
