const Banner = () => {
  return (
    <section className="text-center">
      <h1 className="font-bold text-4xl">I Grow By Helping People In Need</h1>
      <form>
        <input
          className="border border-gray-500 p-4"
          type="text"
          placeholder="Search here...."
        />
        <input
          className="bg-brand text-white p-4"
          type="submit"
          value="Search"
        />
      </form>
    </section>
  );
};

export default Banner;
