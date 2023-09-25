const Banner = () => {
  return (
    <section className="text-center">
      <h1 className="font-bold text-4xl mt-32 mb-10 text-brand-dark">
        I Grow By Helping People In Need
      </h1>
      <form>
        <input
          className="border border-gray-500 p-4"
          type="text"
          placeholder="Search here...."
        />
        <input
          className="bg-brand-red text-white p-4"
          type="submit"
          value="Search"
        />
      </form>
    </section>
  );
};

export default Banner;
