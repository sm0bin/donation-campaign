import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import DonationCards from "./components/DonationCards";
import DonationCardDetails from "./components/DonationCardDetails";
import YourDonations from "./components/YourDonations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <DonationCards />,
      },
      {
        path: "/donation",
        element: <YourDonations />,
      },
      // {
      //   path: "/donation",
      //   element: <DonationCardDetails />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
