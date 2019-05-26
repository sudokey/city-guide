import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Layout, { Content as LayoutContent } from '../../../Layout';
import Header, { Section as HeaderSection } from '../../../Header';
import Logo from '../../../Logo';
import UserPickOrAuth from '../../../UserPickOrAuth';
import ContentCreator from '../../../ContentCreator';
import Button from '../../../Button';
import CategoryForm from '../../../CategoryForm';
import { Validator } from '../../../../libs';

const PageAdminCategory = ({
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
    <Layout>
      <Header>
        <HeaderSection>
          <Logo />
        </HeaderSection>
        <HeaderSection>
          <Button
            disabled={loading}
            onClick={submit}
          >
            Опубликовать
          </Button>
          <UserPickOrAuth />
        </HeaderSection>
      </Header>
      <LayoutContent>
        <ContentCreator>
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
        </ContentCreator>
      </LayoutContent>
    </Layout>
  );
};

PageAdminCategory.propTypes = {
  categoryData: PropTypes.shape({
    name: PropTypes.string,
    iconUrl: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

PageAdminCategory.defaultProps = {
  categoryData: {
    name: '',
    iconUrl: '',
  },
};

export default PageAdminCategory;
