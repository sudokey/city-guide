import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Popup, { Content } from '../Popup';
import styles from './styles.less';
import Button from '../Button';

const Confirmation = ({ children, title, onAgree }) => {
  const [visible, setVisible] = useState(false);
  const [submitData, setSubmitData] = useState();

  return (
    <>
      {children({
        showConfirmation: (data) => {
          setSubmitData(data);
          setVisible(true);
        },
      })}

      {visible && (
        <Popup
          dark
          onClickClose={() => {
            setVisible(false);
          }}
        >
          <Content className={styles.confirmation}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.actions}>
              <div className={styles.action}>
                <Button
                  strech
                  onClick={() => {
                    setVisible(false);
                    onAgree(submitData);
                  }}
                >
                  Да
                </Button>
              </div>
              <div className={styles.action}>
                <Button
                  strech
                  onClick={() => {
                    setVisible(false);
                  }}
                >
                  Нет
                </Button>
              </div>
            </div>
          </Content>
        </Popup>
      )}
    </>
  );
};

Confirmation.propTypes = {
  children: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  onAgree: PropTypes.func.isRequired,
};

export default Confirmation;
