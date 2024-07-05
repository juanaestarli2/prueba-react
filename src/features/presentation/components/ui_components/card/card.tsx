import {CardContainer, Text, Container} from './card.styles';

interface TitleProps {
    text: React.ReactNode;
}

const Card: React.FC<TitleProps> = ({text}) => {
  
  return (
    <Container>
        <CardContainer>
            <Text>{text}</Text>
        </CardContainer>
    </Container>
  );
};

export default Card;