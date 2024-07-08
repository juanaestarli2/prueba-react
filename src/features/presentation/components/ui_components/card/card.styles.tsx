import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 22px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .11);
    margin: 33px 33px 0 10px;
    width: 100%;
    max-width: 1000px;
`;

export const Text = styled.p`
    font-family: "Open Sans", roboto;
    font-size: 18px;
    color: #565b62;
    line-height: 1.5;
    text-align: center;
    padding: 10px;
    margin: 0;
`;

export const Image = styled.img`
    width: 120px;
    height: auto;
`;