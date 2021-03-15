import { makeUniqueRandomElement } from './util.js';
import { FILTER_RANDOM_POST_QUANTITY, RERENDER_DELAY, FILTERS_INACTIVE, FILTERS_BUTTON_ACTIVE, FILTER_RANDOM, FILTER_DISCUSSED } from './const.js';
import { renderGallery } from './gallery.js';
import { debounce } from 'lodash';

const filtersSection = document.querySelector('.img-filters');
const filtersForm = document.querySelector('.img-filters__form');
const filters = document.querySelectorAll('.img-filters__button');


const getPostsSortByComments = ([...newPosts]) => {
  newPosts.sort((a, b) => b.comments.length - a.comments.length);
  return newPosts
};

const getPostsByRandom = (posts) => {
  return makeUniqueRandomElement(posts, FILTER_RANDOM_POST_QUANTITY);
};

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
  filtersSection.classList.remove(FILTERS_INACTIVE);
};

const toggleFilters = (currentFilter) => {
  for (const filter of filters) {
    filter.classList.remove(FILTERS_BUTTON_ACTIVE);
  }

  currentFilter.classList.add(FILTERS_BUTTON_ACTIVE);
};

const renderFilter = (posts) => {
  activateFilters();

  const onFilterPosts = debounce((evt) => {
    toggleFilters(evt.target);

    if (evt.target.id === FILTER_RANDOM) {
      filterByRandom(posts);
    } else if (evt.target.id === FILTER_DISCUSSED) {
      filterByComments(posts);
    } else {
      filterByDefault(posts);
    }
  }, RERENDER_DELAY);

  filtersForm.addEventListener('click', onFilterPosts);
};

export {
  renderFilter
}