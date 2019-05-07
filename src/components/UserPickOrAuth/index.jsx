import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import UserPick from '../UserPick';
import Button from '../Button';
import Auth from '../Auth';
import * as userActions from '../../actions/user';

const UserPickOrAuth = ({ user, signOut }) => (
  <>
    {user.uid ? (
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
);

UserPickOrAuth.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    photoURL: PropTypes.string,
    displayName: PropTypes.string,
  }),
  signOut: PropTypes.func.isRequired,
};

UserPickOrAuth.defaultProps = {
  user: {},
};

export default connect(state => ({
  user: state.user,
}), userActions)(UserPickOrAuth);
