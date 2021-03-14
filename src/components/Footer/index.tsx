import Link from 'next/link';
import React from 'react';
import {
  Main,
  Logo,
  Picture,
  Social,
  SocialSpan,
  SocialLinks,
  SocialImg,
  ContactInfo,
  ContactInfoTitle,
  ContactInfoSpan,
  DevelopedBy,
  AvatarImg,
} from '@/styles/components/footer';

const Footer: React.FC = () => (
  <Main>
    <Picture>
      <Logo
        width="276px"
        height="176px"
        src="/assets/logo.svg"
        alt="Logo Pizza maker"
      />
    </Picture>
    <Social>
      <SocialSpan>Me siga nas redes sociais:</SocialSpan>
      <SocialLinks>
        <Link
          href="https://www.linkedin.com/in/rodrigodiasdefigueiredo/"
          passHref
        >
          <a href="!#" target="_blank" rel="noopener noreferrer">
            <SocialImg
              width="58px"
              height="58px"
              alt="Logo LinkedIn"
              srcSet="/assets/logo_rounded_linkedin.svg"
            />
          </a>
        </Link>
        <Link href="https://github.com/rodrigodiasf1984" passHref>
          <a href="!#" target="_blank" rel="noopener noreferrer">
            <SocialImg
              width="58px"
              height="58px"
              src="/assets/logo_rounded_github.svg"
              alt="Logo Github"
            />
          </a>
        </Link>
      </SocialLinks>
    </Social>
    <ContactInfo>
      <ContactInfoTitle>Contato</ContactInfoTitle>
      <a
        className="pt-2"
        href="mailto:rodrigodiasf@gmail.com"
        rel="noopener noreferrer"
      >
        <ContactInfoSpan>rodrigodiasf@gmail.com</ContactInfoSpan>
      </a>
      <a
        className="pt-2"
        target="_blank"
        rel="noopener noreferrer"
        href="https://discord.com/"
      >
        <ContactInfoSpan>Discord: rodrigodiasf#6368</ContactInfoSpan>
      </a>
    </ContactInfo>
    <DevelopedBy>
      <ContactInfoTitle>Desenvolvido por:</ContactInfoTitle>
      <Link href="https://github.com/rodrigodiasf1984" passHref>
        <a href="!#" className="w-52" target="_blank" rel="noopener noreferrer">
          <AvatarImg
            width="58px"
            height="58px"
            src="/assets/perfilgithub.jpg"
            alt="Logo Perfil GitHub"
          />
        </a>
      </Link>
      <ContactInfoSpan>Rodrigo Dias de Figueiredo</ContactInfoSpan>
    </DevelopedBy>
  </Main>
);

export default Footer;
