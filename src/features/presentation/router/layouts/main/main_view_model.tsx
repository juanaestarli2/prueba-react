//Este hook proporciona un modelo de vista principal que gestiona el estado y las funciones relacionadas con la navegación y la interfaz de usuario de la aplicación

import { useState } from "react";
import { routesData } from "../../routes";

//Se define el hook MainViewModel como una función 
export const MainViewModel = () => {
  //Se utiliza el estado local para almacenar el enlace sobre el que se encuentra el cursor.  
  const [hoverLink, setHoverLink] = useState<string | null>(null);
  //Se utiliza el estado local para almacenar el estado de expansión de algún elemento (probablemente un menú desplegable).
  const [expanded, setExpanded] = useState(false);

  //Se define una función handleHoverEnter para manejar el evento de entrada del ratón en un enlace.
  const handleHoverEnter = (link: string) => {
    setHoverLink(link);
  }

  //Se devuelve un objeto que contiene los estados locales y funciones necesarios para el componente que usa este hook.
  return {
    hoverLink,
    handleHoverEnter,
    expanded,
    setExpanded,
    routes: routesData.routes // Se devuelve la lista de rutas
  };
};