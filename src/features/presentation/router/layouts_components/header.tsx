import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  /* todo: ver theme */
  background-color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  position: fixed;
  width: 100%;
  z-index: 100;
  height: 13vh;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {}
  @media (max-width: 480px) {}
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`

const LogoContainer = styled.div`
  display: flex;
`

const HeaderContainerImg = styled.img`
  width: 100px;
`

const LanguageContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const LanguageItem = styled.div`
`

const HeaderItem = styled.span`
  color: #7A7A7A;
  cursor: pointer;
  transition: color 0.3s;
   
  &:hover {
    color: #020101;
  }
`
const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <LogoContainer>
          <Link to="/">
              <HeaderContainerImg src="src/assets/logoAsap.png" alt="asap logo"/>
          </Link>
        </LogoContainer>
        <Link to="/nosotros">
          <HeaderItem>Nosotros</HeaderItem>
        </Link>
        <HeaderItem>Soluciones y servicios</HeaderItem>
        <HeaderItem>Blog</HeaderItem>
        <Link to="https://www.linkedin.com/company/asap-consulting-s.a./" target="_blank">
          <HeaderItem>Se parte de ASAP</HeaderItem>
        </Link>
        <Link to="/contacto">
          <HeaderItem>Contacto</HeaderItem>
        </Link>

        <LanguageContainer>
            <LanguageItem>
              <img src="src/assets/bandera_argentina.svg" alt="bandera argentina" />
            </LanguageItem>
            <LanguageItem>
              <img src="src/assets/bandera_GB.svg" alt="bandera gb" />
            </LanguageItem>
        </LanguageContainer>
      </Container>
    </HeaderContainer>
  )
}

export default Header