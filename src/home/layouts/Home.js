import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Categories from "../components/Categories.js";
import PopularSearches from "../components/PopularSearches" 
import TrendingArticles from "../components/TrendingArticles.js"; 
import TargetedCategories from "../components/TargetedCategories.js"  
import OurPartner from "../components/OurPartner.js";  
import AllCatergories from "../components/AllCatergories"  
import CategoriesList from "../components/CategoriesList"  
import ScrollToTop from "../components/ScrollToTop"  

import Footer from "../components/Footer"  

function Home() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Banner />
      <Categories />
      <PopularSearches />
      <TrendingArticles />
      <TargetedCategories />
      <OurPartner />
      <AllCatergories />
      <CategoriesList />
      {/* <ScrollToTop/> */}
      <Footer />
    </div>
  );
}

export default Home;
