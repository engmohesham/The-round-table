import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> الطاولة المستديرة </h1>
        <p> بيتزا تناسب أي مذاق</p>
        <Link to="/menu">
          <button>اطلب الان</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
