import PropTypes from "prop-types";

const DonationCard = ({ item }) => {
  const { img, title, category, text_button_bg, category_bg, card_bg } = item;

  return (
    <div
      style={{
        background: card_bg,
      }}
      className="rounded-lg"
    >
      <img src={img} className="rounded-t-lg" alt="" />
      <div className="p-4">
        <span
          style={{ backgroundColor: category_bg, color: text_button_bg }}
          className="px-2.5 py-1 rounded mb-2 inline-block text-sm font-medium"
        >
          {category}
        </span>
        <h2 style={{ color: text_button_bg }} className="font-semibold text-xl">
          {title}
        </h2>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  item: PropTypes.object,
};

export default DonationCard;
