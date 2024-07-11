import { JrContainer, TextContainer, Text, BannerContainer, FirstContainer, Image, Text2, ContainerBox } from './JR-squad.styles';
import Banner from '../../../components/ui_components/banner/banner';
import CardContacto from '../../../components/ui_components/cardContacto/cardContacto';
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
                <FirstContainer>
                    <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/pibito.png"></Image>
                    <Text2>Estos equipos son parte del día 1 del proyecto, y, desde ASAP, los acompañamos con un <strong> colaborador senior</strong> dedicado a su supervisión, y un <strong>Service Manager</strong> que coordina la comunicación del equipo puertas adentro y con el equipo del cliente para garantizar su fluidez.<strong> El objetivo es garantizar su performance y calidad de sus entregables.</strong></Text2>
                </FirstContainer>
                <CardContacto></CardContacto>
            </ContainerBox>
        </JrContainer>
    );
};

export default JRsquadScreen