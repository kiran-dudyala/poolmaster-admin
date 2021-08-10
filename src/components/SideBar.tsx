import { Nav } from "react-bootstrap";
import React from "react";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + +")",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              {/* <img
                src={require("assets/img/reactlogo.png").default}
                alt="..."
              /> */}
            </div>
          </a>
          <a className="simple-text" href="http://www.creative-tim.com">
            Creative Tim
          </a>
        </div>
        {/* <Nav>
             
            </Nav> */}
      </div>
    </div>
  );
};
