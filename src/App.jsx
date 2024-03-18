import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Technician component imports
import TechnicianLogin from "./components/technician/login/TechnicianLogin";
import TechnicianRegister from "./components/technician/register/TechnicianRegister";
import TechnicianBookings from "./components/technician/mybookings/TechnicianBookings";
import Details from "./components/technician/bookingdetails/Details";
import TechnicianProfile from "./components/technician/profile/TechnicianProfile";

//admin Component imports
import AdminRegister from "./components/admin/register/AdminRegister";
import AdminLogin from "./components/admin/login/AdminLogin";
import AdminComponent from "./components/admin/AdminComponent";
import AdminProfile from "./components/admin/profile/AdminProfile";

//user component imports
import LoginComponent from "./components/user/login/LoginComponent";
import Register from "./components/user/register/Register";
import UserProfile from "./components/user/profile/UserProfile";
import BookingsComponent from "./components/user/bookings/BookingsComponent";
import BookingDetails from "./components/user/details/BookingDetails";
import BookingComponent from "./components/user/book/BookingComponent";
import HomePage from "./pages/HomePage";
import UserLayout from "./layouts/UserLayout";

function App() {
  return (
    <Router>
      <Routes>

        {/* user routes */}
        <Route path="/user" element={<HomePage />}></Route>
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" exact element={<LoginComponent />} />
        <Route element={<UserLayout />}>
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/booking" element={<BookingComponent />} />
          <Route path="/user/mybookings" element={<BookingsComponent />} />
          <Route path="/user/mybookings/details" element={<BookingDetails />} />
        </Route>


        {/* technician routes */}
        <Route path="/technician/login" exact element={<TechnicianLogin />} />
        <Route path="/technician/register" exact element={<TechnicianRegister />} />
        <Route path="/technician/profile" exact element={<TechnicianProfile />} />
        <Route path="/technician/mybookings" exact element={<TechnicianBookings />} />
        <Route path="/technician/mybookings/details" exact element={<Details />} />

        {/* admin routes */}
        <Route path="/admin/login" exact element={<AdminLogin />} />
        <Route path="/admin/register" exact element={<AdminRegister />} />
        <Route path="/admin/profile" exact element={<AdminProfile />} />
        <Route path="/admin" exact element={<AdminComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
