import React from 'react';
import { CardContainer, LogoContainer, ContentContainer, Tagline } from './info_card_styles';

interface InfoCardProps {
  logoSrc: string;
  tagline?: string;
}

const InfoCardClientes: React.FC<InfoCardProps> = ({
  logoSrc,
  tagline,
}) => {
  return (
    <CardContainer>
      <LogoContainer>
        <img src={logoSrc} alt="Logo" />
      </LogoContainer>
      <ContentContainer>
        {tagline && <Tagline href="#">{tagline}</Tagline>}
      </ContentContainer>
    </CardContainer>
  );
};

export default InfoCardClientes;