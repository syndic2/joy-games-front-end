import React from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import GameStudios from './components/game-studios/GameStudios';
import Description from './components/description/Description';

import { Wrapper } from './Home.styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <GameStudios />
      <Description />
      <Footer />
    </Wrapper>
  );
};

export default Home;
