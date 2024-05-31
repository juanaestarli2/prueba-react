import styled from 'styled-components';

const InnerContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 40px 0;
`

const LogoContainer = styled.div`

img {
    width: 150px;
    margin-bottom: 20px;
}
`

const FooterInner = styled.div`
display: flex;
/* flex-wrap: wrap;
justify-content: center;
justify-content: space-around;  */
/* max-width: 1200px;*/
/* margin: 0 auto;
padding: 0 20px; */
`

const DatosContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`

const EmpresaContainer = styled.ul`
 list-style-type: none;
 padding-left: 0;
margin: 10px;
`

const SolucionesContainer = styled.ul`
padding-left: 0;
 list-style-type: none;       
margin: 10px;
`

const ExtraContainer = styled.ul`
padding-left: 0;
 list-style-type: none;
margin: 10px;
`

const Item = styled.li`
display: flex;
color: #7A7A7A;
font-size: 14px;
font-family: 'Open Sans', sans-serif;
line-height: 30px;
`

const ItemH1 = styled.li`
font-size: 15px;
font-family: 'Open Sans', sans-serif;
color: #565b62;
font-weight: bold;
line-height:40px;
margin-top:15px;
`

const FooterContainer = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
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
                        <span>Av. Del Libertador 7208 Torre II, Piso 2, Oficina 2.6</span>
                        <span>HIT Cel, Nuñez</span>
                        <span>ASAP CONSULTING © 2022</span>
                    </DatosContainer>
                    <EmpresaContainer>
                        <ItemH1>Empresa</ItemH1>
                        <Item>Nuestro Blog</Item>
                        <Item>Nosotros</Item>
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

