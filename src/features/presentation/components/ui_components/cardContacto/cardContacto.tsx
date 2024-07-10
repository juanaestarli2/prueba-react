import { CardContainer, Text, Button } from "./cardContacto.styles";
import { Link } from "react-router-dom";

const CardContacto = () => {
    return (
        <CardContainer>
            <Text>Para más información</Text>
            <Link to="/contacto">
                <Button>Contactanos</Button>
            </Link>
        </CardContainer>
    );
};

export default CardContacto;