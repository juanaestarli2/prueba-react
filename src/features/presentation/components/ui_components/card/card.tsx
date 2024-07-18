import {CardContainer, Text, Image} from './card.styles';

export interface TitleProps {
    text?: React.ReactNode;
    imageSrc?: string;
    height?: string;
    justifyContent?: string;
}

const Card: React.FC<TitleProps> = ({text, imageSrc, height, justifyContent}) => {
  
  return (
    <CardContainer  height={height} justifyContent={justifyContent}>
        {imageSrc && <Image src={imageSrc} alt="Card Image" />}
        <Text>{text}</Text>
    </CardContainer>
  );
};

export default Card;