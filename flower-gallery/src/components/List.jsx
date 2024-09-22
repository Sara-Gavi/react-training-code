import PropTypes from "prop-types";
import Item from "./Item";

function List({ flowers }) {
  const htmlFlowers = flowers.map((flower, idx) => {
    <li key={idx} className="image__card">
      <Item name={flower.title} url={flower.url} />
    </li>;
  });

  return <ul className="image__gallery">{htmlFlowers}</ul>;
}

List.propTypes = {
  flowers: PropTypes.array,
};
export default List;
