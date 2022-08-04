import {
  navScheduleIcon,
  navColleaguesIcon,
  navPatientsIcon,
} from "../../assets/icons/icons";

export const navOptions = [
  {
    icon: navScheduleIcon,
    text: "Расписание",
    path: "schedule",
  },
  {
    icon: navColleaguesIcon,
    text: "Сотрудники",
    path: "colleagues",
  },

  {
    icon: navPatientsIcon,
    text: "Пациентки",
    path: "patients",
  },
];

export const LOGIN_REGEX = /\S+@\S+\.\S+/;
export const PWD_REGEX = /^.{6,}$/;
