import React from 'react';

import FilterLink from '../filter-button/filter-button.component';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../redux/filter/filter.types';

import './filter-section.style.scss'

const FilterSection = () => (
  <div className="filter-section">
    <FilterLink filter={SHOW_ALL}>All</FilterLink>
    <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default FilterSection;