import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import TextInput from '../TextInput';
import { Field } from '../Form';
import UploadIcon from './UploadIcon';
import Tag from '../Tag';
import { Validator } from '../../libs';

const CategoryForm = ({
  initialData, loading, onSubmit,
}) => {
  const [errors, setErrors] = useState({});
  const [submited, setSubmited] = useState(false);
  const [data, setData] = useState(initialData);

  const validate = (data) => {
    const { errors, isValid } = Validator.validateCategory(data);
    setErrors(errors);
    return isValid;
  };

  const submit = () => {
    const isValid = validate(data);

    setSubmited(true);

    if (loading || !isValid) {
      return;
    }

    onSubmit(data);
  };

  const onChange = (data) => {
    setData(data);
    validate(data);
  };

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
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
};

CategoryForm.propTypes = {
  initialData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired,
  }),
  errors: PropTypes.shape({
    name: PropTypes.string,
    iconUrl: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

CategoryForm.defaultProps = {
  initialData: {
    name: '',
    iconUrl: '',
  },
  errors: {},
};

export default CategoryForm;
