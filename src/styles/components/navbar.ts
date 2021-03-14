import tw from 'tailwind-styled-components';

export const Nav = tw.nav`
  flex flex-1 flex-row items-center
  justify-between bg-white
`;

export const Main = tw.main`
  flex flex-row w-full
  items-baseline
  justify-between shadow-md
`;

export const ButtonMenu = tw.button`
  h-24 inline-flex justify-center
  items-center p-4 rounded text-gray-d
  focus:outline-none bg-green-primary
`;

export const ContentNavbarLeft = tw.div`
  flex flex-row items-center
  justify-center
`;

export const ContainerLogo = tw.div`
  ml-10 md:pl-32 inline-block py-2
`;

export const ButtonAvatar = tw.button`
  inline-flex p-4 rounded text-gray-d
  ml-10 focus:outline-none
`;
