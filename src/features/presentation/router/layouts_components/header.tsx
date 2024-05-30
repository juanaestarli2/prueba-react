import './header.css';
import styled from 'styled-components';

const IconItem = styled.li`
    list-style-type: none;
    width: 20px;
    height: auto;
    display: flex;
    gap: 10px;
    object-fit: cover;
`;

const HeaderContainer = styled.ul`
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
const HeaderItem = styled.li`
    list-style-type: none;
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
                <HeaderItem>
                    <HeaderContainerImg src="src/assets/logoAsap.png" alt="asap logo"/>
                </HeaderItem>
                <HeaderItem>Nosotros</HeaderItem>
                <HeaderItem>Soluciones y servicios</HeaderItem>
                <HeaderItem>Blog</HeaderItem>
                <HeaderItem>Se parte de ASAP</HeaderItem>
                <HeaderItem>Contacto</HeaderItem>

                <IconItem>
                    <img src="src/assets/bandera_argentina.svg" alt="bandera argentina" />
                    <img src="src/assets/bandera_GB.svg" alt="bandera gb" />
                </IconItem>
            </HeaderContainer>
        </header>
    )
}

export default Header