const REQUIRED_FIELD = 'Required *';

export const loginValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.length < 2) {
      return 'Should be more than 2 symbols';
    }

    return true;
  },
};
