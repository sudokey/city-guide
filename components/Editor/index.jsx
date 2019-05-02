import React, { useState } from 'react';
import styles from './styles.less';
import Place from './Place';
import Cover from './Cover';
import TextInput from '../TextInput';
import TagsInput from '../TagsInput';

const Editor = () => {
  const [images, setImages] = useState([{
    src: 'https://cdn-images-1.medium.com/max/1600/0*j60M-msaVYBg6lc2.jpg',
  }, {
    src: 'https://cdn-images-1.medium.com/max/1600/0*Gx0m0Uli7Z2Js7uH.jpeg',
  }, {
    src: 'https://cdn-images-1.medium.com/max/1600/0*MdmMuZ_AYGxjek9B.jpg',
  }, {
    src: 'https://cdn-images-1.medium.com/max/1600/0*FaEXCNV72KdCnUdm.jpg',
  }, {
    src: 'https://cdn-images-1.medium.com/max/1600/0*gfKKvpZLM33NSIZX.jpg',
  }, {
    src: 'https://cdn-images-1.medium.com/max/1600/0*ALDTdFFj-HNHST4F.jpg',
  }]);

  return (
    // TODO: Add tabIndex for inputs
    <div className={styles.editor}>
      <div className={`${styles.field} ${styles.name} ${styles.text}`}>
        <TextInput
          autoFocus
          placeholder="Название места"
        />
      </div>
      <div className={styles.field}>
        <Cover
          images={images}
          onChange={result => setImages(result)}
        />
      </div>
      <div className={styles.field}>
        <Place />
      </div>
      <div className={`${styles.field} ${styles.text}`}>
        <TagsInput />
      </div>
    </div>

  );
};

export default Editor;
