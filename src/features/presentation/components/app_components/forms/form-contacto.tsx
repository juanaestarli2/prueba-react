import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1.5rem;
`;

const Input = styled.input`
    padding: 16px;
    margin-bottom: 20px;
    border: 1px solid #ccc;   
    border-radius: 6px;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    color: #7a7a7a;

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
    color: #7a7a7a;
    resize:none;
    height: 180px;

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

const FormContacto = () => {

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

return(

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

);

};
export default FormContacto;
