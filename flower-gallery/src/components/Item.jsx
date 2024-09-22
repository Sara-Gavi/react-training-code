import PropTypes from "prop-types";

function Item({ name, url }) {
  return (
    <>
      <img src={url} alt={name}></img>
      <h3>{name}</h3>
    </>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default Item;
