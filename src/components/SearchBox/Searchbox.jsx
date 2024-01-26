import PropTypes from "prop-types";

export const Searchbox = ({ value, onChange }) => {
  return (
    <div className="searchbox">
      <label htmlFor="searchbox">Find Countries</label>
      <input
        type="text"
        name="searchbox"
        id="searchbox"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
Searchbox.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
