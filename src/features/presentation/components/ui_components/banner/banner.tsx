import styled from 'styled-components';

const UpperContainer = styled.div`
  height: 13.875rem;
  background-image: url('/src/assets/ImgContacto.png');
  background-repeat: no-repeat;
  background-size: 180%;
  background-position-y: 28%;
  background-position-x: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; //opacity background-image

  &:before{ //opacity background-image
    position: absolute;
    content: "";
    inset: 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
const Banner = () => {
  
  return (
    <UpperContainer/>
  );
};

export default Banner;