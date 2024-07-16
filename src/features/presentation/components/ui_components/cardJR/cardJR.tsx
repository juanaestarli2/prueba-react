import { CardContainer, BoxContainer, Text, Image, Image2, ImageContainer, TextContainer, PlusIconContainer } from "./cardJR.styles";
import { PiPlusLight } from "react-icons/pi";

const CardJR = () => {
    return (
        // <CardContainer>
        //     <BoxContainer>
        //         <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/JRS1.png" />
        //         <Text>Mínimo dos colaboradores Junior</Text>
        //     </BoxContainer>
        //     <PlusIconContainer>
        //         <PiPlusLight size={42} color="#fff"/>
        //     </PlusIconContainer>
        //     <BoxContainer>
        //         <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/JRS2.png" />
        //         <Text>Un service manager</Text>
        //     </BoxContainer>
        //     <PlusIconContainer>
        //         <PiPlusLight size={42} color="#fff"/>
        //     </PlusIconContainer>
        //     <BoxContainer>
        //         <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/JRS3.png"/>
        //         <Text>Un experto</Text>
        //     </BoxContainer>
        //     <PlusIconContainer>
        //         <PiPlusLight size={42} color="#fff"/>
        //     </PlusIconContainer>
        //     <BoxContainer>
        //         <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/check-mark.png"/>
        //         <Text>Capacitaciones</Text>
        //     </BoxContainer>
        // </CardContainer>

        <CardContainer>
        <ImageContainer>
            <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/JRS1.png" />
            <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/JRS2.png" />
            <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/JRS3.png"/>
            <Image2 src="https://asap-consulting.net/wp-content/uploads/2023/06/check-mark.png"/>
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