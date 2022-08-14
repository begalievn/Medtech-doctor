// modules
import React, {useState} from 'react';
import {IconButton, Modal} from "@mui/material";
import {Box} from "@mui/system";
import {PhotoCamera} from "@mui/icons-material";


// rtk-queries
import {
  useGetAllContentQuery,
  useUpdateContentMutation,
  useUploadImageContentByIdMutation
} from "../../../../../../store/features/content/contentQuery";

// utils
import {axiosForImage} from "../../../../../../api/axios";

// components
import TextFieldV3 from "../../../../../../components/Home/body/text-field-v3/TextFieldV3";
import EditSaveButton from "../../../PatientPage/components/edit-save-button/EditSaveButton";

// styles
import classes from "./contentModal.module.scss";

const boxStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "620px",
  height: "710px",
  borderRadius: "16px",
  background: "#fff",
  boxShadow: 24,
  p: 4,
}

const ContentModal = ({contentModalVisible, setContentModalVisible, data}) => {
  const [ updateContent, { isLoading: isUpdating } ] = useUpdateContentMutation();
  const [ uploadImageContentById, { isLoading: isImageUploading }] = useUploadImageContentByIdMutation();
  // Fetching all data to change uploaded image, because didn't find another way to change image
  const {
    data: content,
    isLoading: contentLoading,
    refetch,
    error: contentError,
  } = useGetAllContentQuery("");
  console.log("data", data);

  const [activeContent, setActiveContent] = useState(0);
  const [ contentTextValues, setContentTextValues ] = useState(data)
  const [activeImageOfContent, setActiveImageOfContent] = useState(data[activeContent]?.imageUrl)


  const handleClose = () => {
    setContentModalVisible(false);
  }

  const handleTitleClick = (order) => {
    setActiveContent(order - 1);
  }

  const handleSaveClick = async () => {
    const currentObj = {'contentId': contentTextValues[activeContent]?.contentId,
      'description': contentTextValues[activeContent]?.description,
      'header': contentTextValues[activeContent]?.header,
      'subtitle': contentTextValues[activeContent]?.subtitle
    };
    try {
      const response = await updateContent(currentObj);
    } catch (err) {
      console.log(err);
    }
    // setContentModalVisible(false);
    console.log(contentTextValues[activeContent]);
    console.log(currentObj);

    // refetch content
    refetch();
  }

  const handleCancelClick = () => {
    setContentModalVisible(false);
  }

  const handleTextChange = (e) => {
    const {name, value} = e.target;
    setContentTextValues((prev)=>{
      let newArr = JSON.parse(JSON.stringify(prev));
      newArr[activeContent][name] = value;
      return newArr;
    })
  }

  const handleUploadImage = async (e) => {
    console.log(e.target.files[0]);

    // Make a preview of uploaded image
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setActiveImageOfContent(objectUrl);

    // Make a post request to send the image
    const contentId = contentTextValues[activeContent]?.contentId;
    const imageData = new FormData();
    imageData.append("file", e.target.files[0]);
    try {
      const response = await axiosForImage.post(`https://medtech-neobisx.herokuapp.com/image/upload/content/${contentId}`, imageData );
      // refetch content
      refetch();
    }catch (err) {
      console.log(err);
    }
  }

  return (
    <Modal
      open={contentModalVisible}
      onClose={() => handleClose()}
    >
      <Box sx={boxStyles}>
        <div className={classes.close} onClick={handleCancelClick}></div>
        <h2 className={classes.header}>{data[0]?.weekNumber} неделя</h2>
        <div className={classes.content}>
          <div className={classes.content_titles}>
            {
              data.map((item, index) => (
                <h4
                  key={index}
                  className={item.order === activeContent + 1 ? `${classes.title} ${classes.active}` : `${classes.title}`}
                  onClick={() => handleTitleClick(item.order)}
                >Контент {item.order}</h4>
              ))
            }
          </div>
          <div className={classes.content_image}>
            <img src={activeImageOfContent} alt="" />
            <div className={classes.change_image}>
              <IconButton  color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" onChange={handleUploadImage} />
                <PhotoCamera sx={{width: "45px", height: "45px", color: '#5CC78D'}} />
              </IconButton>
            </div>
          </div>
          <div className={classes.body}>
            <div className={classes.first}>
              <TextFieldV3 label={"Заголовок"} style={{width: "265px"}}
                value={contentTextValues[activeContent]?.header}
                           name={"header"}
                           onChange={handleTextChange}
              />
              <TextFieldV3 label={"Подзаголовок"} style={{width: "265px"}}
                           value={contentTextValues[activeContent]?.subtitle}
                           onChange={handleTextChange}
                name={"subtitle"}
              />
            </div>
            <div className={classes.second}>
              <TextFieldV3 label={"Описание"} value={contentTextValues[activeContent]?.description} onChange={handleTextChange} name={"description"} type={"textArea"} style={{height: "140px"}}  />
            </div>
          </div>

          <div className={classes.controllers}>
            <EditSaveButton onClick={handleSaveClick} style={{width: "270px"}} text={isUpdating ? "Загругка..." : "Coхранить"} disabled={isUpdating}  />
            <EditSaveButton onClick={handleCancelClick} style={{width: "270px", background: "white", color: "#5CC78D", border: "solid 2px #5CC78D"}} text={"Отменить"} />
          </div>
        </div>
      </Box>

    </Modal>
  );
};

export default ContentModal;