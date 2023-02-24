import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';
import css from './filter.module.scss';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterContact = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const idElement = nanoid();

  return (
    <div className={css['filter-box']}>
      <label className={css['filter-label']}>
        Find contact by name or by number
      </label>
      <input
        id={idElement}
        onChange={handleFilterContact}
        value={filter}
        name="filter"
        title="Find contacts by name or by number"
        required
        placeholder="name or number..."
        autoComplete="off"
        className={css['filter-input']}
      />
    </div>
  );
};

export default Filter;
