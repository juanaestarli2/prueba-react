import React from 'react';
import { CardContainer, LogoContainer, ContentContainer, Title, Tagline, Description } from './info_card_styles';

interface InfoCardProps {
  logoSrc: string;
  title: string;
  tagline?: string;
  description: string;
  button: string | undefined
}

const InfoCard: React.FC<InfoCardProps> = ({
  logoSrc,
  title,
  tagline,
  description,
  button,
}) => {
  return (
    <CardContainer>
      <LogoContainer>
        <img src={logoSrc} alt="Logo" />
      </LogoContainer>
      <ContentContainer>
        <Title>{title}</Title>
        {tagline && <Tagline href="#">{tagline}</Tagline>}
        <Description>{description}</Description>
        <button>{button}</button>
      </ContentContainer>
    </CardContainer>
  );
};

export default InfoCard;