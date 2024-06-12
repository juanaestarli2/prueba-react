import {UpperContainer, Title} from './banner.styles';

interface TitleProps {
    title: string;
}

const Banner: React.FC<TitleProps> = ({title}) => {
  
  return (
    <UpperContainer>
        <Title>{title}</Title>
    </UpperContainer>
  );
};

export default Banner;