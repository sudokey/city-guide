import React from 'react';
import styles from './styles.less';
import FileInput from '../../FileInput';
import IconImage from '../../Icons/Image';
import IconPlus from '../../Icons/Plus';
import Item from './Item';
import Image from './Image';


const Cover = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.input}>
        <FileInput>
          <span className={styles.label}>
            <IconImage />
            Добавьте красивую обложку
          </span>
        </FileInput>
      </div>

      <div className={styles.images}>
        <Item>
          <Image src="https://cdn-images-1.medium.com/max/1600/0*j60M-msaVYBg6lc2.jpg" alt="" />
        </Item>
        <Item>
          <Image src="https://cdn-images-1.medium.com/max/1600/0*Gx0m0Uli7Z2Js7uH.jpeg" alt="" />
        </Item>
        <Item>
          <Image src="https://cdn-images-1.medium.com/max/1600/0*MdmMuZ_AYGxjek9B.jpg" alt="" />
        </Item>
        <Item>
          <Image src="https://cdn-images-1.medium.com/max/1600/0*FaEXCNV72KdCnUdm.jpg" alt="" />
        </Item>
        <Item>
          <Image src="https://cdn-images-1.medium.com/max/1600/0*gfKKvpZLM33NSIZX.jpg" alt="" />
        </Item>
        <Item>
          <Image src="https://cdn-images-1.medium.com/max/1600/0*ALDTdFFj-HNHST4F.jpg" alt="" />
        </Item>
        <Item>
          <FileInput theme={{ fileInput: styles.fileInput }}>
            <IconPlus />
          </FileInput>
        </Item>
      </div>
    </div>
  );
};

export default Cover;
