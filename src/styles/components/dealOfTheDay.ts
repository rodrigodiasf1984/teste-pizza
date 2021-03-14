import tw from 'tailwind-styled-components';

export const AsideContainer = tw.aside`
  h-screen bg-red-custom w-5/12
  flex flex-row p-5 justify-center
  text-white font-roboto
`;

export const AsideContent = tw.div`
  flex flex-col w-full text-center
  justify-around border border-white
  mr-2 rounded-2xl
`;

export const Title = tw.div`
  text-2xl
`;

export const Subtitle = tw.div`
  text-xl
`;
