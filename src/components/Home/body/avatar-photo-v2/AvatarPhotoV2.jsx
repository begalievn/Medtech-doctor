import React from 'react';

import classes from './avatarPhotoV2.module.scss';

const AvatarPhotoV2 = ({image}) => {
  return (
    <div className={classes.avatar} >
      <img src={image} alt="avatar" />
    </div>
  );
};

export default AvatarPhotoV2;