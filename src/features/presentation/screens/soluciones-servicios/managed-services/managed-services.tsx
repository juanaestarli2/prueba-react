import { ManagedContainer, Container, Image, ContainerBox, ContainerSec, ContainerBoxSec, ContainerSecundario } from './managed.style';
import Banner from '../../../components/ui_components/banner/banner';
import Card from '../../../components/ui_components/card/card';
import CardContacto from '../../../components/ui_components/cardContacto/cardContacto';
import ManagedServicesCardData from '../../../../../assets/data/managed-services/ManagedServicesCardData';
import { ReactElement, Key } from 'react';

const ManagedServicesScreen = () => {
    return (
        <ManagedContainer>
                <Banner title={"MANAGED SERVICES"} extra={<>ASAP Managed Services ofrece soluciones tecnológicas estratégicas escalables que agregan gran valor, a través de la experiencia de nuestros profesionales.</>}></Banner>
                <Container>
                    <ContainerBox>
                        <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/ms1.png" alt="Image 1" />
                        <Card text={<>Las empresas de hoy requieren el mejor uso de <strong>las nuevas tecnologías que optimizan su negocio y permite adecuarse rápidamente a mercados</strong> en constante cambio.</>} height="5rem" justifyContent= 'center'></Card>
                    </ContainerBox>
                    <ContainerBox>
                        <Card text={<>Nuestro equipo de <strong>profesionales altamente calificados y capacitados</strong>, combinado con el uso de los últimos avances en tecnología y procesos, nos permite brindar resultados más efectivos y eficientes.</>} height="5rem"  justifyContent= 'center'></Card>
                        <Image src="https://asap-consulting.net/wp-content/uploads/2023/06/m2s.png" alt="Image 2"/>
                    </ContainerBox>
                </Container>
                <ContainerSecundario>
                    <ContainerSec>
                        {ManagedServicesCardData.map((card: { text: ReactElement<string>; imageSrc: string }, index: Key) => (
                        <ContainerBoxSec key={index}>
                            <Card text={card.text} imageSrc={card.imageSrc}/>
                        </ContainerBoxSec>
                        ))}
                    </ContainerSec>
                </ContainerSecundario>
            <CardContacto></CardContacto>
        </ManagedContainer>
    );
};

export default ManagedServicesScreen

