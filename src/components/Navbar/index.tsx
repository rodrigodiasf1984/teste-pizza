import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  Nav,
  Main,
  ButtonMenu,
  ContentNavbarLeft,
  ButtonAvatar,
} from '@/styles/components/navbar';

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <>
      <Nav>
        <Main>
          <ContentNavbarLeft>
            <ButtonMenu type="button" key="Menu" onClick={handleClick}>
              <Image
                width="65px"
                height="65px"
                src="/assets/logo.svg"
                alt="Menu left"
              />
              <Image
                width="202px"
                height="73px"
                src="/assets/pizza_maker.svg"
                alt="Pizza Marker logo"
              />
            </ButtonMenu>
          </ContentNavbarLeft>
          <ButtonAvatar type="button" key="Avatar">
            <Image
              width="45px"
              height="45px"
              src="/assets/avatar.svg"
              alt="avatar"
            />
          </ButtonAvatar>
        </Main>
      </Nav>
    </>
  );
};

export default Navbar;
