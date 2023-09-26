import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import DonationCards from "./components/DonationCards";
import DonationCardDetails from "./components/DonationCardDetails";
import YourDonations from "./components/YourDonations";
import Statistics from "./components/Statistics";

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
        path: "/:donationId",
        element: <DonationCardDetails />,
        loader: () => fetch("data.json"),
      },
      {
        path: "/donation",
        element: <YourDonations />,
        loader: () => fetch("data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
