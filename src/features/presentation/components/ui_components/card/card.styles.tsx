import styled from 'styled-components';
import { TitleProps } from './card';

export const CardContainer = styled.div<TitleProps>`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 22px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .11);
    padding: 5px 20px;
    height: ${({ height }) => height || '100%'};
    justify-content: ${({ justifyContent }) => justifyContent};
    /* height: ${(TitleProps) => TitleProps.height || 'auto'}; */
`;

export const Text = styled.p`
    font-family: "Open Sans", roboto;
    /* font-size: 18px; */
    color: #565b62;
    line-height: 1.5;
    text-align: center;
    margin: 0;
`;

export const Image = styled.img`
    width: 95px;
    height: auto;
`;