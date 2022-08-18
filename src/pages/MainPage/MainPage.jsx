import React from 'react';
import MainPageComp from '../../components/MainPageComponents/MainPageComp';
import MainPageIntro from '../../components/MainPageComponents/MainPageIntro';

import schedule_bg from '../../assets/images/schedule_bg.png';
import checklist_bg from '../../assets/images/checklist_bg.png';
import statistics_bg from '../../assets/images/statistics_bg.png';

const backgroundImages = {
  SCHEDULE_IMAGE: schedule_bg,
  CHECKLIST_IMAGE: checklist_bg,
  STATISTICS_IMAGE: statistics_bg,
};

const mainPageContentData = [
  {
    title: 'Расписание',
    paragraph:
      'В данном разделе вы сможете распределить свой график приема на обследование пациентов. Для этого вам надо всего лишь прописать время в какое время вы проводите осмотр, а в свою очередь пациенты с помощью мобильного приложения смогут просмотреть и забронировать время для обследования.',
    backgroundImage: backgroundImages.SCHEDULE_IMAGE,
    path: '/home',
  },
  {
    title: 'Чек-лист',
    paragraph:
      'В этом разделе вы прописываете вопросы для своих пациентов и сохраняете их и прикрепляете к определённому пациенту в свою очередь этот чек-лист отображается в мобильном приложение пациентов которые вносят ответы на заданные вопросы с пошью  галочки или свободного ответа.',
    backgroundImage: backgroundImages.CHECKLIST_IMAGE,
    path: '/home/check-list',
  },
  {
    title: 'Пользователи',
    paragraph:
      'На данной странице сайта будут отображаться ваши пациенты, что бы перейти на детальную страницу пациента вам не обходи кликнуть  на определенного пациента после чего вас перебросят на детальную страницу пациента где будут отображаться подробная информация о нем, также вы можете вносить изменения в данных о пользователе.',
    backgroundImage: backgroundImages.STATISTICS_IMAGE,
    path: '/home/check-list',
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
