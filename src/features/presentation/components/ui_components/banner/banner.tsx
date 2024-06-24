import {UpperContainer, Title, Extra, BoldText} from './banner.styles';

interface TitleProps {
    title: string;
    extra: string
}

const Banner: React.FC<TitleProps> = ({title , extra}) => {
  const parts = extra.split('ASAP Consulting');
  const asap = 'ASAP Consulting';
  
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