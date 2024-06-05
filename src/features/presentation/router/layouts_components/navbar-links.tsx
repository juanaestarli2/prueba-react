//Por ahora no esta en uso

import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

interface NavbarLink {
    id: string;
    name: string;
    icon?: string;
    path: string;
    subRoutes?: NavbarLink[];
}

interface NavbarLinksProps {
    handleHoverEnter?: (id: string) => void;
    links: NavbarLink[];
    hoverLink?: string | null;
    isMain?: boolean;
    expanded?: boolean;
}

const NavbarLinksContainer = styled.div``


const NavbarLinks: React.FC<NavbarLinksProps> = ({
    links,
    hoverLink,
    // isMain,
    // handleHoverEnter,
    // expanded
  }) => {
    return (
      <NavbarLinksContainer>
        <div>
          {links.map((link) => {
            return <div key={link.id}>
              <div key={link.id}>
                <Link
                  to={link.subRoutes ? location : `/${link.path}`}
                  className={`link ${hoverLink === link.id ? 'hovered' : 'text-gray-400'}`}
                //   onMouseEnter={() => isMain && handleHoverEnter(link.id)}
                >
                <div>
                    {link.name}    
                </div>
                </Link>
              </div>
            </div>
          }
          )}
        </div>
      </NavbarLinksContainer>
    );
  };
  
  export default NavbarLinks;
  