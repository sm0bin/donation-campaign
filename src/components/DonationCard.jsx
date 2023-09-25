import React from "react";
import PropTypes from "prop-types";

const DonationCard = ({ item }) => {
  const {
    img,
    title,
    category,
    text_button_bg,
    category_bg,
    card_bg,
    description,
    price,
  } = item;
  return (
    <div>
      <img src={img} alt="" />
      <h3>{category}</h3>
      <h2>{title}</h2>
    </div>
  );
};

DonationCard.propTypes = {
  item: PropTypes.object,
};

export default DonationCard;
