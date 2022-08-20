import {
  navScheduleIcon,
  navColleaguesIcon,
  navPatientsIcon,
  navContentIcon
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

export const navOptionsAdmin = [
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
  {
    icon: navContentIcon,
    text: "Контент",
    path: "content"
  }
]



export const LOGIN_REGEX = /\S+@\S+\.\S+/;
export const PWD_REGEX = /^.{6,}$/;


export const daysOfWeek = {
  MONDAY: 'Пн',
  TUESDAY: 'Вт',
  WEDNESDAY: 'Ср',
  THURSDAY: 'Чт',
  FRIDAY: 'Пт',
  SATURDAY: 'Сб',
  SUNDAY: 'Вс'
}