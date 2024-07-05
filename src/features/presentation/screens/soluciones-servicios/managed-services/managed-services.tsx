import { ManagedContainer, Container, Image, ContainerBox } from './managed.style';
import Banner from '../../../components/ui_components/banner/banner';
import Card from '../../../components/ui_components/card/card';
const ManagedServicesScreen = () => {
    return (
        <ManagedContainer>
            
            <Banner title={"MANAGED SERVICES"} extra={<>ASAP Managed Services ofrece soluciones tecnológicas estratégicas escalables que agregan gran valor, a través de la experiencia de nuestros profesionales.</>}></Banner>
            <Container>
                <ContainerBox>
                    <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/ms1.png" alt="Image 1" />
                    <Card text={<>Las empresas de hoy requieren el mejor uso de <strong>las nuevas tecnologías que optimizan su negocio y permite adecuarse rápidamente a mercados</strong> en constante cambio.​ </>}></Card>
                </ContainerBox>
                <ContainerBox>
                    <Card text={<>Nuestro equipo de <strong>profesionales altamente calificados y capacitados</strong>, combinado con el uso de los últimos avances en tecnología y procesos, nos permite brindar resultados más efectivos y eficientes.</>}></Card>
                    <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/m2s.png" alt="Image 2" />
                </ContainerBox>
            </Container>
            
        </ManagedContainer>
    );
};

export default ManagedServicesScreen