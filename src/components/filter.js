import { connect } from 'react-redux';
import * as actions from '../utils/actions';

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
    setFilter: value => dispatch(actions.setFilter(value)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
