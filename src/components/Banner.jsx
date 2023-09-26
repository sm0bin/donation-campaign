const Banner = () => {
  return (
    <section className="text-center mb-24">
      <h1 className="font-bold text-4xl mt-32 mb-10 text-brand-dark">
        I Grow By Helping People In Need
      </h1>
      <form>
        <input
          className="ring-1 ring-inset focus:ring-2 focus:ring-brand-red outline-none ring-gray-300 p-4 rounded-l-lg w-1/5"
          type="text"
          placeholder="Search here...."
        />
        <input
          className="bg-brand-red font-bold text-white p-4 rounded-r-lg"
          type="submit"
          value="Search"
        />
      </form>
    </section>
  );
};

export default Banner;
