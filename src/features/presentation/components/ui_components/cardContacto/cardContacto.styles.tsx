import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 60px;
    align-items: center;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.15);
    padding: 30px;
    width: 100%;
    height: 80px;
    margin: 60px auto;
    max-width: 800px;
`;

export const Text = styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 26px;
    font-weight: 400;
    color: #7a7a7a;
`;

export const Button = styled.button`
    width: 100%;
    max-width: 250px;
    padding: 12px;
    font-size: 18px;
    background-color: #198eca;
    border-radius: 5px;
    padding: 10px 20px;
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
    color: white;
    &:focus {
        outline: none;
    }
`;