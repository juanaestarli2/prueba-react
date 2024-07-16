import styled from 'styled-components';

export const ManagedContainer = styled.div`
    width: 100vw; //TODO:Ponerlo en el banner y se soliciona en las pantallas 
    padding-top: 13vh; //TODO: sacar de aca
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding-top: 80px;
    padding-bottom: 80px;
`;

export const ContainerSec = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px; 
`;

export const ContainerBox = styled.div`
    display: flex;
    /* justify-content: center;
    width: 100%; 
    max-width: 1500px; */
    width: 70rem;
    align-items: center;
`;

export const ContainerBoxSec = styled.div`
    display: flex;
    max-width: 20rem;
`;

export const Image = styled.img`
    width: 130px;
    height: auto;
    margin: 0 2rem;
`;

export const ContainerSecundario = styled.div`
   display: flex;
   justify-content: center;
`
