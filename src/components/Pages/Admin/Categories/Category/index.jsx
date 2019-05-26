import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import CategoryForm from '../../../../CategoryForm';
import { Validator } from '../../../../../libs';

// TODO: Move to CategoryForm.jsx
const Category = ({
  categoryData,
  onSubmit,
  loading,
}) => {
  const [errors, setErrors] = useState({});
  const [submited, setSubmited] = useState(false);
  const [category, setCategory] = useState(categoryData);

  const validate = (category) => {
    const { errors, isValid } = Validator.validateCategory(category);
    setErrors(errors);
    return isValid;
  };

  const submit = () => {
    const isValid = validate(category);

    setSubmited(true);

    if (loading || !isValid) {
      return;
    }

    onSubmit(category);
  };

  useEffect(() => {
    setCategory(categoryData);
  }, [categoryData]);

  return (
    <CategoryForm
      data={category}
      errors={errors}
      submited={submited}
      loading={loading}
      onSubmit={submit}
      onChange={(category) => {
        setCategory(category);
        validate(category);
      }}
    />
  );
};

Category.propTypes = {
  categoryData: PropTypes.shape({
    name: PropTypes.string,
    iconUrl: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

Category.defaultProps = {
  categoryData: {
    name: '',
    iconUrl: '',
  },
};

export default Category;
