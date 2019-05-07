import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Popup from '../Popup';
import styles from './styles.less';
import Logo from '../Logo';
import IconCloseCircle from '../Icons/CloseCircle';
import * as userActions from '../../actions/user';

const Auth = ({ children, authWithGoogle, authWithFacebook }) => {
  const [authVisible, setAuthVisible] = useState(false);

  return (
    <>
      {children(() => {
        setAuthVisible(true);
      })}

      {authVisible && (
        <Popup
          onClickClose={() => {
            setAuthVisible(false);
          }}
        >
          <div className={styles.auth}>
            <button
              className={styles.close}
              onClick={() => {
                setAuthVisible(false);
              }}
            >
              <IconCloseCircle />
            </button>
            <div className={styles.logo}>
              <Logo asLink={false} size={44} />
            </div>
            <h2 className={styles.title}>Добро пожаловать в&nbsp;City Guide</h2>
            <p className={styles.description}>Социальная сеть для путешественников</p>
            <div className={styles.actions}>
              <button
                className={`${styles.button} ${styles.facebook}`}
                onClick={authWithFacebook}
              >
                Facebook
              </button>
              <button
                className={`${styles.button} ${styles.google}`}
                onClick={authWithGoogle}
              >
                Google
              </button>
            </div>
            <p className={styles.terms}>Зарегистрировавшись или нет, вы соглашаетесь с Правилами сервиса</p>
          </div>
        </Popup>
      )}
    </>
  );
};

Auth.propTypes = {
  children: PropTypes.func.isRequired,
  authWithGoogle: PropTypes.func.isRequired,
  authWithFacebook: PropTypes.func.isRequired,
};

export default connect(null, userActions)(Auth);