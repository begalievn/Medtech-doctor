import React, { useEffect, useState } from "react";

import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { dateConverter } from "../../../../../../utils/helpers/dateConverter";
import { formatTime } from "../../../../../../utils/helpers/formatTime";

import classes from "./makeAppointmentModal.module.scss";
import {
  useCreateCheckListMutation,
  useLazySearchPatientsQuery
} from "../../../../../../store/features/patients/patientsApi";
import useDebounce from "../../../../../../hooks/useDebounce";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  minHeight: "371px",
  background: "white",
  boxShadow: 24,
  borderRadius: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const MakeAppointmentModal = ({
  openModal,
  setOpenModal,
  doctorId,
  timeForAppointment,
  selectedDate,
}) => {
  const [disabled, setDisabled] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [patientId, setPatientId] = useState();

  const [searchPatients, { data: searchData = [] }] =
    useLazySearchPatientsQuery();

  const [createCheckList, { data: createCheckListResponse }] = useCreateCheckListMutation();

  console.log("searchData: ", searchData);
  console.log("patientId: ", patientId);

  const debouncedValue = useDebounce(searchText, 400);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
    console.log(value);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleCreate = () => {
    console.log("Create an appointment");
    setSearchText('');
    setOpenModal(false);
    const data = {
      patientId,
      doctorId,
      time: timeForAppointment,
      date: dateConverter(selectedDate, "-", true)
    }
    createCheckList(data);
    console.log("data: ", data);
  };

  const handleSelectClick = (data) => {
    setPatientId(data?.patientId);
    setSearchText(data?.fio);
    setDisabled(false);
  }

  useEffect(() => {
    if (searchText.length > 0) {
      searchPatients(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        disableAutoFocus={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <div className={classes.close} onClick={handleClose}></div>
          <div className={classes.content}>
            <h3>Запись на прием</h3>
            <div className={classes.date_time}>
              <p>Дата и время встречи</p>
              <div>
                <span>{dateConverter(selectedDate, ".")}</span>
                <span>{formatTime(timeForAppointment, ":", ":", 2)}</span>
              </div>
            </div>
            <div className={classes.patient_input}>
              <p></p>
              <input
                value={searchText}
                onChange={handleSearchChange}
                placeholder={"Выбрать пациента"}
              />
            </div>
            {(searchData && searchText) && (
              <div className={classes.search_values}>
                {searchData.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelectClick(item)}
                    className={classes.search_item}
                  >
                    {item?.fio
                  }</div>
                ))}
              </div>
            )}

            <div className={classes.appointment_button}>
              <button disabled={disabled} onClick={handleCreate}>
                Записать
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MakeAppointmentModal;
