// modules
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// rtk-queries
import {
  useGetAllCheckListsOfPatientByIdQuery,
  useUpdateCheckListAnswersMutation,
} from "../../../../../../store/features/patients/patientsApi";

// components
import CheckListTable from "../check-list-table/CheckListTable";
import EditSaveButton from "../edit-save-button/EditSaveButton";
import Loader from "../../../../../../components/useful/loader/Loader";

// styles
import classes from "./checkList.module.scss";


const CheckList = ({ checkListId }) => {
  const { checkListIdParams } = useParams();
  const patientId = localStorage.getItem("patientId");

  // state
  const [checkList, setCheckList] = useState([]);
  const [editable, setEditable] = useState(false);

  const [updateCheckList, { isLoading: updateCheckListLoading }] =
    useUpdateCheckListAnswersMutation();

  const {
    data: checkListsData,
    isLoading: checkListsLoading,
    refetch
  } = useGetAllCheckListsOfPatientByIdQuery(patientId);

  const handleEditSaveClick = () => {
    if (editable) {
      console.log("Save");

      const body = checkList.map((item) => ({
        ...item,
        answerId: item.id,
      }));

      try {
        updateCheckList(body);
        refetch();
      } catch (err) {
        console.log(err);
      }
      console.log(checkList);
    } else {
      console.log("Edit");
    }
    setEditable((prev) => !prev);
  };

  useEffect(() => {
    if (checkListsData) {
      setCheckList(
        checkListsData.find(
          (element) => element.id === Number(checkListId || checkListIdParams)
        )?.answerEntities
      );
      console.log(checkListId);
    }
  }, [checkListsLoading, checkListId, checkListIdParams, checkListsData]);
  console.log(checkList);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Чек-лист</h2>
        <div>
          <div>
            <EditSaveButton
              onClick={handleEditSaveClick}
              text={
                updateCheckListLoading
                  ? "Загрузка..."
                  : editable
                  ? "Сохранить"
                  : "Редактировать"
              }
              disabled={updateCheckListLoading}
            />
          </div>
        </div>
      </div>
      <div className={classes.content}>
        {!checkListsLoading && checkList ? (
          <CheckListTable
            checkList={checkList}
            editable={editable}
            checkListId={checkListId}
            setCheckList={setCheckList}
          />
        ) : (
          <>
            <Loader />
            <h2 className={classes.choose_checklist} >Выберите чек-лист</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckList;
