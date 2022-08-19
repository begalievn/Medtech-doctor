import {LOGIN_REGEX} from "../../utils/consts/homeConsts";

const REQUIRED_FIELD = 'Необходимо заполнить поле *';

export const loginValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.length < 2) {
      return 'Должно быть не меньше 6 символов';
    } else if (!LOGIN_REGEX.test(value)) {
      return 'Не верный формат почты!'
    }
    return true;
  },
};

export const codeValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if(value.length < 6) {
      return "Должно быть не меньше 6 символов"
    }
    return true;
  }
}
