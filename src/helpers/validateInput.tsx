import {locales} from '../locales';

export const validateInput = (inputValue: string) => {
  const regex = /^[a-zA-Z]*$/;
  if (!regex.test(inputValue)) {
    return locales.ONLY_LETTERS_ALLOWED;
  } else {
    return null;
  }
};
