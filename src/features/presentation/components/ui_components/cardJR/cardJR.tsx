import { CardContainer, BoxContainer, Text, Image, Image2, ImageContainer, TextContainer, PlusIconContainer, Test } from "./cardJR.styles";
import { PiPlusLight } from "react-icons/pi";

const CardJR = () => {
    return (
        <CardContainer>
        <ImageContainer>
            <Test>
            <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/JRS1.png" />
            </Test>
            <PlusIconContainer>
                    <PiPlusLight size={42} color="rgb(25 142 202)"/>
                </PlusIconContainer>
            <Test>
            <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/JRS2.png" />
            </Test>
            <PlusIconContainer>
                    <PiPlusLight size={42} color="rgb(25 142 202)"/>
                </PlusIconContainer>
                <Test>

            <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/JRS3.png"/>
            </Test>
            <PlusIconContainer>
                    <PiPlusLight size={42} color="rgb(25 142 202)"/>
                </PlusIconContainer>
                <Test>
            <Image2 src="https://asap-consulting.net/wp-content/uploads/2023/06/check-mark.png"/>
            </Test>
        </ImageContainer>
        <BoxContainer >
            <TextContainer>
                <Text>Mínimo dos colaboradores Junior</Text>
                <PlusIconContainer>
                    <PiPlusLight size={42} color="#fff"/>
                </PlusIconContainer>
            </TextContainer>
            <TextContainer>
                <Text>Un service manager</Text>
                <PlusIconContainer>
                    <PiPlusLight size={42} color="#fff"/>
                </PlusIconContainer>
            </TextContainer>
            <TextContainer>
                <Text>Un experto</Text>
                <PlusIconContainer>
                    <PiPlusLight size={42} color="#fff"/>
                </PlusIconContainer>
            </TextContainer>
            <TextContainer>
            <Text>Capacitaciones</Text>
            </TextContainer>
        </BoxContainer >
    </CardContainer>
            
    );
};

export default CardJR;