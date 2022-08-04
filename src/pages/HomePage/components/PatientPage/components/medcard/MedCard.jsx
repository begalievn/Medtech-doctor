import React from "react";

import { downloadIcon } from "../../../../../../assets/icons/icons";

import classes from "./medCard.module.scss";
import MedCardTextField from "../../../../../../components/Home/body/medcard-text-field/MedCardTextField";

const MedCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>
          <div>
            <button className={classes.download_button}>
              <span>Скачать мед-карту</span>
              <img src={downloadIcon} />
            </button>
          </div>
          <div>
            <button className={classes.save_button}>Сохранить</button>
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
        <h3>Индивидуальная карта беременной родительницы</h3>

        <div className={classes.medcard_number}>
          <div className={classes.row_div}>
            <p>Номер мед карты</p>
            <MedCardTextField placeholder={"000000"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedCard;
