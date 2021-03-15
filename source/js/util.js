import { SHOW_ERROR_MESSAGE_TIME } from './const.js';

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArrayElement = (array) => {
  const index = getRandomInt(0, array.length - 1);
  return array[index];
};

export const getRandomUniqueInt = (min, max, array) => {
  const id = getRandomInt(min, max);

  if (array.indexOf(id) + 1) {
    return getRandomUniqueInt(min, max, array);
  }

  return id;
};

export const makeUniqueRandomElement = (array, quantity) => {
  const previousValues = [];
  const previousIndices = [];

  for (let i = 0; i < quantity; i++) {
    const index = getRandomUniqueInt(0, array.length - 1, previousIndices);
    previousIndices.push(index);
    previousValues.push(array[index]);
  }

  return previousValues;
};

export const checkMaxStringLength = (value, maxLength) => {
  return value.length <= maxLength;
};

export const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

export const showErrorMessage = (message) => {
  const alertContainer = document.createElement('div');
  const styles = {
    zIndex: 100,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    padding: '10px 3px',
    fontSize: '25px',
    textAlign: 'center',
    backgroundColor: '#f74b47',
  };

  alertContainer.style = styles;
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, SHOW_ERROR_MESSAGE_TIME);
};

export const checkFocusInput = {
  isFocus: false,
  inactiveFocus: () => {
    checkFocusInput.isFocus = false;
  },
  activeFocus: () => {
    checkFocusInput.isFocus = true;
  },
};
