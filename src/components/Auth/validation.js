const REQUIRED_FIELD = 'Необходимо заполнить поле *';

export const loginValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.length < 2) {
      return 'Should be more than 2 symbols';
    }

    return true;
  },
};
