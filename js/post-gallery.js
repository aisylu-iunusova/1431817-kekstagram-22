import { openPostModal } from './post.js';

const postList = document.querySelector('.pictures');
const postTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

export const renderPostGallery = (posts) => {
  posts.forEach(post => {
    const postElement = postTemplate.cloneNode(true);

    postElement.querySelector('.picture__img').setAttribute('src', post.url);
    postElement.querySelector('.picture__likes').textContent = post.likes;
    postElement.querySelector('.picture__comments').textContent = post.comments.length;

    postElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      openPostModal(post);
    });

    postList.appendChild(postElement);
  });
};
