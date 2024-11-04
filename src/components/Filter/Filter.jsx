import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/slices/fiter';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    const name = e.target.value;
    dispatch(addFilter(name));
  };

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        type="text"
        className={css.filterName}
        name="name"
        placeholder="Enter filter"
        onChange={handleChange}
        autoComplete="off"
      />
    </div>
  );
}
