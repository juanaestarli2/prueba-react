import styled from "styled-components";
// import Carousel from "../../components/ui_components/carousel/carousel";
// import InfoCard from "../../components/ui_components/info_card/info_card";
// import imgCapitalHumano  from "../../../../assets/img/carousel-home/prueba-carrusel-capital_humano.png";
// import imgDesarrolloSoftware  from "../../../../assets/img/carousel-home/prueba-carrusel-desarrollo.png";
// import imgSeParte  from "../../../../assets/img/carousel-home/prueba-carrusel-se_parte.png";
import CarouselClientes from "../../components/ui_components/carousel_clientes/carousel";
import InfoCardClientes from "../../components/ui_components/info_card_clientes/info_card";
import logo1 from "../../../../assets/img/carousel-clientes/1.png"
import logo2 from "../../../../assets/img/carousel-clientes/2.png"
import logo3 from "../../../../assets/img/carousel-clientes/3.png"
import logo4 from "../../../../assets/img/carousel-clientes/4.png"
import logo5 from "../../../../assets/img/carousel-clientes/5.png"
import logo6 from "../../../../assets/img/carousel-clientes/6.png"
import logo7 from "../../../../assets/img/carousel-clientes/7.png"
import logo8 from "../../../../assets/img/carousel-clientes/8.png"
import logo9 from "../../../../assets/img/carousel-clientes/9.png"

const CarouselContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

// const banners = [
//     {
//         logoSrc: imgDesarrolloSoftware,
//         title: "Desarrollo de software",
//         description:
//             "Desarrollos escalables y eficientes para aumentar la productividad de las empresas",
//         boton: 'Contacto'
//     },
//     {
//         logoSrc: imgSeParte,
//         title: "Sé parte de ASAP",
//         description:
//             "Acompañamos tu cambio y crecimiento laboral en el mercado de IT con seguimiento constante",
//         boton: 'Búsquedas laborales'
//     },
//     {
//         logoSrc: imgCapitalHumano,
//         title: "Capital humano",
//         description:
//             "Incorporación de recursos de IT de forma simple y exitosa, asegurando su capacitación continua",
//         button: 'Consultas'
//     },
// ]

const logosClientes = [
    {
        logoSrc: logo1
    },
    {
        logoSrc: logo2
    },
    {
        logoSrc: logo3
    },
    {
        logoSrc: logo4
    },
    {
        logoSrc: logo5
    },
    {
        logoSrc: logo6
    },
    {
        logoSrc: logo7
    },
    {
        logoSrc: logo8
    },
    {
        logoSrc: logo9
    }
]

export const HomeScreen = () => {
    return <div style={{ paddingTop:'13vh', width:'100vw' }}>
        Home
        {/* <CarouselContainer>
        <Carousel>
        {banners.map((item, index) => (
            <InfoCard
                key={index}
                logoSrc={item.logoSrc}
                title={item.title}
                description={item.description}
                button={item.button}
            />
        ))}
        </Carousel>
        </CarouselContainer> */}

        <CarouselContainer>
            <CarouselClientes>
            {logosClientes.map((item, index) => (
            <InfoCardClientes
                key={index}
                logoSrc={item.logoSrc}
            />
        ))}
            </CarouselClientes>
        </CarouselContainer>


        </div>
}

export default HomeScreen