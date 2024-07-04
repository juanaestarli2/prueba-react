import {UpperContainer, Title, Extra} from './banner.styles';

interface TitleProps {
    title: string;
    extra: React.ReactNode;
}

const Banner: React.FC<TitleProps> = ({title , extra}) => {
  
  return (
    <UpperContainer>
        <Title>{title}</Title>
        <Extra>
         {extra}
        </Extra>
    </UpperContainer>
  );
};

export default Banner;