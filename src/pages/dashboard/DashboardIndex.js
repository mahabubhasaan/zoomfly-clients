import React, { useState } from "react";

import "../../styles/css/dashboardindex.css";
import { Link, Outlet } from "react-router-dom";
const DashboardIndex = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [isContainerActive, setContainerActive] = useState(false);

  const handleMenuClick = () => {
    setSidebarActive((prevState) => !prevState);
    setContainerActive((prevState) => !prevState);
  };

  return (
    <>
      {/* <!-- Side-Nav --> */}
      <div
        className={`side-navbar  d-flex justify-content-between flex-wrap flex-column ${
          isSidebarActive ? "active-nav" : ""
        }`}
        id="sidebar"
      >
        <ul class="nav flex-column text-white w-100">
          <a href="#" class="nav-link h3 text-white my-2">
            Responsive <br />
            SideBar Nav
          </a>
          <li href="#" class="nav-link">
            <i class="bx bxs-dashboard"></i>
            <span class="mx-2">Dashboard</span>
          </li>
          <Link to="/dashboardindex/bookings">
            <li class="nav-link">
              <i class="bx bx-user-check"></i>
              <span class="mx-2">Bookings</span>
            </li>
          </Link>
          <li href="#" class="nav-link">
            <i class="bx bx-conversation"></i>
            <span class="mx-2">Contact</span>
          </li>
        </ul>

        <span href="#" class="nav-link h4 w-100 mb-5">
          <a href="">
            <i class="bx bxl-instagram-alt text-white"></i>
          </a>
          <a href="">
            <i class="bx bxl-twitter px-2 text-white"></i>
          </a>
          <a href="">
            <i class="bx bxl-facebook text-white"></i>
          </a>
        </span>
      </div>

      {/* <!-- Main Wrapper --> */}
      <div
        className={`my-container p-1 ${isContainerActive ? "active-cont" : ""}`}
      >
        {/* <!-- Top Nav --> */}
        <nav
          class="navbar top-navbar navbar-light bg-light px-5"
          onClick={handleMenuClick}
        >
          <a class="btn border-0" id="menu-btn">
            <i class="bx bx-menu"></i>
          </a>
        </nav>

        <Outlet />
      </div>
    </>
  );
};
export default DashboardIndex;
