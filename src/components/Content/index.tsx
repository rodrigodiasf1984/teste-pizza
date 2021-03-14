import React from 'react';
import Image from 'next/image';
import { Title } from '@/styles/pages/dought';
import { ContentProps } from '@/@types';
import { ContentImage, SectionContent } from '@/styles/components/content';

const ContentComponent: React.FC<ContentProps> = ({
  title,
  imageUrl,
  children,
}) => {
  return (
    <SectionContent>
      <Title>{title}</Title>
      <ContentImage>
        <Image
          width="550px"
          height="367px"
          className="rounded-xl"
          src={imageUrl}
          alt="avatar"
        />
      </ContentImage>
      {children}
    </SectionContent>
  );
};

export default ContentComponent;
