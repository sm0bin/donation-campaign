import { useEffect, useState } from "react";
import YourDonation from "./YourDonation";
import { useLoaderData } from "react-router-dom";
import { getMyDonations } from "./utility/localStorage";

const YourDonations = () => {
  const allDonations = useLoaderData();
  const [myDonations, setMyDonations] = useState([]);

  useEffect(() => {
    const myStoredDonations = getMyDonations();
    if (allDonations.length > 0) {
      const mySelectedDonations = allDonations.filter((donation) =>
        myStoredDonations.includes(donation.id)
      );
      setMyDonations(mySelectedDonations);
    }
  }, [allDonations]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myDonations.map((item) => (
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
