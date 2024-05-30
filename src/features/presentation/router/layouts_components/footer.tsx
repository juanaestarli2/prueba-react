import styled from 'styled-components';

const FooterContainer = styled.div`
padding: 40px 0;
`

const LogoContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;

img {
  width: 150px;
  height: auto;
}
`

const FooterInner = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
max-width: 1200px;
margin: 0 auto;
padding: 0 20px;
`

const DatosContainer = styled.ul`
margin: 15px;
`

const EmpresaContainer = styled.ul`
margin: 15px;
`

const SolucionesContainer = styled.ul`       
margin: 15px;
`

const ExtraContainer = styled.ul`
margin: 15px;
`

const Item = styled.li`
display: flex;
color: #7A7A7A;
font-size: 14px;
font-family: 'Open Sans', sans-serif;
line-height: 30px;
`

const ItemH1 = styled.li`
display: flex;
font-size: 15px;
font-family: 'Open Sans', sans-serif;
color: #565b62;
font-weight: bold;
line-height:40px;
margin-top:15px;
`

const Footer = () => {
    return(
        <footer>
            <FooterContainer>
                <LogoContainer>
                    <img src="src/assets/logoAsap.png" alt="asap logo" />
                </LogoContainer>
                <FooterInner>
                    <DatosContainer>
                        <Item>Av. Del Libertador 7208 Torre II, Piso 2, Oficina 2.6</Item>
                        <Item>HIT Cel, Nuñez</Item>
                        <Item>ASAP CONSULTING © 2022</Item>
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
            </FooterContainer>
        </footer>
    )
}

export default Footer

