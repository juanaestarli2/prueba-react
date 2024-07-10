import { useState } from 'react'
import { Link } from 'react-router-dom'
import {DesplegableBox, ContainerBox, Title, List, ListItem, Imagen, ContentBox, HeaderBox} from './DesplegableSoluciones.styles'

const DesplegableSoluciones = () => {

    const [isVisible, setIsVisible] = useState(true);

    const closeDropdown = () => {
        setIsVisible(false);
    };

    return (
        <>
        {isVisible && (
            <DesplegableBox>
            <ContainerBox>
                <HeaderBox>
                    <Imagen src="https://asap-consulting.net/wp-content/uploads/2021/07/capitalhumano.png"></Imagen>
                    <Title>Human Capital Solution</Title>
                </HeaderBox>
                <ContentBox>
                    <List>
                        <Link to="/managed-services">
                            <ListItem onClick={closeDropdown}>Managed Services</ListItem>
                        </Link>
                        <Link to="/JR-squad">
                            <ListItem onClick={closeDropdown}>JR Squad</ListItem>
                        </Link>
                        <ListItem onClick={closeDropdown}>Specialized Squad</ListItem>
                        <ListItem onClick={closeDropdown}>CTO as Services</ListItem>
                    </List>
                </ContentBox>
            </ContainerBox>
            <ContainerBox>
                <HeaderBox>
                    <Imagen src="https://asap-consulting.net/wp-content/uploads/2021/07/dedsarrollo.png"></Imagen>
                    <Title>Sofware Development Solution</Title>
                </HeaderBox>
                <ContentBox>
                    <List>
                        <ListItem>AD HOC developments</ListItem>
                        <ListItem>SAAS Wisoft SUIT</ListItem>
                        <ListItem>Contract Managment</ListItem>
                        <ListItem>Mobile</ListItem>
                    </List>
                </ContentBox>
            </ContainerBox>
        </DesplegableBox>
        )}
        </>
    );

};

export default DesplegableSoluciones