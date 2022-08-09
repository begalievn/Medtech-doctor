// modules
import React, { useState } from "react";

// components
import MedCardTextField from "../../../../../../components/Home/body/medcard-text-field/MedCardTextField";

// assets
import {
  downloadIcon,
  openArrow,
  closedArrow,
} from "../../../../../../assets/icons/icons";

// constants
import { medCardInitialState } from "../../../../../../utils/consts/constants";

// styles
import classes from "./medCard.module.scss";
import EditSaveButton from "../edit-save-button/EditSaveButton";

const MedCard = () => {
  const [activeTabs, setActiveTabs] = useState(["1"]);
  const [medCardValues, setMedCardValues] = useState(medCardInitialState);
  const [editable, setEditable] = useState(false);

  // Handles edit button click
  const handleEditButtonClick = () => {
    setEditable(true);
    window.scroll({top: 500, behavior: "smooth"});
  }

  // Handles save button click
  const handleSaveButtonClick = () => {
    setEditable(false);
  }

  // Handles opening and closing of tabs
  const handleTitleClick = (id) => {
    if (activeTabs.includes(id)) {
      setActiveTabs(activeTabs.filter((item) => item !== id));
    } else {
      setActiveTabs([...activeTabs, id]);
    }
  };

  // To check if a selected tab is active
  const isActive = (id) => activeTabs.includes(id);

  // Handles med-card inputs changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setMedCardValues({
      ...medCardValues,
      [name]: value,
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>
          <div>
            <button className={classes.download_button}>
              <span>Скачать мед-карту</span>
              <img src={downloadIcon} alt="" />
            </button>
          </div>
          <div>
            {editable ? (
              <EditSaveButton text={"Сохранить"} onClick={handleSaveButtonClick} />
            ) : (
              <EditSaveButton text={"Редактировать"} onClick={handleEditButtonClick} />
            )}
          </div>
        </div>
      </div>
      <div className={classes.content}>
        <h2>МЕДИЦИНСКАЯ ДОКУМЕНТАЦИЯ</h2>
        <div className={classes.title_codes}>
          <div className={`${classes.row_div}`}>
            <div className={classes.codes}>
              <div>
                <h4>Код ЛПО: </h4>
                <span>{"data"}</span>
              </div>
              <p>Форма №111-У</p>
            </div>
          </div>
          <div className={`${classes.row_div}`}>
            <div className={classes.codes}>
              <div>
                <h4>Код ГСВ: </h4>
                <span>{"data"}</span>
              </div>
              <p>
                Утверждена Приказом Минздрава Кыргызской Республики №134 от 25
                марта 2013 года
              </p>
            </div>
          </div>
        </div>

        <h3 className={classes.header_2}>
          Индивидуальная карта беременной родительницы
        </h3>

        <div className={classes.medcard_number}>
          <MedCardTextField label={"Номер мед карты"} placeholder={"000000"} />
        </div>

        <div
          className={
            isActive("1")
              ? `${classes.green} ${classes.blood_analyse}`
              : classes.blood_analyse
          }
        >
          <div className={classes.title} onClick={() => handleTitleClick("1")}>
            <h3>Анализ крови</h3>
            <img src={isActive("1") ? openArrow : closedArrow} alt="" />
          </div>
          <div className={isActive("1") ? classes.fields : classes.invisible}>
            <MedCardTextField
              disabled={!editable}
              label={"Группа крови"}
              name={"bloodType"}
              value={medCardValues.bloodType}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Кровь на RW"}
              name={"bloodRw"}
              value={medCardValues.bloodRw}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Дата взятия на учет"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Резус- принадлежность беременной"}
            />
            <MedCardTextField disabled={!editable} label={"Кровь на ВИЧ"} />
            <MedCardTextField
              disabled={!editable}
              label={"Прибыла из другой мед. организации: "}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Резус- принадлежность мужа/партнера"}
            />
            <MedCardTextField disabled={!editable} label={"Указать откуда"} />
            <MedCardTextField
              disabled={!editable}
              label={"Титр резус- антител в 28 нед. беременности"}
            />
            <MedCardTextField disabled={!editable} label={"Кровь на ВИЧ партнера"} />
            <MedCardTextField disabled={!editable} label={"Группа крови"} />
          </div>
        </div>
        <div className={classes.patient_info}>
          <div className={classes.title} onClick={() => handleTitleClick("2")}>
            <h3>Данные о пациенте</h3>
            <img src={isActive("2") ? openArrow : closedArrow} alt="" />
          </div>
          <div className={isActive("2") ? classes.fields : classes.invisible}>
            <MedCardTextField disabled={!editable} label={"Фамилия"} />
            <MedCardTextField disabled={!editable} label={"Имя"} />
            <MedCardTextField disabled={!editable} label={"Отчество"} />
            <MedCardTextField disabled={!editable} label={"Число, месяц, год рождения"} />
            <MedCardTextField disabled={!editable} label={"Территория страхования"} />
            <MedCardTextField disabled={!editable} label={"Номер удостоверения соц. защиты"} />
            <MedCardTextField disabled={!editable} label={"Гражданство"} />
            <MedCardTextField disabled={!editable} label={"Категория пациента"} />
            <MedCardTextField disabled={!editable} label={"Постоянное место жительства"} />
          </div>
        </div>
        <div className={classes.working_activity_education}>
          <div className={classes.title} onClick={() => handleTitleClick("3")}>
            <h3>Трудовая деятельность и образование</h3>
            <img src={isActive("3") ? openArrow : closedArrow} alt="" />
          </div>
          <div className={isActive("3") ? classes.fields : classes.invisible}>
            <MedCardTextField disabled={!editable} label={"Место работы"} />
            <MedCardTextField disabled={!editable} label={"Должность"} />
            <MedCardTextField disabled={!editable} label={"Телефон"} />
            <MedCardTextField disabled={!editable} label={"Условия труда"} />
            <MedCardTextField disabled={!editable} label={"Работает ли теперь"} />
            <MedCardTextField disabled={!editable} label={"Образование"} />
            <MedCardTextField disabled={!editable} label={"Семейное положение"} />
            <MedCardTextField disabled={!editable} label={"Дан отпуск по беременности с"} />
            <MedCardTextField disabled={!editable} label={"Дан отпуск по беременности до"} />
            <MedCardTextField disabled={!editable} label={"Беременность (которая) "} />
            <MedCardTextField disabled={!editable} label={"Роды (которые)"} />
            <MedCardTextField disabled={!editable} label={"Фамилия мужа"} />
            <MedCardTextField disabled={!editable} label={"Номер телефона"} />
            <MedCardTextField disabled={!editable} label={"Место работы мужа/партнера"} />
            <MedCardTextField disabled={!editable}
              label={"Срок беременности по последним месячным"}
            />
            <MedCardTextField disabled={!editable} label={"От УЗИ"} />
            <MedCardTextField disabled={!editable} label={"Предполагаемая дата родов"} />
            <MedCardTextField disabled={!editable}
              label={"Если взята на учет в сроке беременности свыше"}
            />
            <MedCardTextField disabled={!editable} label={"Дата осмотра"} />
            <MedCardTextField disabled={!editable} label={"№ листка нетрудоспособности"} />
          </div>
        </div>
        <div className={classes.complaints_first_review}>
          <div className={classes.title} onClick={() => handleTitleClick("4")}>
            <h3>Жалобы при первичном осмотре</h3>
            <img src={isActive("4") ? openArrow : closedArrow} alt="" />
          </div>
          <div className={isActive("4") ? classes.fields : classes.invisible}>
            <MedCardTextField disabled={!editable} label={"Жалобы при первичном осмотре"} />
            <MedCardTextField disabled={!editable} label={"Аллергия на препараты"} />
            <MedCardTextField disabled={!editable} label={"Перенесенные заболевания и операции"} />
          </div>
        </div>
        <div className={classes.first_survey}>
          <div className={classes.title} onClick={() => handleTitleClick("5")}>
            <h3>Первое обследование беременной</h3>
            <img src={isActive("5") ? openArrow : closedArrow} alt="" />
          </div>
          <div className={isActive("5") ? classes.fields : classes.invisible}>
            <MedCardTextField disabled={!editable} label={"Рост"} />
            <MedCardTextField disabled={!editable} label={"Вес"} />
            <MedCardTextField disabled={!editable} label={"ИМТ"} />
            <MedCardTextField disabled={!editable} label={"Кожные покровы и слизистые"} />
            <MedCardTextField disabled={!editable} label={"Щитовидная железа:"} />
            <MedCardTextField disabled={!editable} label={"Молочные железы"} />
            <MedCardTextField disabled={!editable} label={"Периферические лимфатические узлы"} />
            <MedCardTextField disabled={!editable} label={"Дыхательная система"} />
            <MedCardTextField disabled={!editable} label={"Сердечно -сосудистая система"} />
            <MedCardTextField disabled={!editable} label={"Артериальное давление"} />
            <MedCardTextField disabled={!editable} label={"Пищеварительная система:"} />
            <MedCardTextField disabled={!editable} label={"Мочевыделительная система"} />
            <MedCardTextField disabled={!editable} label={"Отеки"} />
            <MedCardTextField disabled={!editable} label={"Костный таз"} />
            <MedCardTextField disabled={!editable} label={"Высота дна матки"} />
            <MedCardTextField disabled={!editable} label={"Сердцебиение плода"} />
            <MedCardTextField disabled={!editable} label={"Наружные половые органы"} />
            <MedCardTextField disabled={!editable} label={"Осмотр шейки матки в зеркалах"} />
            <MedCardTextField disabled={!editable} label={"Бимануальное исследование"} />
            <MedCardTextField disabled={!editable} label={"Выделения из влагалища"} />
            <MedCardTextField disabled={!editable} label={"Предварительный диагноз"} />
          </div>
        </div>
        <div className={classes.assignments}>
          <div className={classes.title} onClick={() => handleTitleClick("6")}>
            <h3>Назначения</h3>
            <img src={isActive("6") ? openArrow : closedArrow} alt="" />
          </div>
          <div className={isActive("6") ? classes.fields : classes.invisible}>
            <MedCardTextField disabled={!editable} label={"Анализ крови на гемоглобин"} />
            <MedCardTextField disabled={!editable} label={"Группа крови и резус фактор"} />
            <MedCardTextField disabled={!editable} label={"Анализ мочи на белок"} />
            <MedCardTextField disabled={!editable}
              label={"Проведено дотестовое консультирование по ВИЧ"}
            />
            <MedCardTextField disabled={!editable} label={"Согласно на тестирование"} />
            <MedCardTextField disabled={!editable} label={"Анализ крови на ВИЧ"} />
            <MedCardTextField disabled={!editable} label={"Анализ крови на сифилис"} />
            <MedCardTextField disabled={!editable} label={"Бактериологический посев мочи"} />
            <MedCardTextField disabled={!editable} label={"УЗИ (в 18 недель)"} />
            <MedCardTextField disabled={!editable} label={"Фолиевая кислота"} />
            <MedCardTextField disabled={!editable} label={"Калия йодид"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedCard;
