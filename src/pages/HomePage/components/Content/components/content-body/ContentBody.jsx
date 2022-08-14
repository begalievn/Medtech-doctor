// modules
import React, {useMemo, useState} from 'react';

// components
import ContentSquare from "../content-square/ContentSquare";
import ContentModal from "../content-modal/ContentModal";

// utils
import {collectDataFromContent} from "../../../../../../utils/helpers/CollectDataFromContent";

// styles
import classes from './contentBody.module.scss';



const ContentBody = ({ content }) => {
  const [contentModalVisible, setContentModalVisible] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState([]);

  const result = useMemo(() => collectDataFromContent(content), [content]);
  console.log(result);
  console.log("week", selectedWeek);

  const handleContentClick = (data) => {
    setContentModalVisible(true);
    setSelectedWeek(data);
  }

  return (
    <>
      <div className={classes.container}>
        {
          result.map((item, index) => {
            if (index === 0) {
              return null;
            } else {
              return <ContentSquare onClick={() => handleContentClick(item)} key={index} data={item} />;
            }
          })
        }
        {
          contentModalVisible &&
          <ContentModal contentModalVisible={true} setContentModalVisible={setContentModalVisible} data={selectedWeek} />
        }
      </div>
    </>

  );
};

export default ContentBody;