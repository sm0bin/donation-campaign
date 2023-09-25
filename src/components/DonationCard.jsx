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

  //   const h2Class = `font-semibold text-xl text-[${text_button_bg}]`;
  //   console.log(h2Class);
  //   return (
  //     <div>
  //       <img src={img} alt="" />
  //       <h3 className={`px-2.5 py-1 rounded bg-[${category_bg}]`}>{category}</h3>
  //       <h2 className={`font-semibold text-xl text-[${text_button_bg}]`}>
  //         {title}
  //       </h2>
  //     </div>
  //   );

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
          style={{ backgroundColor: category_bg }}
          className="px-2.5 py-1 rounded mb-2 inline-block"
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
