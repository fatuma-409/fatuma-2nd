import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Home />
      <Footer />
    </div>
  );
};

export default App;