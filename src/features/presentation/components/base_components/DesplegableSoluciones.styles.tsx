import styled from 'styled-components';

export const Imagen = styled.img`
    height: auto;
    max-width: 100%;
`;

export const DesplegableBox = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 110px;
    left: 15%;
    right: 0;
    width: 70%;
    height: 50vh;
    background-color: white;
    z-index: 1;
`;

export const HeaderBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const ContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;

`;

export const ContentBox = styled.div`
    margin-left: 20px;
    width: 100%;
`;

export const Title = styled.h1`
    color: #7a7a7a;
    font-family: "Open Sans", roboto;
    font-size: 30px;
    font-weight: 600;
    line-height: 35px;
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: right;

`;

export const ListItem = styled.li`
    font-family: "Open Sans", roboto;
    font-weight: 500;
    color: #7a7a7a;
    font-size: 18px;
`;