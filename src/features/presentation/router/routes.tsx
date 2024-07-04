import Contacto from "../screens/contacto/contacto";
import Nosotros from "../screens/nosotros/nosotros";
import JRsquadScreen from "../screens/soluciones-servicios/JR-squad/JR-squad";
import ManagedServices from "../screens/soluciones-servicios/managed-services/managed-services";

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
       {
        "id": "managed-services",
        "name": "managed-services",
        "path": "soluciones-y-servicios/managed-services",
        "component": () => <ManagedServices/>,
        "subRoutes": []
       },
       {
        "id": "JR-squad",
        "name": "JR-squad",
        "path": "soluciones-y-servicios/JR-squad",
        "component": () => <JRsquadScreen/>,
        "subRoutes": []
       }
    ]
}
