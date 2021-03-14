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

const Home: React.FC = () => {
  return (
    <>
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
