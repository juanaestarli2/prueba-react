import FormContacto from '../../components/app_components/forms/form-contacto';
import Banner from '../../components/ui_components/banner/banner';
import EncabezadoForm from '../../components/ui_components/encabezado/encabezado-form';
import { ContactContainer, InnerContainer } from './contacto.styles';

const Contact = () => {

    return (
      <ContactContainer>
        <Banner title={"CONTACTO"} extra=""/>
        <InnerContainer>
            <EncabezadoForm/>
            <FormContacto/>
        </InnerContainer>
      </ContactContainer>
    );
  };
  
  export default Contact;