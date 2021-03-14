import React from 'react';
import Button from '@/components/Button';
import Link from 'next/link';

import {
  Main,
  BG,
  ContainerTop,
  Title,
  ContainerBottom,
  ContainerBottomParagraph,
  ContentContainerBottom,
} from '@/styles/pages/home';
import SEO from '@/components/SEO';

const Home: React.FC = () => {
  const description =
    'Criar pizza personalizadas, você poderá escolher o tipo de massa, o tamanho e o recheio.';
  const link = 'https://pizza-marker.com.br';
  return (
    <>
      <SEO title="Pizza Maker" description={description} link={link} />
      <Main>
        <BG style={{ backgroundPosition: '95% center' }}>
          <ContainerTop>
            <Title className="mt-32">Custom Pizza order</Title>
          </ContainerTop>
          <ContainerBottom>
            <ContentContainerBottom>
              <Title>Convenient & Simple</Title>
              <ContainerBottomParagraph>
                Choose the pizza dough, size and filling
              </ContainerBottomParagraph>
            </ContentContainerBottom>
          </ContainerBottom>
        </BG>
      </Main>
      <div className="flex w-full items-end">
        <Link href="/dough" passHref>
          <Button />
        </Link>
      </div>
    </>
  );
};
export default Home;
