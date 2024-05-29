import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/main/main_layout";
 
export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
};