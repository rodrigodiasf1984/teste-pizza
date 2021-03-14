import tw from 'tailwind-styled-components';

export const Main = tw.main`
  pb-4 bg-red-custom
  text-center flex flex-col
  lg:flex-row lg:justify-around
  lg:items-center
  w-full
`;

export const Picture = tw.picture`
  row-span-1 lg:px-4 pt-10 lg:p-0
`;

export const Logo = tw.img`
  w-2/4 md:w-1/4 m-auto
  lg:pt-5 lg:w-44
`;

export const Social = tw.section`
  mt-8 lg:m-0
`;

export const SocialSpan = tw.span`
  text-white text-lg lg:text-xl
  font-roboto
`;

export const SocialLinks = tw.div`
  flex flex-row justify-center
  items-center mt-8
`;

export const SocialImg = tw.img`
  mr-4 w-11 h-11
`;

export const ContactInfo = tw.section`
  flex flex-col mt-16
  lg:m-0 lg:items-start
`;

export const ContactInfoTitle = tw.h2`
  text-white text-xl lg:text-2xl
  font-roboto
`;

export const ContactInfoSpan = tw.span`
  text-white text-lg lg:text-xl
  pt-2 lg:mt-0
`;

export const DevelopedBy = tw.section`
  flex flex-col items-center
  text-center justify-center
  mt-8 mb-16 lg:items-center
  lg:mx-0 lg:mb-4 lg:mt-8
`;

export const AvatarImg = tw.img`
  m-auto w-5/12 h-5/12 lg:w-3/12 lg:h-3/12
  mt-4 lg:mt-0 cursor-pointer rounded-full
`;
