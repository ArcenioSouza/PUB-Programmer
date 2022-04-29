import { BrowserRouter } from "react-router-dom";
import NavbarAdm from "./components/navbarAdm/NavbarAdm";
import Footer from "./components/footerAdm/Footer";
import { Routes, Route } from "react-router";
import NavbarCliente from "./components/navbarCliente/NavbarCliente";
import FooterCliente from "./components/footerCliente/Footer";
import RoutesCliente from "./routes/RoutesCliente";
import RoutesAdm from "./routes/RoutesAdm";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/*"
               element={
                  <>
                     <NavbarCliente />
                     <RoutesCliente />
                     <FooterCliente />
                  </>
               }
            />
            <Route
               path="/adm/*"
               element={
                  <>
                     <NavbarAdm />
                     <RoutesAdm />
                     <Footer />
                  </>
               }
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
