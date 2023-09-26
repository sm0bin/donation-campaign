import { useEffect, useState } from "react";
import YourDonation from "./YourDonation";
import { useLoaderData } from "react-router-dom";
import { getMyDonations } from "./utility/localStorage";

const YourDonations = () => {
  const allDonations = useLoaderData();
  const [myDonations, setMyDonations] = useState([]);
  const [dataLength, setDataLength] = useState(4);

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
        {myDonations.slice(0, dataLength).map((item) => (
          <YourDonation key={item.id} item={item} />
        ))}
      </div>

      <button
        className={`px-6 py-4 bg-green-500 font-semibold text-white rounded-lg mx-auto mt-10 hover:bg-green-600 
        ${
          myDonations.length <= 4 || dataLength === myDonations.length
            ? "hidden"
            : "block"
        }`}
        onClick={() => setDataLength(myDonations.length)}
      >
        See All
      </button>
    </>
  );
};

export default YourDonations;
