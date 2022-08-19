// modules
import React from "react";

// components
import MainPageComp from "../../components/MainPageComponents/MainPageComp";
import MainPageIntro from "../../components/MainPageComponents/MainPageIntro";

// assets
import { main_colleagues_bg, main_patients_bg, main_schedule_bg} from '../../assets/images/images';


const backgroundImages = {
  SCHEDULE_IMAGE: main_schedule_bg,
  COLLEAGUES_IMAGE: main_colleagues_bg,
  PATIENTS_IMAGE: main_patients_bg,
};

const mainPageContentData = [
  {
    title: "Расписание",
    paragraph:
      "В данном разделе вы сможете распределить свой график приема на обследование пациентов. Для этого вам надо всего лишь прописать время в какое время вы проводите осмотр, а в свою очередь пациенты с помощью мобильного приложения смогут просмотреть и забронировать время для обследования.",
    backgroundImage: backgroundImages.SCHEDULE_IMAGE,
    path: "/home",
  },
  {
    title: "Пациенты",
    paragraph:
      "В этом разделе будут отоброжаться ваши пациенты, заполнять их чек-лист просматривать медицинскую  карту.",
    backgroundImage: backgroundImages.PATIENTS_IMAGE,
    path: "/home/patients",
  },
  {
    title: "Сотрудники",
    paragraph:
      "В этом разделе вы прописываете вопросы для своих пациентов и сохраняете их и прикрепляете к определённому пациенту в свою очередь этот чек-лист отображается в мобильном приложение пациентов которые вносят ответы на заданные вопросы с пошью  галочки или свободного ответа.",
    backgroundImage: backgroundImages.COLLEAGUES_IMAGE,
    path: "/home/colleagues",
  },
];

const MainPage = () => {
  return (
    <div>
      <MainPageIntro />
      {mainPageContentData.map((data, index) => (
        <MainPageComp
          key={index}
          title={data.title}
          paragraph={data.paragraph}
          backgroundImage={data.backgroundImage}
          path={data.path}
        />
      ))}
    </div>
  );
};

export default MainPage;
