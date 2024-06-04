import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const InnerContainer = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
`

const LogoContainer = styled.div`
img {
    width: 9.375rem;
    margin-bottom: 1.25rem;
}
`

const FooterInner = styled.div`
    display: flex;
    margin-top: 3.125rem;
`

const DatosContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: left;
  gap: 0.625rem;
  margin-top: 0.625rem;

  a {
    color: white;
    font-size: 15px;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    }
`;

const EmpresaContainer = styled.ul`
    list-style-type: none;
    padding-left: 3.75rem;
    margin: 0;
`

const SolucionesContainer = styled.ul`
    list-style-type: none;
    padding-left: 3.75rem;
    margin: 0;       
`

const ExtraContainer = styled.ul`
    list-style-type: none;
    padding-left: 3.75rem;
    margin: 0;
`

const DatosSpan = styled.span`
    font-style: italic;
    font-family: Calibri;
    color: #7A7A7A;
    font-size: 20px;
    margin-bottom: 0.938rem;
`

const Item = styled.li`
    display: flex;
    color: #7A7A7A;
    font-size: 20px;
    font-family: Calibri;
    line-height: 2.188rem;
`

const ItemH1 = styled.li`
    font-size: 22px;
    font-family: Calibri;
    color: #565b62;
    font-weight: 600;
    line-height: 2.813rem;
    margin-top: 0.5rem;
`

const FooterContainer = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/src/assets/footerImg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 28%;
    position: absolute;
    margin-top: 2.813rem;
`
const HR = styled.hr`
    background-color: #68bc9352;
    border: none;
    height: 0.125rem;
`
const InstaIcon= styled.a`
    background-color: #E82096ED;;
`
const WppIcon = styled.a`
    background-color: #25d366;
`
const LinIcon = styled.a`
    background-color: #0077b5;

`

const Footer = () => {
    return(
        <FooterContainer>
            <InnerContainer>
                <LogoContainer>
                    <img src="src/assets/logoAsap.png" alt="asap logo" />
                    <HR/>
                </LogoContainer>
                <FooterInner>
                    <DatosContainer>
                        <DatosSpan>Av. Del Libertador 7208 Torre II, Piso 2, Oficina 2.6 
                            <br/>HIT Cel, Nuñez
                        </DatosSpan>
                        <DatosSpan>ASAP CONSULTING © 2022</DatosSpan>
                        <DatosSpan>
                            <SocialIcons>
                                <WppIcon href="https://api.whatsapp.com/send?phone=5491135792713" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </WppIcon>
                                <LinIcon href="https://www.linkedin.com/company/asap-consulting-s.a./" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </LinIcon>
                                <InstaIcon href="https://www.instagram.com/accounts/login/?next=%2Fasap.consulting%2F" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </InstaIcon>
                            </SocialIcons>
                        </DatosSpan>
                    </DatosContainer>
                    <EmpresaContainer>
                        <ItemH1>Empresa</ItemH1>
                        <Item>Nosotros</Item>
                        <Item>Nuestro Blog</Item>
                        <Item>Capacitación</Item>
                        <Item>Clientes</Item>
                        <Item>Casos de éxito</Item>
                        <Item>Política de privacidad</Item>
                    </EmpresaContainer>
                    <SolucionesContainer>
                        <ItemH1>Soluciones de capital humano</ItemH1>
                        <Item>Managed Services</Item>
                        <ItemH1>Desarrollo de software</ItemH1>
                        <Item>AD HOC Developments</Item>
                        <Item>Saas Wisoft</Item>
                    </SolucionesContainer>
                    <ExtraContainer>
                        <ItemH1>Capacitación</ItemH1>
                        <ItemH1>Beneficios</ItemH1>
                        <ItemH1>Búsquedas Laborales</ItemH1>
                    </ExtraContainer>
                </FooterInner>
            </InnerContainer>
        </FooterContainer>
    )
}

export default Footer

