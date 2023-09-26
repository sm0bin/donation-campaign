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
      <img src={img} className=" w-1/3 object-cover" alt="" />
      <div className="p-6">
        <span
          style={{ backgroundColor: category_bg, color: text_button_bg }}
          className="px-2.5 py-1 rounded mb-2 inline-block text-sm font-medium"
        >
          {category}
        </span>
        <h2 className="font-semibold text-2xl text-brand-dark my-2">{title}</h2>
        <h2 style={{ color: text_button_bg }} className="font-semibold">
          ${price}
        </h2>
        <button
          style={{ background: text_button_bg }}
          className="px-4 py-2 rounded text-white text-lg font-semibold mt-5 hover:bg-black"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

YourDonations.propTypes = {
  item: PropTypes.object,
};

export default YourDonations;
