import Header from "./Header";
// import "../assets/Clothing.png";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-36">
      <Header />
      <div className="mb-32">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
