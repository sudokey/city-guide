import React from 'react';
import styles from './styles.less';
import Place from './Place';
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
    <div className={`${styles.field} ${styles.place}`}>
      <Place />
    </div>
    <div className={`${styles.field} ${styles.tags}`}>
      <TagsInput />
    </div>
  </div>
);

export default Editor;
