import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 35px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
    max-width: 1000px;
`;

export const Text = styled.p`
    font-family: "Open Sans", roboto;
    font-size: 18px;
    color: #565b62;
    line-height: 1.5;
    text-align: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 45px;
    padding-right: 45px;
`