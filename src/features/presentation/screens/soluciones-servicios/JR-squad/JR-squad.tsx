import { JrContainer, TextContainer, Text, BannerContainer } from './JR-squad.styles';
import Banner from '../../../components/ui_components/banner/banner';
const JRsquadScreen = () => {
    return (
        <JrContainer>
            <BannerContainer>
                <Banner title={"JR Squad"} extra={<>Nuestro lema es <strong>“no hay senior, sin junior”</strong>, es por eso que nos enfocamos en la generación de nuevos talentos.</>}></Banner>
            </BannerContainer>
            <TextContainer>
                <Text>
                Los Juniors Squads ofrecen la posibilidad a las empresas de incorporar nuevos talentos sin tener que afrontar su curva de aprendizaje. Se trata de equipos con <strong>perfiles juniors, especializados en la tecnología que requiera el cliente.</strong>
                </Text>
            </TextContainer>
        </JrContainer>
    );
};

export default JRsquadScreen