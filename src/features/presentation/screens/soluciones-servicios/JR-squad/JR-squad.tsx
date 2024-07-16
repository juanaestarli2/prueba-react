import { JrContainer, TextContainer, Text, BannerContainer, Image, Text2, ContainerBox, Text3, CardContainer, InnerContainer } from './JR-squad.styles';
import Banner from '../../../components/ui_components/banner/banner';
import CardContacto from '../../../components/ui_components/cardContacto/cardContacto';
import CardJR from '../../../components/ui_components/cardJR/cardJR';
const JRsquadScreen = () => {
    return (
        <JrContainer>
            <BannerContainer>
                <Banner title={"JR Squad"} extra={<>Nuestro lema es <strong>“no hay senior, sin junior”</strong>, es por eso que nos enfocamos en la generación de nuevos talentos.</>}></Banner>
            </BannerContainer>
            <ContainerBox>
                <TextContainer>
                    <Text>
                    Los Juniors Squads ofrecen la posibilidad a las empresas de incorporar nuevos talentos sin tener que afrontar su curva de aprendizaje. Se trata de equipos con <strong>perfiles juniors, especializados en la tecnología que requiera el cliente.</strong>
                    </Text>
                </TextContainer>
                <InnerContainer>
                    <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/pibito.png"></Image>
                    <Text2>Estos equipos son parte del día 1 del proyecto, y, desde ASAP, los acompañamos con un <strong> colaborador senior</strong> dedicado a su supervisión, y un <strong>Service Manager</strong> que coordina la comunicación del equipo puertas adentro y con el equipo del cliente para garantizar su fluidez.<strong> El objetivo es garantizar su performance y calidad de sus entregables.</strong></Text2>
                </InnerContainer>
                <InnerContainer>
                    <Text3>Como agregado de valor, ASAP diseña, en conjunto con el cliente, un plan de capacitación técnica que fortalece los conocimientos para el desarrollo profesional del colaborador. Este proceso dura 6 meses y, al finalizar, garantiza la recategorización de los recursos.</Text3>
                    <CardContainer>
                        <CardJR></CardJR>
                    </CardContainer>
                </InnerContainer>
                <CardContacto></CardContacto>
            </ContainerBox>
        </JrContainer>
    );
};

export default JRsquadScreen