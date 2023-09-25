const DonationCardDetails = () => {
  return (
    <div>
      <div className="relative rounded-lg overflow-hidden">
        <img
          className="w-full"
          src="https://i.ibb.co/T4zsLzh/water-4.jpg"
          alt=""
        />
        <div className="absolute bottom-0 p-9 bg-black/50 inset-x-0">
          <button className="bg-brand-red text-white font-semibold text-xl px-6 py-4 rounded">
            Donate $290
          </button>
        </div>
      </div>
      <h2 className="text-brand-dark font-bold text-4xl mt-14 mb-6">
        Good Education
      </h2>
      <p className="text-justify">
        There are many things that can be done to ensure that all people have
        access to a good education. Governments can invest in public schools,
        provide financial assistance to students, and make sure that all schools
        have qualified teachers and resources. Families can support their
        children education by creating a learning environment at home and
        helping them with their schoolwork. Teachers can create a positive and
        supportive learning environment for their students and challenge them to
        reach their full potential.
      </p>
    </div>
  );
};

export default DonationCardDetails;
