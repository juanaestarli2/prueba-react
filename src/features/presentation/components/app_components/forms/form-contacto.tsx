import { useState } from 'react';
import { Form, Input, TextArea, Button, TextError, TextButton } from './form-contacto.styles';

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
