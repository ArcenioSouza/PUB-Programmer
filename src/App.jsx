import { BrowserRouter } from "react-router-dom";
import NavbarAdm from "./components/navbarAdm/NavbarAdm";
import Footer from "./components/footerAdm/Footer";
import RoutesApp from "./routes/Routes";
import { Routes, Route } from "react-router";
import NavbarCliente from "./components/navbarCliente/NavbarCliente";
import FooterCliente from "./components/footerCliente/Footer";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/*"
               element={
                  <>
                     <NavbarCliente />
                     <RoutesApp />
                     <FooterCliente />
                  </>
               }
            />
            <Route
               path="/adm/*"
               element={
                  <>
                     <NavbarAdm />
                     <RoutesApp />
                     <Footer />
                  </>
               }
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
