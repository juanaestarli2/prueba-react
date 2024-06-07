import { useState } from 'react';
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

    &:hover{
      transition: 0.4s;
      border: 1px solid black;
    }

    &:focus{
      border: 1px solid #198eca;
      outline: none;
    }

    &::placeholder {
      color: black;
      font-size: 15px;
      font-family: 'Open Sans', sans-serif;
    }
`;

const TextArea = styled.textarea`
    padding: 16px;
    margin-bottom: 20px;
    border: 1px solid #ccc;   
    border-radius: 6px;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;

    &:hover{
      transition: 0.3s;
      border: 1px solid black;
    }

    &:focus{
      border: 1px solid #198eca;
      outline: none;
    }

    &::placeholder {
      color: black;
      font-size: 15px;
      font-family: 'Open Sans', sans-serif;
    }

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

const TextButton = styled.span`
  color: #999999; 
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  margin-top: 1.5rem;
`;

const TextError = styled.span`
  color: #dc3232;;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 1.8rem;
`;

const Contact = () => {

    const[nombre, setName] = useState("");
    const[apellido, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[asunto, setAsunto] = useState("");
    const[mensaje, setMensaje] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleClick = (event:any) => {
      event.preventDefault();
      setSubmitted(true);

      const nameValid = nombre.trim();
        const lastNameValid = apellido.trim();
        const emailValid = email.trim() && email.includes(".") && email.includes("@");
        const asuntoValid = asunto.trim();
        const mensajeValid = mensaje.trim();

        if (nameValid && lastNameValid && emailValid && asuntoValid && mensajeValid) {
            console.log("Form submitted");
            setHasError(false);
            setSubmitted(false); // Resetea
        } else {
            setHasError(true);
        }
  };




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
                <Input type="text" placeholder="Nombre*" required onChange={(event) => setName(event.target.value)} />
                {(submitted && !nombre.trim()) ? <TextError>The field is required.</TextError> : null}

                <Input type="text" placeholder="Apellido*" required onChange={(event) => setLastName(event.target.value)} />
                {(submitted && !apellido.trim()) ? <TextError>The field is required.</TextError> : null}

                <Input type="email" placeholder="Email*" required onChange={(event) => setEmail(event.target.value)}/>
                {(submitted && !email.trim()) ? <TextError>The field is required.</TextError> : null}
                {(submitted && email.trim() && (!email.includes(".") || !email.includes("@"))) ? <TextError>The e-mail address entered is invalid.</TextError> : null}

                <Input type="text" placeholder="Asunto*" required onChange={(event) => setAsunto(event.target.value)}/>
                {(submitted && !asunto.trim()) ? <TextError>The field is required.</TextError> : null}

                <TextArea placeholder="Mensaje*" required onChange={(event) => setMensaje(event.target.value)}/>
                {(submitted && !mensaje.trim()) ? <TextError>The field is required.</TextError> : null}

                <Button type="submit" onClick={handleClick}>Enviar</Button>
                <TextButton>*campos obligatorios</TextButton>
                { hasError ? <TextError>Uno o más campos tienen un error. Por favor revisa e intenta de nuevo.</TextError> : null }
            </Form>
        </InnerContainer>
      </ContactContainer>
    );
  };
  
  export default Contact;