import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Popup, { Content } from '../Popup';
import styles from './styles.less';
import Logo from '../Logo';
import * as authActions from '../../actions/auth';

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
          <Content
            className={styles.auth}
            onClickClose={() => {
              setAuthVisible(false);
            }}
          >
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
          </Content>
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

export default connect(null, authActions)(Auth);
