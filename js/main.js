'use strict';

const getRandomInt = function (min = 0, max = 10) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt();

const checkMaxStringLength = function (value, maxLength) {
  return value.length <= maxLength;
};

checkMaxStringLength('комментарий', 12);
