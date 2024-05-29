// import './App.css'
// import Inicio from '../Pages/Inicio'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="*" element={<Inicio />} />
//         </Routes>
//       </Router>
//     </>
//   )
// }

// export default App

import { AppRouter } from "./presentation/router/app_router.tsx";
 
function App() { 
  return (
    <>
      <AppRouter />
    </>
  )
}
 
export default App
