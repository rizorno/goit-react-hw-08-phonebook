import { setFilter } from '../../redux/filter/filterSlice';
import { useDispatch } from 'react-redux';
// import propTypes from 'prop-types';
import css from './filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => dispatch(setFilter(e.target.value));

  return (
    <form className={css['filter-form']}>
      <label className={css['filter-label']} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css['filter-input']}
        name="filter"
        type="text"
        onChange={handleChange}
      />
    </form>
  );
};

// Filter.propTypes = {
//   onChange: propTypes.func,
// };

// import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
// import { selectFilter } from '../../redux/selectors';
// import { setFilter } from '../../redux/filterSlice';
// import css from './filter.module.scss';

// const Filter = () => {
//   const filter = useSelector(selectFilter);
//   const dispatch = useDispatch();

//   const handleFilterContact = e => {
//     const { value } = e.target;
//     dispatch(setFilter(value));
//   };

//   const idElement = nanoid();

//   return (
//     <label className={css.label}>
//       Find contacts by name or by number
//       <input
//         id={idElement}
//         onChange={handleFilterContact}
//         value={filter}
//         name="filter"
//         title="Find contacts by name or by number"
//         required
//         autoComplete="off"
//       />
//     </label>
//   );
// };

// export default Filter;
