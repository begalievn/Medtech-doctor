// modules
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// rtk-queries
import { useGetUserByIdQuery } from "../../../../store/features/user/userApi";

// assets
import { avatarPlaceholder } from "../../../../assets/images/images";

// styles
import classes from "./doctorsAvatar.module.scss";

const DoctorsAvatar = () => {
  const [avatarImage, setAvatarImage] = useState(avatarPlaceholder);

  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  const { data: userData, isLoading: userDataLoading } =
    useGetUserByIdQuery(userId);

  const handleClick = () => {
    navigate("profile");
  };

  return (
    <div className={classes.container} onClick={handleClick}>
      {userDataLoading ? null : (
        <>
          <div className={classes.user_icon}>
            <img src={avatarImage} alt="avatar" />
          </div>
          <p>{`${userData.lastName} ${userData.firstName.split("").slice(0, 1).join("")}.`}</p>
        </>
      )}
    </div>
  );
};

export default DoctorsAvatar;
