import React from 'react';

import { Container } from './GameStudios.styles';

const GameStudios: React.FC = () => {
  const imageNames: string[] = [
    "i-candy-interactive.png",
    "lemon-sky-studios.png",
    "jericverse.png",
    "gameconomy.png",
  ];

  return (
    <Container>
      {imageNames.map((imageName, index) => (
        <img key={`game-studio-${index}`} src={`/assets/images/${imageName}`} />
      ))}
    </Container>
  );
};

export default GameStudios;
