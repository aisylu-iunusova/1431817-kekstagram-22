'use strict';

const getRandomInt = function (min = 0, max = 10) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

getRandomInt();

const checkMaxStringLength = function (value, maxLength) {
  return value.length <= maxLength;
};

checkMaxStringLength('комментарий', 12);