import tw from 'tailwind-styled-components';

export const Main = tw.main`
  flex  flex-1 mt-32 justify-center items-center
  text-center w-full h-screen px-10
`;

export const BG = tw.div`
  mb-44 w-full
  max-w-screen-xl h-full max-h-680px
  flex flex-col justify-between
  items-start relative bg-pizza
  bg-contain bg-no-repeat bg-custom
`;

export const ContainerTop = tw.section`
  flex justify-center lg:justify-start
  text-center items-center
  h-40  lg:h-10 w-full
`;

export const Title = tw.span`
  text-2xl md:text-6xl font-bold
  font-Roboto  text-red-custom
`;

export const ContainerBottom = tw.section`
  flex justify-center
  text-center items-center
  lg:justify-start w-full
`;

export const ContentContainerBottom = tw.div`
  flex flex-col
`;

export const ContainerBottomParagraph = tw.p`
  flex mt-2 mb-2 md:mt-10 text-xl  md:text-3xl
  font-Roboto text-red-custom
`;
