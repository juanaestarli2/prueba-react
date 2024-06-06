import styled from 'styled-components';

const ContactContainer = styled.div`
  width: 100vw;
  padding-top: 13vh;
`;

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

const Title = styled.p`
font-size: 48px;
color: #198eca;
font-family: "Open Sans", roboto;
font-weight: 700;
position:relative;//opacity background-image
`

const InnerContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 5rem;
padding: 10px;
margin-left: 16%;
margin-right: 16%;
`

const LogoContainer = styled.div`
img {
    width: 14rem;
}
`
const TelContainer = styled.a`
    color: #198eca;
    font-size: 48px;
    font-weight: 700;
`
const DatosSpan=styled.span`
    text-align: left;
    color: #7a7a7a;
    font-size: 21px;
    line-height: 0.3em;
    letter-spacing: 0.3px;
    font-style: italic;

`
const HorarioSpan=styled.span`
    text-align: left;
    color: #7a7a7a;
    font-size: 21px;
    line-height: 2em;
    letter-spacing: 0.3px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 3rem;
`;

const Input = styled.input`
    padding: 16px;
    margin-bottom: 20px;
    border: 1px solid #ccc;   
    border-radius: 6px;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
`;

const TextArea = styled.textarea`
    padding: 16px;
    margin-bottom: 20px;
    border: 1px solid #ccc;   
    border-radius: 6px;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 0;
  color: white;
  background-color: #198eca;
  font-size: 16px;
  cursor: pointer;
  width: 16%;
`;

const Contact = () => {
    return (
      <ContactContainer>
        <UpperContainer>
            <Title>CONTACTO</Title>
        </UpperContainer>
        <InnerContainer>
            <LogoContainer>
                <img src="src/assets/logoAsap.png" alt="asap logo" />
            </LogoContainer>
            <TelContainer href="https://api.whatsapp.com/send?phone=5491135792713" target="_blank" rel="noopener noreferrer">
                + 54 11 4313 2558
            </TelContainer>
            <DatosSpan>
                Av. Del Libertador 7208 Torre II, Piso 2, Oficina 2.6 HIT Cel, Nuñez
            </DatosSpan>
            <HorarioSpan>
                Lunes a Viernes de 9 a 18hs
            </HorarioSpan>
            <Form>
                <Input type="text" placeholder="Nombre" />
                <Input type="text" placeholder="Apellido" />
                <Input type="email" placeholder="Email" />
                <Input type="text" placeholder="Asunto" />
                <TextArea placeholder="Mensaje" />
                <Button type="submit">Enviar</Button>
            </Form>
        </InnerContainer>
      </ContactContainer>
    );
  };
  
  export default Contact;