import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DesplegableSoluciones from '../../components/base_components/DesplegableSoluciones';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

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
const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  list-style: none;
`

const LogoContainer = styled.div`
  display: flex;
`

const HeaderContainerImg = styled.img`
  width: 120px;
`

const LanguageContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const LanguageItem = styled.div`
`

const HeaderItem = styled.li`
  color: #7A7A7A;
  cursor: pointer;
  transition: color 0.3s;
   
  &:hover {
    color: #020101;
  }
`

const Header = () => {

  const [open, setOpen] = useState(false);
  const timerRef = useRef<number | null>(null);


  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

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
        <Link to="">
          <HeaderItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
          Soluciones y servicios
            <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '0.5rem', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}/></HeaderItem>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {open && <DesplegableSoluciones />}
          </div>
        </Link>
        <Link to="https://asap-consulting.net/blog/" target="_blank">
        <HeaderItem>Blog</HeaderItem>
        </Link>
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