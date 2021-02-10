
export const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomUniqueInt = function (min, max, array) {
  const id = getRandomInt(min, max);

  if (array.indexOf(id) + 1) {
    return getRandomUniqueInt(min, max, array);
  }

  return id;
};

export const checkMaxStringLength = function (value, maxLength) {
  return value.length <= maxLength;
};

export const getRandomArrayElement = function (array) {
  const index = getRandomInt(0, array.length - 1);
  return array[index];
}



