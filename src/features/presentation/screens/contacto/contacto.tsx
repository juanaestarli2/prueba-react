import styled from 'styled-components';
import FormContacto from '../../components/app_components/forms/form-contacto';
import Banner from '../../components/ui_components/banner/banner';
import EncabezadoForm from '../../components/ui_components/encabezado/encabezado-form';

const ContactContainer = styled.div`
  width: 100vw;
  padding-top: 13vh;
`;

// const Title = styled.p`
// font-size: 48px;
// color: #198eca;
// font-family: "Open Sans", roboto;
// font-weight: 700;
// position:fixed;
// `

const InnerContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 5rem;
padding: 10px;
margin-left: 16%;
margin-right: 16%;
`

const Contact = () => {

    return (
      <ContactContainer>
        <Banner/>
            {/* <Title>CONTACTO</Title> */}
        <InnerContainer>
            <EncabezadoForm/>
            <FormContacto/>
        </InnerContainer>
      </ContactContainer>
    );
  };
  
  export default Contact;