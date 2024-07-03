import styled from 'styled-components';


export const CardContainer = styled.div`
  background-color: white;
  /* color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
  margin-right: 20px;
  height: 20rem; */
  margin: 0 5px;
`;

export const LogoContainer = styled.div`
  /* margin: 50px; */
  img {
    max-width: 100%;
    height: auto;
  }
`;
export const ContentContainer = styled.div`
  /* padding: 10px 50px; */
  /* TODO: theme */
  /* flex: 1; */
  
`;
export const Title = styled.h2`
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 24px; // Tamaño más grande para el título
  font-weight: bold; // Negrita para el título
`;
export const Tagline = styled.a`
  color: #00A5B5; // Color azul para el enlace
  text-decoration: none; // Sin subrayado
`;
export const Description = styled.p`
  font-size: 14px; // Tamaño moderado para la descripción
`;
// export const ContactInfo = styled.div`
//   font-size: 14px; // Tamaño más pequeño para la información de contacto
//   margin-top: 10px; // Espacio antes de la información de contacto
// `;