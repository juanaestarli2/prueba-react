import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: #198eca;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .5);
    padding: 50px 60px 50px 60px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 6rem; */ //GIU

`

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 10rem;
    align-content: center;
    align-items: flex-start; //GIU
    /* gap: 1.2rem; */ //GIU
`;

export const Text = styled.div`
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    line-height: 1em;
    text-align: left;
    height: 5rem; //GIU
    display: flex; //GIU
    align-items: center; //GIU
`;

export const TextContainer = styled.div`
    display: flex;
    /* gap: 1rem; */ //GIU
    flex-direction: column;
    align-items: left;
    /* gap: 1.2rem; */ //GIU
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 3rem; */ //GIU
    align-items: center;
`

export const Image = styled.img`
    width: 6.5rem;
    /* height: 5rem;//GIU */
`

export const Image2 = styled.img`
    width: 3.5rem;
`

export const PlusIconContainer = styled.div`
    /* padding-left: 20px; */ //GIU
    padding: 5px 0 5px 20px;
`
export const Test = styled.div`
    height: 5rem; 
    display: flex;
    align-items: center;
`