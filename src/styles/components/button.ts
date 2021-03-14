import tw from 'tailwind-styled-components';

export const Button = tw.a`
  flex flex-col text-white
  absolute right-5 mb-2 font-roboto
  h-20 w-20 bg-red-custom hover:bg-red-100
  transition ease-out duration-500
  items-center justify-center rounded-full
`;
