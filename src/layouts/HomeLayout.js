import React from "react";
import Navbar from "../components/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar title="WordPilot" />
      <main>{children}</main>
    </>
  );
};

export default HomeLayout;
