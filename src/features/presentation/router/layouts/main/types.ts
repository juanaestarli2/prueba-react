//No se esta usando todavia
export interface RoutesData {
    id: string;
    name: string;
    path: string;
    component?: () => JSX.Element;
    subRoutes?: {
        id: string;
        name: string;
        path: string;
        component?: () => JSX.Element;
      }[];
  }
  