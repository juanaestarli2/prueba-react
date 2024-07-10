import { ManagedContainer, Container, Image, ContainerBox, ContainerSec, ContainerBoxSec } from './managed.style';
import Banner from '../../../components/ui_components/banner/banner';
import Card from '../../../components/ui_components/card/card';
import CardContacto from '../../../components/ui_components/cardContacto/cardContacto';
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
                <ContainerSec>
                    <ContainerBoxSec>
                        <Card text={<>Gestionar las operaciones tecnológicas con <strong>ASAP Consulting aumenta su capacidad para concentrarse en las prioridades de la organización</strong> y acelera el Go-to-market.</>}
                        imageSrc='https://asap-consulting.net/wp-content/uploads/2023/06/mssd33.png'></Card>
                    </ContainerBoxSec>
                    <ContainerBoxSec>
                        <Card text={<>Managed Services <strong>permite que la empresa subcontrate una porción o la totalidad de las tareas, la gestión o funciones de IT </strong>de la compañía.</>}
                        imageSrc='https://asap-consulting.net/wp-content/uploads/2023/06/ms33.png'></Card>
                    </ContainerBoxSec>
                    <ContainerBoxSec>
                        <Card text={<>ASAP Consulting tendrá la <strong>responsabilidad y la gestión de los servicios</strong>, mientras que el cliente proporcionará los requisitos y especificaciones.</>}
                        imageSrc='https://asap-consulting.net/wp-content/uploads/2023/06/ms3w3.png'></Card>
                    </ContainerBoxSec>
                </ContainerSec>
                <ContainerSec>
                    <ContainerBoxSec>
                        <Card text={<>Proveemos <strong>servicios IT para llevar adelante diferentes funciones y tareas especializadas.</strong> Gestionando y adaptándonos a los requisitos y especificaciones por parte del cliente. </>}
                        imageSrc='https://asap-consulting.net/wp-content/uploads/2023/06/ms3DSD3.png'></Card>
                    </ContainerBoxSec>
                    <ContainerBoxSec>
                        <Card text={<>Aportamos <strong>recursos humanos </strong> que llevarán a cabo el proyecto y administramos un equipo de IT de tiempo completo.</>}
                        imageSrc='https://asap-consulting.net/wp-content/uploads/2023/06/mDASDs33.png'></Card>
                    </ContainerBoxSec>
                    <ContainerBoxSec>
                        <Card text={<>Somos un talentoso grupo de especialistas que ahorramos al cliente la tarea de <strong>manejar, contratar y retener profesionales </strong> internos. </>}
                        imageSrc='https://asap-consulting.net/wp-content/uploads/2023/06/ASDms33.png'></Card>
                    </ContainerBoxSec>
                </ContainerSec>
                <ContainerSec>
                    <ContainerBoxSec>
                        <Card text={<><strong>CTO AS A SERVICE</strong><br />Te ofrecemos un <strong>Director de Tecnología</strong> para tu organización.​ Incluyendo dentro de nuestras tareas el <strong>asesoramiento al departamento de IT</strong>, o bien, configuramos un <strong>outsourcing total del área.</strong> </>}
                        imageSrc='https://asap-consulting.net/wp-content/uploads/2023/06/mscsdfdf33.png'></Card>
                    </ContainerBoxSec>
                    <ContainerBoxSec>
                        <Card text={<><strong>SPECIALIZED SQUADS</strong><br />Proveemos <strong>equipos especializados</strong> en diferentes áreas de expertise. Los mismos son coordinados por ASAP pero <strong>puestos al servicio de los requisitos y especificaciones del cliente.</strong></>}
                        imageSrc='https://asap-consulting.net/wp-content/uploads/2023/06/msdsds33.png'></Card>
                    </ContainerBoxSec>
                    <ContainerBoxSec>
                        <Card text={<><strong>JR SQUADS <br />Conformamos equipos de nuevos talentos acompañados por expertos </strong> funcionales y tecnológicos para asegurar su onboarding exitoso y acelerar su curva de aprendizaje.</>}
                        imageSrc='https://asap-consulting.net/wp-content/uploads/2023/06/ms33dssd.png'></Card>
                    </ContainerBoxSec>
                </ContainerSec>
            <CardContacto></CardContacto>
        </ManagedContainer>
    );
};

export default ManagedServicesScreen