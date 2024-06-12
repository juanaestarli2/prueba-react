import { LogoContainer, TelContainer, DatosSpan, HorarioSpan } from "./encabezado-form.styles";

const EncabezadoForm = () => {
    return (
        <div>
            <LogoContainer>
                <img src="src/assets/logoAsap.png" alt="asap logo" />
            </LogoContainer>
            <TelContainer href="https://api.whatsapp.com/send?phone=5491135792713" target="_blank" rel="noopener noreferrer">
                + 54 11 4313 2558
            </TelContainer>
            <br />
            <DatosSpan>
                Av. Del Libertador 7208 Torre II, Piso 2, Oficina 2.6 HIT Cel, Nuñez
            </DatosSpan>
            <br />
            <HorarioSpan>
                Lunes a Viernes de 9 a 18hs
            </HorarioSpan>
        </div>
    );
};

export default EncabezadoForm;