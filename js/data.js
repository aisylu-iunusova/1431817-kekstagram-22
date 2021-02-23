import { getRandomInt, getRandomArrayElement, getRandomUniqueInt } from './util.js';
import { POSTS_LENGTH, MESSAGES, NAMES, DESCRIPTIONS } from './const.js';

const uniqueCommentsIds = [];

const createCommentId = () => {
  const id = getRandomUniqueInt(1, 500, uniqueCommentsIds);
  uniqueCommentsIds.push(id);
  return id;
};

const createComment = () => {
  return {
    id: createCommentId(),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }
};

const createComments = () => {
  const lengthArrayComments = getRandomInt(1, 6);
  const emptyArr = new Array(lengthArrayComments).fill(null);
  const comments = emptyArr.map(() => { return createComment() });
  return comments;
};

const createPost = (index) => {
  return {
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInt(15, 200),
    comments: createComments(),
  };
};

const emptyArr = new Array(POSTS_LENGTH).fill(null);
export const posts = emptyArr.map((_, index) => { return createPost(index) });
