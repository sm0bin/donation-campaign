import { useRouteError } from "react-router-dom";
import errorImg from "../assets/404 2.svg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className=" text-center my-20">
      <h1 className="font-bold text-brand-dark text-5xl text-center">Oops!</h1>
      <img className="w-1/3 mx-auto my-8" src={errorImg} alt="" />
      <p className="font-bold text-brand-dark text-3xl text-center mb-4">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
