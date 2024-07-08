import {CardContainer, Text, Image} from './card.styles';

interface TitleProps {
    text: React.ReactNode;
    imageSrc?: string;
}

const Card: React.FC<TitleProps> = ({text, imageSrc}) => {
  
  return (
    <CardContainer>
        {imageSrc && <Image src={imageSrc} alt="Card Image" />}
        <Text>{text}</Text>
    </CardContainer>
  );
};

export default Card;