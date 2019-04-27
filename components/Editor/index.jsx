import React from 'react';
import styles from './styles.less';
import Place from './Place';
import TextInput from '../TextInput';
import TagsInput from '../TagsInput';
import FileInput from '../FileInput';

const Editor = () => (
  <div className={styles.editor}>
    {/* TODO: Add tabindex for inputs */}
    <div className={`${styles.field} ${styles.name}`}>
      <TextInput
        autoFocus
        placeholder="Название места"
      />
    </div>
    <div className={`${styles.field} ${styles.file}`}>
      <FileInput />
    </div>
    <div className={`${styles.field} ${styles.place}`}>
      {/* TODO: Move place component to root components tree */}
      <Place />
    </div>
    <div className={`${styles.field} ${styles.tags}`}>
      <TagsInput />
    </div>
    {/* TODO: Add bottom padding */}
  </div>
);

export default Editor;
