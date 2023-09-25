import PropTypes from "prop-types";

const YourDonations = ({ item }) => {
  const { img, title, category, text_button_bg, category_bg, card_bg, price } =
    item;

  return (
    <div
      style={{
        background: card_bg,
      }}
      className="rounded-lg overflow-hidden flex"
    >
      <img src={img} className=" w-1/3" alt="" />
      <div className="p-4">
        <span
          style={{ backgroundColor: category_bg }}
          className="px-2.5 py-1 rounded mb-2 inline-block"
        >
          {category}
        </span>
        <h2 style={{ color: text_button_bg }} className="font-semibold text-xl">
          {title}
        </h2>
        <h2>{price}</h2>
        <button>View Details</button>
      </div>
    </div>
  );
};

YourDonations.propTypes = {
  item: PropTypes.object,
};

export default YourDonations;
