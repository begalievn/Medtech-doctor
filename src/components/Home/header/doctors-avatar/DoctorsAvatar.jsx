// modules
import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

// rtk-queries
// import { useGetDoctorsImageQuery } from "../../../../store/features/doctors/doctorsQuery";

// assets
import { doctorsAva } from "../../../../assets/images/images";

// styles
import classes from "./doctorsAvatar.module.scss";

// functions
import { axiosWithToken } from "../../../../api/axios";

const DoctorsAvatar = () => {

  // const { data: image, isLoading: imageLoading, error: imageError } = useGetDoctorsImageQuery("");
  // console.log("DoctorsAvatar", image);

  const navigate = useNavigate();

  const [avatarImage, setAvatarImage] = useState(doctorsAva);

  // useEffect( () => {
  //   const getDoctorAvatar = async () => {
  //     const response = await axiosWithToken('/image/get');
  //     setAvatarImage(response.data);
  //     // console.log("Avatar response", response.data);
  //   }
  //
  //   try {
  //     getDoctorAvatar()
  //   }catch(err) {
  //     console.log(err);
  //   }
  // }, [])


  const handleClick = () => {
    console.log("Avatar has been clicked");
    navigate("profile");
  };

  return (
    <div className={classes.container} onClick={handleClick}>
      <div className={classes.user_icon}>
        <img src={avatarImage} alt="avatar" />
      </div>
      <p>{`Бегалиев Н.`}</p>
    </div>
  );
};

export default DoctorsAvatar;
