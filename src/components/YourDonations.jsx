import { useEffect, useState } from "react";
import YourDonation from "./YourDonation";

const YourDonations = () => {
  const [donationData, setDonationData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDonationData(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {donationData.map((item) => (
        <YourDonation key={item.id} item={item} />
      ))}
    </div>
  );
};

export default YourDonations;
