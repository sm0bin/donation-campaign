import Header from "./Header";
import Banner from "./Banner";
import "../assets/Clothing.png";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-36">
      <div className="">
        {/* <div className="bg-[url('./assets/Clothing.png')] bg-no-repeat bg-cover bg-opacity-5"> */}
        <Header />

        <div className="mt-20 mb-32">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
