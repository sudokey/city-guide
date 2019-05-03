import React, { useState } from 'react';
import styles from './styles.less';
import Place from './Place';
import Cover from './Cover';
import Textarea from '../Textarea';
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
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([{
    name: 'Галереи',
  }, {
    name: 'Жопка',
  }]);

  return (
    <div className={styles.editor}>
      <div className={styles.name}>
        {/* TODO: Max length */}
        {/* TODO: Enable autoFocus */}
        <Textarea
          // autoFocus
          placeholder="Название места"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className={styles.field}>
        <Cover
          images={images}
          onChange={result => setImages(result)}
        />
      </div>
      <div className={styles.place}>
        <Place />
      </div>
      <div className={styles.tags}>
        <TagsInput
          tags={tags}
          onChange={result => setTags(result)}
        />
      </div>
      <div className={styles.description}>
        {/* TODO: Max length */}
        <Textarea
          placeholder="Добавьте описание места..."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
