// @ts-nocheck
import React from "react";
import { Link } from "react-router";
import logo from "../public/assets/icons/logo.svg";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import Navitems from "./Navitems";

const MobileSidebar = () => {
  let sidebar: SidebarComponent;
  const toggleSidebar = () => {
    sidebar.toggle();
  };
  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img src={logo} alt="logo" className="size-[30px]" />
          <h1>TourVisto</h1>
        </Link>

        <button
          onClick={toggleSidebar}
        >
          <img
            src="../public/assets/icons/menu.svg"
            alt="Menu"
            className="size-7"
          />
        </button>
      </header>
      <SidebarComponent
        width={270}
        ref={(Sidebar) => (sidebar = Sidebar)}
        created={() => {
          sidebar.hide();
        }}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="over"
      >
        <Navitems handleClick={toggleSidebar}/>
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
