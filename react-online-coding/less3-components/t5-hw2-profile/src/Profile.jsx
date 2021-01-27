import React from 'react';
import moment from 'moment';

const Profile = props => {
  return (
    <>
      <h2 className="profile__name">
        {props.userData.firstName} {props.userData.lastName}
      </h2>
      <h3 className="profile__birth">
        {`Was born ${moment(props.userData.birthDate).format('DD MMM YY')} in ${
          props.userData.birthPlace
        }`}
      </h3>
    </>
  );
};

export default Profile;
