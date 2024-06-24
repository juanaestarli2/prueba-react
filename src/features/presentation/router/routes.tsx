import Contacto from "../screens/contacto/contacto";
import Nosotros from "../screens/nosotros/nosotros";

export const routesData = {
    "routes": [
        {"id": "nosotros",
         "name": "Nosotros",
         "path": "nosotros",
         "component": () => <Nosotros/>,
         "subRoutes": []
        },
        {"id": "contacto",
        "name": "Contacto",
        "path": "contacto",
        "component": () => <Contacto/>,
        "subRoutes": []
       },
    ]
}
