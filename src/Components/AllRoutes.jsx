import React from "react";
import { Route, Routes } from "react-router-dom";
import CarsPage from "../Pages/CarsPage/CarsPage";
import SingleCarsPage from "../Pages/CarsPage/SingleCarsPage";
import Home from "../Pages/HomePage/Home";
import Payment from "../Pages/Payment/Payment";
import Loginpage from "./Loginpage";
import SignupCard from "./Signuppage";
import Hosts from "../Pages/HostPage/HostPage";
import DateTime from "../Pages/HomePage/DateAndTime";
import Picklocation from "../Pages/PickupLocation/Pickuplocation";
import Success from "../Pages/Payment/Success";
import ZMC from "../Pages/ZMC";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<CarsPage />} />
      <Route path="/cars/:id" element={<SingleCarsPage />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/signup" element={<SignupCard />} />
      <Route path="/host" element={<Hosts />} />
      <Route path="/datetime" element={<DateTime />} />
      <Route path="/pickup" element={<Picklocation />} />
      <Route path="/success" element={<Success />} />
      <Route path="/zms" element={<ZMC />} />
    </Routes>
  );
};

export default AllRoutes;
