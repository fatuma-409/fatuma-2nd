import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import HomeList from '../homelist/homelist';
import Request from '../../Request/Request';

console.log("tesitinggg", Request)


const Home = () => {
  return (
    <>
      
      <HomeList title="movie" fetchurl={Request.RequestMovies} />
      <HomeList title="tv" fetchurl={Request.Requesttv} />
      <HomeList title="now playing" fetchurl={Request.Requestnowplaying} />
      <HomeList title="populor" fetchurl={Request.Requestpopulor} />
      <HomeList title="top related" fetchurl={Request.Requesttoperelated} />
      <HomeList title="upcaming" fetchurl={Request.Requestupcaming} />
     
    </>
  );
};

export default Home;