import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import "../assets/banner-bg.jpg";

const DonationCards = () => {
  const [allDonationData, setAllDonationData] = useState([]);
  const [displayDonations, setDisplayDonations] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllDonationData(data));
  }, []);

  useEffect(() => {
    if (allDonationData.length > 0) {
      setDisplayDonations(allDonationData);
    }
  }, [allDonationData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value.toLowerCase();
    e.target.search.value = "";
    console.log(searchText);
    const categoryDonations = allDonationData.filter(
      (donation) => donation.category === searchText
    );

    if (categoryDonations.length === 0) {
      setDisplayDonations(allDonationData);
    } else {
      setDisplayDonations(categoryDonations);
    }
  };

  return (
    <>
      <section className="text-center mb-24 bg-[url('./assets/banner-bg.jpg')] bg-no-repeat bg-cover bg-bottom">
        <div className="pt-28 pb-52 bg-white/90">
          <h1 className="font-bold text-4xl mt-32 mb-10 text-brand-dark">
            I Grow By Helping People In Need
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              className="ring-1 ring-inset focus:ring-2 focus:ring-brand-red outline-none ring-gray-300 p-4 rounded-l-lg w-2/3 lg:w-1/3"
              type="text"
              name="search"
              placeholder="Search here...."
            />
            <input
              className="bg-brand-red font-bold text-white p-4 rounded-r-lg"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayDonations.map((item) => (
          <DonationCard key={item.id} item={item} />
        ))}
      </section>
    </>
  );
};

export default DonationCards;
