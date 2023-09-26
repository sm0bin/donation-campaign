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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {donationData.map((item) => (
          <YourDonation key={item.id} item={item} />
        ))}
      </div>
      <button className="px-6 py-4 bg-green-500 font-semibold text-white rounded-lg mx-auto block mt-10 hover:bg-green-600">
        See All
      </button>
    </>
  );
};

export default YourDonations;
