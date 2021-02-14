
import { posts } from './data.js';

const postList = document.querySelector('.pictures');
const postTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

posts.forEach((post) => {
  const postElement = postTemplate.cloneNode(true);
  postElement.querySelector('.picture__img').setAttribute('src', post.url);
  postElement.querySelector('.picture__likes').textContent = post.likes;
  postElement.querySelector('.picture__comments').textContent = post.comments.length;
  postList.appendChild(postElement);
});


