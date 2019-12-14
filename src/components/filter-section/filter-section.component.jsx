import React from 'react';

import FilterButton from '../filter-button/filter-button.component';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../redux/filter/filter.types';

import './filter-section.style.scss'

const FilterSection = () => (
  <div className="filter-section">
    <h3>Tasks Management</h3>
    <div className="filter-section-container">
      <FilterButton filter={SHOW_ALL}>All</FilterButton>
      <FilterButton filter={SHOW_ACTIVE}>Active</FilterButton>
      <FilterButton filter={SHOW_COMPLETED}>Completed</FilterButton>
    </div>
  </div>
);

export default FilterSection;