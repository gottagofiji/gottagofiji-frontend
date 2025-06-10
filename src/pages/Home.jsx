import React from "react";
import HomepageAds from "../components/HomepageAds";
import FeaturedListings from "../components/FeaturedListings";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

const Home = () => {
  return (
    <div className="mt-4">
      <HomepageAds />
      <SearchForm />
      <FeaturedListings />
      <SearchResults />
    </div>
  );
};

export default Home;