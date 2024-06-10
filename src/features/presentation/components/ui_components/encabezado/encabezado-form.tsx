import styled from 'styled-components';

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
    letter-spacing: 0.3px;
    font-style: italic;

`
const HorarioSpan=styled.span`
    text-align: left;
    color: #7a7a7a;
    font-size: 21px;
    letter-spacing: 0.3px;
`

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