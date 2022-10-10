import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import HomeCarousel from "./HomeCarousel";
import HomeCard from "./HomeCard";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <HomeCarousel />
            <HomeCard />
            <Footer/>
        </>
    );
};

export default Home;