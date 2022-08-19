// modules
import React from "react";
import {
  Switch,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";

// components
import TableDataCell from "../../../../../../components/Home/body/table-data-cell/TableDataCell";
import { makeNumberWithZeros } from "../../../../../../utils/helpers/MakeNumberWithZeros";

// redux-actions
import { setPatientById } from "../../../../../../store/features/patients/patientsSlice";

// styles
import classes from "./patientsTable.module.scss";
import './styles.scss';



const PatientsTable = ({patientsList = []}) => {

  // tools
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (data) => {
    dispatch(setPatientById(data));
    localStorage.setItem("patientId", data.patientId);
    navigate(`${data.patientId}`);
  };

  const handleSwitchChange = (e, data) => {
    const { value } = e.target;
    console.log("Switch changed: ", data);
    console.log("value", value);
  };

  return (
    <div className={classes.container}>
      <TableContainer>
        <Table>
          <TableHead >
            <TableRow
              sx={{
                height: "50px",
                position: "sticky",
                top: "0",
                left: "0",
                zIndex: "10",
                background: "white",
                // boxShadow: "0px 1px 1px black"
                borderBottom: "solid 1px #3B393C",
              }}
            >
              <th>№</th>
              <th>ФИО пациента</th>
              <th>Номер телефона</th>
              <th>Электронная почта</th>
              <th>Срок бер-ти</th>
              <th>Адрес прописки</th>
              <th>Статус</th>
            </TableRow>
          </TableHead>
          <TableBody sx={{ "&:before": {content: `"-"`, lineHeight: "10px", display: 'block', color: 'transparent'}}}>
            {patientsList && patientsList?.map((item, index) => (
              <TableRow
                sx={{
                  background: index % 2 !== 0 ? "" : "#F8F8F8",
                  border: "none",
                  "&:hover": {
                    cursor: "pointer",
                    background: "#BDF5D7",
                  },
                }}
                key={index}
                onClick={() => handleClick(item)}
              >
                <TableDataCell>{makeNumberWithZeros(index + 1)}</TableDataCell>
                <TableDataCell>{item.fio}</TableDataCell>
                <TableDataCell>{item.phoneNumber}</TableDataCell>
                <TableDataCell>{item.email}</TableDataCell>
                <TableDataCell>{`${item.currentWeekOfPregnancy} неделя`}</TableDataCell>
                <TableDataCell>{item.residenceAddress}</TableDataCell>
                <TableDataCell>
                  {
                    <Switch
                      value={item.status === "ACTIVE"}
                      checked={item.status === "ACTIVE"}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => handleSwitchChange(e, item)}
                    />
                  }
                </TableDataCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PatientsTable;


