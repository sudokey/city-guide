import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import UserPick from '../UserPick';
import Button from '../Button';
import Auth from '../Auth';
import * as authActions from '../../actions/auth';

const UserPickOrAuth = ({ user, signOut, authLoaing }) => (
  <>
    {!authLoaing && (
      <>
        {user ? (
          <>
            <Button
              green
              onClick={signOut}
            >
              Выйти
            </Button>
            <UserPick
              src={user.photoURL}
              alt={user.displayName}
            />
          </>
        ) : (
          <Auth>
            {showPopup => (
              <Button
                green
                onClick={showPopup}
              >
                Войти
              </Button>
            )}
          </Auth>
        )}
      </>
    )}
  </>
);

UserPickOrAuth.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    photoURL: PropTypes.string,
    displayName: PropTypes.string,
  }),
  signOut: PropTypes.func.isRequired,
  authLoaing: PropTypes.bool.isRequired,
};

UserPickOrAuth.defaultProps = {
  user: undefined,
};

export default connect(state => ({
  user: state.users[state.auth.userUid],
  authLoaing: state.auth.loading,
}), authActions)(UserPickOrAuth);
