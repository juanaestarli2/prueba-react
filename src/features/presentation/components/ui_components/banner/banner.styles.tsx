import styled from 'styled-components';

export const UpperContainer = styled.div`
  height: 13.875rem;
  background-image: url('/src/assets/ImgContacto.png');
  background-repeat: no-repeat;
  background-size: 180%;
  background-position-y: 28%;
  background-position-x: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative; //opacity background-image

  &:before{ //opacity background-image
    position: absolute;
    content: "";
    inset: 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const Title = styled.p`
margin: 0;
font-size: 48px;
color: #198eca;
font-family: "Open Sans", roboto;
font-weight: 700;
position: relative;
`;

export const Extra = styled.p`
text-align: center;
margin: 0;
font-size: 20px;
color: #565b62;
font-family: "Open Sans", roboto;
font-weight: 400;
position: relative;
width: 50%;
line-height: 1.2em;
`
export const BoldText = styled.span`
font-weight: 700;
`