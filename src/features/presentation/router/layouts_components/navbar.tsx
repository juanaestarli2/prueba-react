//Por ahora no esta en uso

import styled from 'styled-components';
import NavbarLinks from "./navbar-links";

interface NavbarProps {
    handleHoverEnter: (id: string) => void;
    handleHoverLeave?: () => void;
    routes: any[];
    hoverLink: string | null;
    expanded: boolean;
}

//TODO: Theme
const NavbarContainer = styled.div`
 
`

const Navbar: React.FC<NavbarProps> = ({ 
    routes,
    handleHoverEnter,
    hoverLink,
    expanded
  }) => {
    return (
      <NavbarContainer>
        <NavbarLinks
          links={routes}
          handleHoverEnter={handleHoverEnter}
          hoverLink={hoverLink}
          isMain={true}
          expanded={expanded}
        />
      </NavbarContainer>
    );
  };
  
  export default Navbar;
  