import styled from 'styled-components';

const InnerContainer = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
`

const LogoContainer = styled.div`
img {
    width: 150px;
    margin-bottom: 20px;
}
`

const FooterInner = styled.div`
    display: flex;
    margin-top: 50px;
`

const DatosContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const EmpresaContainer = styled.ul`
    list-style-type: none;
    padding-left: 60px;
    margin: 0;
`

const SolucionesContainer = styled.ul`
    list-style-type: none;
    padding-left: 60px;
    margin: 0;       
`

const ExtraContainer = styled.ul`
    list-style-type: none;
    padding-left: 60px;
    margin: 0;
`

const DatosSpan = styled.span`
    font-style: italic;
    font-family: Calibri;
    color: #7A7A7A;
    font-size: 20px;
    margin-bottom: 15px;
`

const Item = styled.li`
    display: flex;
    color: #7A7A7A;
    font-size: 20px;
    font-family: Calibri;
    line-height: 35px;
`

const ItemH1 = styled.li`
    font-size: 22px;
    font-family: Calibri;
    color: #565b62;
    font-weight: 600;
    line-height: 45px;
    margin-top: 8px;
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
    margin-top: 45px;
`
const HR = styled.hr`
    background-color: #68bc9352;
    border: none;
    height: 2px;
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
                    </DatosContainer>
                    <EmpresaContainer>
                        <ItemH1>Empresa</ItemH1>
                        <Item>Nosotros</Item>
                        <Item>Nuestro Blog</Item>
                        <Item>Capacitacion</Item>
                        <Item>Clientes</Item>
                        <Item>Casos de exito</Item>
                        <Item>Politica de privacidad</Item>
                    </EmpresaContainer>
                    <SolucionesContainer>
                        <ItemH1>Soluciones de capital humano</ItemH1>
                        <Item>Managed Services</Item>
                        <ItemH1>Desarrollo de software</ItemH1>
                        <Item>AD HOC Developments</Item>
                        <Item>Saas Wisoft</Item>
                    </SolucionesContainer>
                    <ExtraContainer>
                        <ItemH1>Capacitacion</ItemH1>
                        <ItemH1>Beneficios</ItemH1>
                        <ItemH1>Busquedas Laborales</ItemH1>
                    </ExtraContainer>
                </FooterInner>
            </InnerContainer>
        </FooterContainer>
    )
}

export default Footer

