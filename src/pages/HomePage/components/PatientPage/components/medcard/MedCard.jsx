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
    window.scroll({ top: 500, behavior: "smooth" });
  };

  // Handles save button click
  const handleSaveButtonClick = () => {
    console.log(medCardValues);
    setEditable(false);
  };

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
              <EditSaveButton
                text={"Сохранить"}
                onClick={handleSaveButtonClick}
              />
            ) : (
              <EditSaveButton
                text={"Редактировать"}
                onClick={handleEditButtonClick}
              />
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
              name={"registrationDate"}
              value={medCardValues.registrationDate}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Резус- принадлежность беременной"}
              name={"rhFactorPregnant"}
              value={medCardValues.rhFactorPregnant}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Кровь на ВИЧ"}
              value={medCardValues.bloodHiv}
              name={"bloodHiv"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Прибыла из другой мед. организации: "}
              value={medCardValues.fromAnotherMedOrganizationReason}
              name={"fromAnotherMedOrganizationReason"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Резус- принадлежность мужа/партнера"}
              value={medCardValues.rhFactorPartner}
              name={"rhFactorPartner"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Указать откуда"}
              value={medCardValues.nameOfAnotherMedOrganization}
              name={"nameOfAnotherMedOrganization"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Титр резус- антител в 28 нед. беременности"}
              value={medCardValues.titerRhFactorInTwentyEightMonth}
              name={"titerRhFactorInTwentyEightMonth"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Кровь на ВИЧ партнера"}
              value={medCardValues.bloodHivPartner}
              name={"bloodHivPartner"}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={classes.patient_info}>
          <div className={classes.title} onClick={() => handleTitleClick("2")}>
            <h3>Данные о пациенте</h3>
            <img src={isActive("2") ? openArrow : closedArrow} alt="" />
          </div>
          <div className={isActive("2") ? classes.fields : classes.invisible}>
            <MedCardTextField
              disabled={!editable}
              label={"Фамилия"}
              value={medCardValues.lastName}
              name={"lastName"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Имя"}
              value={medCardValues.firstName}
              name={"firstName"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Отчество"}
              onChange={handleInputChange}
              value={medCardValues.middleName}
              name={"middleName"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Число, месяц, год рождения"}
              onChange={handleInputChange}
              value={medCardValues.birthday}
              name={"birthday"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Территория страхования"}
              onChange={handleInputChange}
              value={medCardValues.middleName}
              name={"middleName"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Номер удостоверения соц. защиты"}
              onChange={handleInputChange}
              value={medCardValues.insuranceNumber}
              name={"insuranceNumber"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Гражданство"}
              onChange={handleInputChange}
              value={medCardValues.citizenship}
              name={"citizenship"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Категория пациента"}
              onChange={handleInputChange}
              value={medCardValues.patientCategory}
              name={"patientCategory"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Постоянное место жительства"}
              onChange={handleInputChange}
              value={medCardValues.patientAddress}
              name={"patientAddress"}
            />
          </div>
        </div>
        <div className={classes.working_activity_education}>
          <div className={classes.title} onClick={() => handleTitleClick("3")}>
            <h3>Трудовая деятельность и образование</h3>
            <img src={isActive("3") ? openArrow : closedArrow} alt="" />
          </div>
          <div className={isActive("3") ? classes.fields : classes.invisible}>
            <MedCardTextField
              disabled={!editable}
              label={"Место работы"}
              onChange={handleInputChange}
              value={medCardValues.workPlace}
              name={"workPlace"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Должность"}
              onChange={handleInputChange}
              value={medCardValues.position}
              name={"position"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Телефон"}
              onChange={handleInputChange}
              value={medCardValues.phoneNumber}
              name={"phoneNumber"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Условия труда"}
              onChange={handleInputChange}
              value={medCardValues.workConditions}
              name={"workConditions"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Работает ли теперь"}
              onChange={handleInputChange}
              value={medCardValues.worksNow}
              name={"worksNow"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Образование"}
              onChange={handleInputChange}
              value={medCardValues.education}
              name={"education"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Семейное положение"}
              onChange={handleInputChange}
              value={medCardValues.married}
              name={"married"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Дан отпуск по беременности с"}
              onChange={handleInputChange}
              value={medCardValues.vacationFromForPregnancy}
              name={"vacationFromForPregnancy"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Дан отпуск по беременности до"}
              onChange={handleInputChange}
              value={medCardValues.vacationUntilForPregnancy}
              name={"vacationUntilForPregnancy"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Беременность (которая) "}
              onChange={handleInputChange}
              value={medCardValues.pregnancyNumber}
              name={"pregnancyNumber"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Роды (которые)"}
              onChange={handleInputChange}
              value={medCardValues.childbirthNumber}
              name={"childbirthNumber"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Фамилия мужа"}
              onChange={handleInputChange}
              value={medCardValues.husbandLastName}
              name={"husbandLastName"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Номер телефона"}
              onChange={handleInputChange}
              value={medCardValues.husbandPhoneNumber}
              name={"husbandPhoneNumber"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Место работы мужа/партнера"}
              onChange={handleInputChange}
              value={medCardValues.husbandWorkPlace}
              name={"husbandWorkPlace"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Срок беременности по последним месячным"}
              onChange={handleInputChange}
              value={medCardValues.gestationalAgeByLastMenstruation}
              name={"gestationalAgeByLastMenstruation"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"От УЗИ"}
              onChange={handleInputChange}
              value={medCardValues.gestationalAgeByUltrasound}
              name={"gestationalAgeByUltrasound"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Предполагаемая дата родов"}
              onChange={handleInputChange}
              value={medCardValues.estimatedDateOfBirth}
              name={'estimatedDateOfBirth'}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Если взята на учет в сроке беременности свыше"}
              onChange={handleInputChange}
              value={medCardValues.lateRegistrationReason}
              name={"lateRegistrationReason"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Дата осмотра"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"№ листка нетрудоспособности"}
              onChange={handleInputChange}
              value={medCardValues.disabilityListNumber}
              name={"disabilityListNumber"}
            />
          </div>
        </div>
        <div className={classes.complaints_first_review}>
          <div className={classes.title} onClick={() => handleTitleClick("4")}>
            <h3>Жалобы при первичном осмотре</h3>
            <img src={isActive("4") ? openArrow : closedArrow} alt="" />
          </div>
          <div className={isActive("4") ? classes.fields : classes.invisible}>
            <MedCardTextField
              disabled={!editable}
              label={"Жалобы при первичном осмотре"}
              onChange={handleInputChange}
              value={medCardValues.firstVisitComplaints}
              name={"firstVisitComplaints"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Аллергия на препараты"}
              onChange={handleInputChange}
              value={medCardValues.allergicToDrugs}
              name={"allergicToDrugs"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Перенесенные заболевания и операции"}
              onChange={handleInputChange}
              value={medCardValues.pastIllnessesAndSurgeries}
              name={"pastIllnessesAndSurgeries"}
            />
          </div>
        </div>
        <div className={classes.first_survey}>
          <div className={classes.title} onClick={() => handleTitleClick("5")}>
            <h3>Первое обследование беременной</h3>
            <img src={isActive("5") ? openArrow : closedArrow} alt="" />
          </div>
          <div className={isActive("5") ? classes.fields : classes.invisible}>
            <MedCardTextField
              disabled={!editable}
              label={"Рост"}
              onChange={handleInputChange}
              value={medCardValues.firstVisitGrowth}
              name={"firstVisitGrowth"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Вес"}
              onChange={handleInputChange}
              value={medCardValues.firstVisitWeight}
              name={"firstVisitWeight"}
            />
            {/*<MedCardTextField*/}
            {/*  disabled={!editable}*/}
            {/*  label={"ИМТ"}*/}
            {/*  onChange={handleInputChange}*/}
            {/*  value={medCardValues.}*/}
            {/*/>*/}
            <MedCardTextField
              disabled={!editable}
              label={"Кожные покровы и слизистые"}
              onChange={handleInputChange}
              value={medCardValues.skinAndMucousMembranes}
              name={"skinAndMucousMembranes"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Щитовидная железа:"}
              onChange={handleInputChange}
              value={medCardValues.thyroid}
              name={"thyroid"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Молочные железы"}
              onChange={handleInputChange}
              value={medCardValues.milkGlands}
              name={"milkGlands"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Периферические лимфатические узлы"}
              onChange={handleInputChange}
              value={medCardValues.peripheralLymphNodes}
              name={"peripheralLymphNodes"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Дыхательная система"}
              onChange={handleInputChange}
              value={medCardValues.respiratorySystem}
              name={"respiratorySystem"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Сердечно -сосудистая система"}
              onChange={handleInputChange}
              value={medCardValues.cardiovascularSystem}
              name={"cardiovascularSystem"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Артериальное давление"}
              onChange={handleInputChange}
              value={medCardValues.arterialPressure}
              name={"arterialPressure"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Пищеварительная система:"}
              onChange={handleInputChange}
              value={medCardValues.digestiveSystem}
              name={"digestiveSystem"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Мочевыделительная система"}
              onChange={handleInputChange}
              value={medCardValues.urinarySystem}
              name={"urinarySystem"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Отеки"}
              onChange={handleInputChange}
              value={medCardValues.edema}
              name={"edema"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Костный таз"}
              onChange={handleInputChange}
              value={medCardValues.bonePelvis}
              name={"bonePelvis"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Высота дна матки"}
              onChange={handleInputChange}
              value={medCardValues.uterineFundusHeight}
              name={"uterineFundusHeight"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Сердцебиение плода"}
              onChange={handleInputChange}
              value={medCardValues.fetalHeartbeat}
              name={"fetalHeartbeat"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Наружные половые органы"}
              onChange={handleInputChange}
              value={medCardValues.externalGenitalia}
              name={"externalGenitalia"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Осмотр шейки матки в зеркалах"}
              onChange={handleInputChange}
              value={medCardValues.examinationOfCervixInMirrors}
              name={"examinationOfCervixInMirrors"}
            />
            <MedCardTextField
              disabled={!editable}
              onChange={handleInputChange}
              label={"Бимануальное исследование"}
              value={medCardValues.bimanualStudy}
              name={"bimanualStudy"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Выделения из влагалища"}
              onChange={handleInputChange}
              value={medCardValues.vaginalDischarge}
              name={"vaginalDischarge"}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Предварительный диагноз"}
              onChange={handleInputChange}
              value={medCardValues.provisionalDiagnosis}
              name={"provisionalDiagnosis"}
            />
          </div>
        </div>
        <div className={classes.assignments}>
          <div className={classes.title} onClick={() => handleTitleClick("6")}>
            <h3>Назначения</h3>
            <img src={isActive("6") ? openArrow : closedArrow} alt="" />
          </div>
          <div className={isActive("6") ? classes.fields : classes.invisible}>
            <MedCardTextField
              disabled={!editable}
              label={"Анализ крови на гемоглобин"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Группа крови и резус фактор"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Анализ мочи на белок"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Проведено дотестовое консультирование по ВИЧ"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Согласно на тестирование"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Анализ крови на ВИЧ"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Анализ крови на сифилис"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Бактериологический посев мочи"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"УЗИ (в 18 недель)"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Фолиевая кислота"}
              onChange={handleInputChange}
            />
            <MedCardTextField
              disabled={!editable}
              label={"Калия йодид"}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedCard;
