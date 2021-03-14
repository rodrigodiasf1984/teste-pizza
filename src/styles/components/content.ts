import tw from 'tailwind-styled-components';
import ReactSelect from 'react-select';

export const SectionContent = tw.section`
  flex flex-col w-8/12 px-4 pt-10
`;

export const ContentImage = tw.div`
  flex self-center w-5/12 h-5/12 pt-5
`;

export const ContainerButton = tw.div`
  flex w-full h-full items-end
`;

export const Select = tw(ReactSelect)`
  pt-10 w-5/12 self-center
`;
