import { connect } from 'react-redux';
import setFilter from '../redux/filter/filter-actions';

function Filter({ setFilter }) {
  const changeFilter = e => {
    const { value } = e.target;
    setFilter(value.toLowerCase());
  };

  return (
    <label htmlFor="filter">
      <input type="text" id="filter" onChange={changeFilter} />
    </label>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    setFilter: value => dispatch(setFilter(value)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
