import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import Banner from "./Banner";

const DonationCards = () => {
  const [donationData, setDonationData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDonationData(data));
  }, []);

  return (
    <>
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {donationData.map((item) => (
          <DonationCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default DonationCards;
