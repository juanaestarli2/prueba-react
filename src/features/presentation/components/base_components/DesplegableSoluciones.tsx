import { Link } from 'react-router-dom'
import {DesplegableBox, ContainerBox, Title, List, ListItem, Imagen, ContentBox, HeaderBox} from './DesplegableSoluciones.styles'

const DesplegableSoluciones = () => {
    return (
        <DesplegableBox>
            <ContainerBox>
                <HeaderBox>
                    <Imagen src="https://asap-consulting.net/wp-content/uploads/2021/07/capitalhumano.png"></Imagen>
                    <Title>Human Capital Solution</Title>
                </HeaderBox>
                <ContentBox>
                    <List>
                        <Link to="/soluciones-y-servicios/managed-services">
                            <ListItem>Managed Services</ListItem>
                        </Link>
                        <Link to="/soluciones-y-servicios/JR-squad">
                            <ListItem>JR Squad</ListItem>
                        </Link>
                        <ListItem>Specialized Squad</ListItem>
                        <ListItem>CTO as Services</ListItem>
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
    )

}

export default DesplegableSoluciones