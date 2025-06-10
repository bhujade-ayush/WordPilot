import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import "../styles/Home.css"
import hero from "../assets/images/hero.png"

const Home = () => {
  return (
    <>
      <HomeLayout>
        <div className="hero">
            <div className="left">
                <h1>Minimal Workspace, Maximum Control</h1>
                <p>Clean interface. Smooth workflow. Everything you need, nothing you don't.</p>
            </div>
            <div className="right">
                <img src={hero} alt="" />
            </div>
        </div>
      </HomeLayout>
    </>
  );
};

export default Home;
