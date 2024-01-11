import { useSelector } from "react-redux";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import Places from "../../components/places/Places";
import "./home.css";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {

  const info = useSelector((state) => state);
  console.log(info)


  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle"></h1>
        <PropertyList/>
        <Places/>
        <h1 className="homeTitle"></h1>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
