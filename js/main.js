'use strict';

const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkMaxStringLength = function (value, maxLength) {
  return value.length <= maxLength;
};

checkMaxStringLength('комментарий', 12);

const POSTS_LENGTH = 25;
const DESCRIPTIONS = [
  'photo-1',
  'photo-2',
  'photo-3',
  'photo-4',
  'photo-5',
];
const uniqueCommentsIds = [];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Вася',
  'Алиса',
  'Горыныч',
  'Кнопычка',
  'МариИвановна',
  'Димас',
  'Серый',
  'Ли Джун Ки',
  'Силвестер',
  'Скала',
  'Adele',
  'Ais',
  'Ромчик',
  'Карп',
  'Луна',
  'Васелиса',
  'Анджела',
  'Грут',
  'Джонс',
  'Манки',
  'Хрюша',
];

const getRandomUniqueInt = function (min, max, array) {
  const id = getRandomInt(min, max);

  if (array.indexOf(id) + 1) {
    return getRandomUniqueInt(min, max, array);
  }

  return id;
};

const getRandomArrayElement = function (array) {
  const index = getRandomInt(0, array.length - 1);
  return array[index];
}

const createCommentId = function () {
  const id = getRandomUniqueInt(1, 500, uniqueCommentsIds);
  uniqueCommentsIds.push(id);
  return id;
};

const createComment = function () {
  return {
    id: createCommentId(),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }
};

const createComments = function () {
  const lengthArrayComments = getRandomInt(1, 6);
  const emptyArr = new Array(lengthArrayComments).fill(null);
  const comments = emptyArr.map(() => { return createComment() });
  return comments;
};

const createPost = function (index) {
  return {
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInt(15, 200),
    comments: createComments(),
  };
};

const emptyArr = new Array(POSTS_LENGTH).fill(null);
emptyArr.map((_, index) => { return createPost(index) });



