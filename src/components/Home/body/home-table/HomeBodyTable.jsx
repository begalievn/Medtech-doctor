import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import React from 'react';

const data = [
  {
    id: '001',
    doctorNameSurname: 'Ташболот И.Р',
    phoneNumber: '+996 778 890 900',
    email: 'ibragimov.tashbolon78@gmail.com',
    patientNumber: '45 пациентов',
    workingGraph: 'Mo Tu We Th Fr St Sn',
    status: false,
  },
  {
    id: '001',
    doctorNameSurname: 'Ташболот И.Р',
    phoneNumber: '+996 778 890 900',
    email: 'ibragimov.tashbolon78@gmail.com',
    patientNumber: '45 пациентов',
    workingGraph: 'Mo Tu We Th Fr St Sn',
    status: false,
  },
  {
    id: '001',
    doctorNameSurname: 'Ташболот И.Р',
    phoneNumber: '+996 778 890 900',
    email: 'ibragimov.tashbolon78@gmail.com',
    patientNumber: '45 пациентов',
    workingGraph: 'Mo Tu We Th Fr St Sn',
    status: false,
  },
  {
    id: '001',
    doctorNameSurname: 'Ташболот И.Р',
    phoneNumber: '+996 778 890 900',
    email: 'ibragimov.tashbolon78@gmail.com',
    patientNumber: '45 пациентов',
    workingGraph: 'Mo Tu We Th Fr St Sn',
    status: false,
  },
  {
    id: '001',
    doctorNameSurname: 'Ташболот И.Р',
    phoneNumber: '+996 778 890 900',
    email: 'ibragimov.tashbolon78@gmail.com',
    patientNumber: '45 пациентов',
    workingGraph: 'Mo Tu We Th Fr St Sn',
    status: false,
  },
  {
    id: '001',
    doctorNameSurname: 'Ташболот И.Р',
    phoneNumber: '+996 778 890 900',
    email: 'ibragimov.tashbolon78@gmail.com',
    patientNumber: '45 пациентов',
    workingGraph: 'Mo Tu We Th Fr St Sn',
    status: false,
  },
  {
    id: '001',
    doctorNameSurname: 'Ташболот И.Р',
    phoneNumber: '+996 778 890 900',
    email: 'ibragimov.tashbolon78@gmail.com',
    patientNumber: '45 пациентов',
    workingGraph: 'Mo Tu We Th Fr St Sn',
    status: false,
  },
  {
    id: '001',
    doctorNameSurname: 'Ташболот И.Р',
    phoneNumber: '+996 778 890 900',
    email: 'ibragimov.tashbolon78@gmail.com',
    patientNumber: '45 пациентов',
    workingGraph: 'Mo Tu We Th Fr St Sn',
    status: false,
  },
];

export const HomeBodyTable = ({ tableHeadData, tablebody }) => {
  return (
    <div>
      <TableContainer>
        <Table sx={{ maxWidth: '1137px' }}>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>ФИО врача</TableCell>
              <TableCell>Номер телефона</TableCell>
              <TableCell>Электронная почта</TableCell>
              <TableCell>Пациенты</TableCell>
              <TableCell>График работы</TableCell>
              <TableCell>Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: 'none',
              },
            }}
          >
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.doctorNameSurname}</TableCell>
                <TableCell>{item.phoneNumber}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.patientNumber}</TableCell>
                <TableCell>{item.workingGraph}</TableCell>
                <TableCell>{item.status ? 'true' : 'false'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
