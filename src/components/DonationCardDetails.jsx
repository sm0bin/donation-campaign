import { useLoaderData, useParams } from "react-router-dom";

const DonationCardDetails = () => {
  const allDonations = useLoaderData();
  const { donationId } = useParams();
  // const donationIdInt = parseInt(donationId);
  console.log(allDonations, donationId, useParams(), typeof donationId);
  const currentDonation = allDonations.find(
    (donation) => donation.id == donationId
  );
  console.log(currentDonation);
  const {
    img,
    title,
    description,
    category,
    text_button_bg,
    category_bg,
    card_bg,
    price,
  } = currentDonation;

  return (
    <div>
      <div className="relative rounded-lg overflow-hidden">
        <img className="w-full" src={img} alt="" />
        <div className="absolute bottom-0 p-9 bg-black/50 inset-x-0">
          <button
            style={{ background: text_button_bg }}
            className="text-white font-semibold text-xl px-6 py-4 rounded"
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <h2 className="text-brand-dark font-bold text-4xl mt-14 mb-6">{title}</h2>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default DonationCardDetails;
