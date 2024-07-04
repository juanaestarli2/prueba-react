import { JrContainer } from './JR-squad.styles';
import Banner from '../../../components/ui_components/banner/banner';
const JRsquadScreen = () => {
    return (
        <JrContainer>
            <Banner title={"JR Squad"} extra={<>Nuestro lema es <strong>“no hay senior, sin junior”</strong>, es por eso que nos enfocamos en la generación de nuevos talentos.</>}></Banner>
        </JrContainer>
    );
};

export default JRsquadScreen