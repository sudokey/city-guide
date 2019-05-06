import React from 'react';
import UserPick from '../UserPick';
import Button from '../Button';
import AuthPopup from '../AuthPopup';

const UserPickOrAuth = () => (
  <>
    {false ? (
      <UserPick />
    ) : (
      <AuthPopup>
        {showPopup => (
          <Button
            green
            onClick={showPopup}
          >
            Войти
          </Button>
        )}
      </AuthPopup>
    )}
  </>
);

export default UserPickOrAuth;
