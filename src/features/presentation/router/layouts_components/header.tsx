import './header.css';
import styled from 'styled-components';

const IconContainer = styled.div`
    width: 20px;
    height: auto;
    display: flex;
    gap: 10px;
    object-fit: cover;
`;

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    display: flex;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000; /* Asegura que el header esté por encima de otros elementos */
    gap: 70px;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
`

const HeaderContainerImg = styled.img`
   width: 100px;
   height: auto;
   object-fit: cover;
`
const HeaderContainerH1 = styled.h1`
   font-size: 13.5px;
   font-family: 'Open Sans', sans-serif;
   font-weight: 500;
   margin: 0;
   color: #7A7A7A;
   cursor: pointer;
   transition: color 0.3s;
   
   &:hover {
      color: #020101;
  }
`

const Header = () => {
    return (
        <header>
            <HeaderContainer>
                <HeaderContainerImg src="src/assets/logoAsap.png" alt="asap logo" />
                <HeaderContainerH1>Nosotros</HeaderContainerH1>
                <HeaderContainerH1>Soluciones y servicios</HeaderContainerH1>
                <HeaderContainerH1>Blog</HeaderContainerH1>
                <HeaderContainerH1>Se parte de ASAP</HeaderContainerH1>
                <HeaderContainerH1>Contacto</HeaderContainerH1>

                <IconContainer>
                    <img src="src/assets/bandera_argentina.svg" alt="bandera argentina" />
                    <img src="src/assets/bandera_GB.svg" alt="bandera gb" />
                </IconContainer>
            </HeaderContainer>
        </header>
    )
}

export default Header