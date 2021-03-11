const API_URL = 'https://22.javascript.pages.academy/kekstagram';

const getPosts = (onSuccess, onError) => {
  fetch(`${API_URL}/data`)
    .then((response) => response.json())
    .then((posts) => {
      onSuccess(posts)
    })
    .catch((error) => {
      onError(error);
    })
};

const sendPost = (onSuccess, onError, body) => {
  fetch(API_URL, {
    method: 'POST',
    body,
  })
    .then((response) => response.json())
    .then((posts) => {
      onSuccess(posts)
    })
    .catch((error) => {
      onError(error);
    })
};

export {
  getPosts,
  sendPost
};

