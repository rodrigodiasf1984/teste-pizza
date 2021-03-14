import React from 'react';

import {
  AsideContainer,
  AsideContent,
  Subtitle,
  Title,
} from '@/styles/components/dealOfTheDay';

const DealOfTheDayComponent: React.FC = () => {
  return (
    <AsideContainer>
      <AsideContent>
        <Title>Pizza do dia</Title>
        <Title>Tamanho</Title>
        <Title>Recheio</Title>
      </AsideContent>
      <AsideContent>
        <Subtitle>Massa Nova-iorquina</Subtitle>
        <Subtitle>Gigante</Subtitle>
        <Subtitle>Margherita</Subtitle>
      </AsideContent>
    </AsideContainer>
  );
};

export default DealOfTheDayComponent;
