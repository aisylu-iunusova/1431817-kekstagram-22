import { openPostModal } from './post.js';

const postList = document.querySelector('.pictures');
const postTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const clearGallery = () => {
  const posts = document.querySelectorAll('.picture');

  for (const post of posts) {
    post.remove();
  }
};

const renderGallery = (posts) => {
  clearGallery();

  posts.forEach(({ url, likes, comments }) => {
    const postElement = postTemplate.cloneNode(true);

    postElement.querySelector('.picture__img').src = url;
    postElement.querySelector('.picture__likes').textContent = likes;
    postElement.querySelector('.picture__comments').textContent = comments.length;

    const onOpenPostModal = (evt) => {
      evt.preventDefault();
      openPostModal({ url, likes, comments });
    };

    postElement.addEventListener('click', onOpenPostModal);
    postList.appendChild(postElement);
  });
};

export {
  renderGallery
}