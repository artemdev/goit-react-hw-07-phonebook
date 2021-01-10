export default function Filter({ setFilter }) {
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
