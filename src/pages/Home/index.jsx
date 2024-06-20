// src/components/TopCreators.js
import React from 'react';
import'./style.scss'
import CreatorCard from '../CreatorCard/CreatorCard';
import profileImg from "../../assets/Image Placeholder (2).png" 

const Home = () => {
  return (
    <div className="App">
  <CreatorCard
    profileImg={profileImg}
    name="Jaydon Ekstrom Bothman"
    percentageChange={1.41}
    sales={602}
    earnings={12.4}
  />
</div>
  );
};

export default Home;

