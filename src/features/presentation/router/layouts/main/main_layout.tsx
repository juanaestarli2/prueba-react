import { Route, Routes } from "react-router-dom"
import Footer from "../../layouts_components/footer"
import Header from "../../layouts_components/header"
import MainContent from "../../layouts_components/main-content"
import HomeScreen from "../../../screens/home/home"
import { MainViewModel } from "./main_view_model"

export const MainLayout = () => {

    const {
        // hoverLink,
        // handleHoverEnter,
        // expanded,
        // setExpanded,
        routes,
    } = MainViewModel();

    return (
        <div>
        <Header></Header>
        <div>
        <MainContent>
        <Routes>
        <Route path="/" element={<HomeScreen />} />
            {routes.map(route => (
              route.subRoutes && route.subRoutes.length > 0 ?
                route.subRoutes.map((subRoute:any) => (
                  <Route
                    key={subRoute.id}
                    path={subRoute.path}
                    element={subRoute.component ? <subRoute.component /> : <div>{subRoute.path + ' NO IMPLEMENTADO'}</div>}
                  />
                ))
                :
                <Route
                  key={route.id}
                  path={route.path}
                  element={route.component ? <route.component /> : <div>{route.path + ' NO IMPLEMENTADO'}</div>}
                />
            ))}
        </Routes>
        </MainContent>
        </div>
        <Footer></Footer>
        </div>
    )
}