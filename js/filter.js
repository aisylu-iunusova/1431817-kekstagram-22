import { makeUniqueRandomElement } from './util.js'
import { FILTER_RANDOM_POST_QUANTITY, RERENDER_DELAY } from './const.js';
import { renderGallery } from './gallery.js';

const filtersSection = document.querySelector('.img-filters');
const filtersForm = document.querySelector('.img-filters__form');
const filters = document.querySelectorAll('.img-filters__button');

const getPostsSortByComments = ([...newPosts]) => {
  newPosts.sort((a, b) => b.comments.length - a.comments.length);
  return newPosts
}

const getPostsByRandom = (posts) => {
  return makeUniqueRandomElement(posts, FILTER_RANDOM_POST_QUANTITY);
}

const filterByRandom = (posts) => {
  const randomPosts = getPostsByRandom(posts);
  renderGallery(randomPosts);
};

const filterByComments = (posts) => {
  const sortedPosts = getPostsSortByComments(posts);
  renderGallery(sortedPosts);
};

const filterByDefault = (posts) => {
  renderGallery(posts);
};

const activateFilters = () => {
  filtersSection.classList.remove('img-filters--inactive');
}

const toggleFilters = (currentFilter) => {
  for (const filter of filters) {
    filter.classList.remove('img-filters__button--active');
  }

  currentFilter.classList.add('img-filters__button--active');
}

const filterByRandomThrottle = _.throttle((posts) => filterByRandom(posts), RERENDER_DELAY);
const filterByCommentsThrottle = _.throttle((posts) => filterByComments(posts), RERENDER_DELAY);
const filterByDefaultThrottle = _.throttle((posts) => filterByDefault(posts), RERENDER_DELAY);

const renderFilter = (posts) => {
  activateFilters();

  const handleClick = (evt) => {
    toggleFilters(evt.target);

    if (evt.target.getAttribute('id') === 'filter-random') {
      filterByRandomThrottle(posts)
    } else if (evt.target.getAttribute('id') === 'filter-discussed') {
      filterByCommentsThrottle(posts);
    } else {
      filterByDefaultThrottle(posts);
    }
  }

  filtersForm.addEventListener('click', handleClick);
}

export {
  renderFilter
}