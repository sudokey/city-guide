import React from 'react';
import styles from './styles.less';
import Place from './Place';
import Cover from './Cover';
import TextInput from '../TextInput';
import TagsInput from '../TagsInput';

const Editor = () => (
  <div className={styles.editor}>
    {/* TODO: Add tabindex for inputs */}
    <div className={`${styles.field} ${styles.name}`}>
      <TextInput
        autoFocus
        placeholder="Название места"
      />
    </div>
    <div className={styles.field}>
      <Cover />
    </div>
    <div className={styles.field}>
      {/* TODO: Move place component to root components tree */}
      <Place />
    </div>
    <div className={styles.field}>
      <TagsInput />
    </div>
    {/* TODO: Add bottom padding */}
  </div>
);

export default Editor;
