import { isEscEvent } from './util.js'

const postModal = document.querySelector('.big-picture');
const postModalCloseButton = document.querySelector('#picture-cancel');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const socialComments = postModal.querySelector('.social__comments');
const socialComment = socialComments.querySelector('li');

//скрываем блоки счётчика комментариев и загрузки новых комментариев
socialCommentCount.classList.add('hidden');
commentsLoader.classList.add('hidden');

const onModalEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePostModal();
  }
};

export const openPostModal = function (post) {
  document.body.classList.add('modal-open');
  postModal.classList.remove('hidden');
  creatPostModal(post);
  document.addEventListener('keydown', onModalEscKeydown);
};

const closePostModal = function () {
  document.body.classList.remove('modal-open');
  postModal.classList.add('hidden');
  document.removeEventListener('keydown', onModalEscKeydown);
}

const creatPostModal = function (post) {
  postModal.querySelector('.big-picture__img img').setAttribute('src', post.url)
  postModal.querySelector('.likes-count').textContent = post.likes;
  postModal.querySelector('.comments-count').textContent = post.comments.lenghth;
  postModal.querySelector('.social__caption').textContent = post.description;

  post.comments.forEach((comment) => {
    const newSocialComment = socialComment.cloneNode(true);
    newSocialComment.querySelector('.social__picture').setAttribute('src', comment.avatar);
    newSocialComment.querySelector('.social__text').textContent = comment.message;
    newSocialComment.querySelector('.social__picture').setAttribute('alt', comment.name);
    socialComments.insertBefore(newSocialComment, socialComment);
  });
};

postModalCloseButton.addEventListener('click', () => {
  closePostModal();
});


