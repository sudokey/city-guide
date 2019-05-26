import React from 'react';
import Layout, { Content as LayoutContent } from '../../../Layout';
import Header, { Section as HeaderSection } from '../../../Header';
import Logo from '../../../Logo';
import Button from '../../../Button';
import styles from '../styles.less';
import PostForm from '../../../PostForm';
import ContentCreator from '../../../ContentCreator';
import UserPickOrAuth from '../../../UserPickOrAuth';

const PagePostCreate = () => (
  <Layout>
    <Header>
      <HeaderSection>
        <Logo />
        <span>Драфт</span>
        <span className={styles.status}>Сохранено</span>
      </HeaderSection>
      <HeaderSection>
        <Button>Опубликовать</Button>
        <UserPickOrAuth />
      </HeaderSection>
    </Header>
    <LayoutContent>
      <ContentCreator>
        <PostForm />
      </ContentCreator>
    </LayoutContent>
  </Layout>
);

export default PagePostCreate;
