import React, { useEffect, useState } from 'react';
import Layout from '../../../Layout';
import Header from '../../../Header';
import Logo from '../../../Logo';
import ContentCreator from '../../../ContentCreator';
import Tags from '../../../Tags';
import styles from '../styles.less';
import UserPickOrAuth from '../../../UserPickOrAuth';
import { Api, Routes } from '../../../../libs';
import Button from '../../../Button';

const PageAdminCategories = () => {
  const [categories, setCategories] = useState([]);

  // TODO: Add to redux store
  const getCategories = async () => {
    try {
      const result = await Api.getCategories();
      setCategories(result);
    } catch (err) {
      // TODO: Show notification
      console.error(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  // TODO: Hide if no user
  return (
    <Layout
      header={(
        <Header
          main={[
            <Logo />,
          ]}
          side={[
            // TODO: Hide if no user
            <Button
              green
              url={Routes.getAdminCategoriesCreateUrl()}
            >
              Добавить
            </Button>,
            <UserPickOrAuth />,
          ]}
        />
      )}
      content={(
        <ContentCreator>
          <h2 className={styles.title}>Категории</h2>
          <div className={styles.section}>
            <Tags
              tags={categories.map(item => ({
                ...item,
                blue: true,
              }))}
            />
          </div>
        </ContentCreator>
      )}
    />
  );
};

export default PageAdminCategories;
