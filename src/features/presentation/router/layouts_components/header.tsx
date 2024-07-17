import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DesplegableSoluciones from '../../components/base_components/DesplegableSoluciones';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import BurguerButton from '../../components/ui_components/burguerButton/BurguerButton';

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

  const handleItemSelect = (item: boolean) => {
    setOpen(item);
  }

  //Prueba responsive navbar
const Navbar = styled.nav` //NavContainer
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }

  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position:absolute;
    top: -700px;
    left: -200px;
    margin-left: auto; //para que se centren cuando bajen
    margin-right: auto; //para que se centren cuando bajen
    text-align: center;
    a{
      color: black;
      font-size: 2rem;
      display: block; // para que esten uno arriba del otro
    }
    @media(min-width: 768px) { 
      position: initial;
      margin: 0;
      a{
        font-size:1rem;
        color: white;
        display: inline;
      }
    }
  }
  .links.active{ //para cuando tenga la clase active
    width:100%;
    display: block;
    position:absolute;
    margin-left:auto;
    margin-right: auto;
    top: 30%;
    left:0;
    right: 0;
    text-align: center;
    a{
      color: #333;
    }
  }
  .burguer {
    @media(min-width: 768px){
      display: none;
    }
  }
` 

//

  return (
    // <HeaderContainer>
    //   <Container>
    //     <LogoContainer>
    //       <Link to="/">
    //           <HeaderContainerImg src="src/assets/logoAsap.png" alt="asap logo"/>
    //       </Link>
    //     </LogoContainer>
    //     <Link to="/nosotros">
    //       <HeaderItem>Nosotros</HeaderItem>
    //     </Link>
    //     <div>
    //       <HeaderItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
    //       Soluciones y servicios
    //         <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: '0.5rem', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}/></HeaderItem>
    //       <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    //         {open && <DesplegableSoluciones onItemSelect={handleItemSelect}/>}
    //       </div>
    //     </div>
    //     <Link to="https://asap-consulting.net/blog/" target="_blank">
    //     <HeaderItem>Blog</HeaderItem>
    //     </Link>
    //     <Link to="https://www.linkedin.com/company/asap-consulting-s.a./" target="_blank">
    //       <HeaderItem>Se parte de ASAP</HeaderItem>
    //     </Link>
    //     <Link to="/contacto">
    //       <HeaderItem>Contacto</HeaderItem>
    //     </Link>

    //     <LanguageContainer>
    //         <LanguageItem>
    //           <img src="src/assets/bandera_argentina.svg" alt="bandera argentina" />
    //         </LanguageItem>
    //         <LanguageItem>
    //           <img src="src/assets/bandera_GB.svg" alt="bandera gb" />
    //         </LanguageItem>
    //     </LanguageContainer>
    //   </Container>
    // </HeaderContainer>
    
    //Prueba responsive navbar
    <Navbar>
      <h2>Navbar<span>Responsive</span></h2>
      <div className='links active'>
        <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Blog</a>
      </div>
      <div className='burguer'>
      <BurguerButton/>
      </div>
    </Navbar>
    //
  )
}

export default Header