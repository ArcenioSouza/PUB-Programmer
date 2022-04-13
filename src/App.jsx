import { BrowserRouter } from "react-router-dom";
import NavbarAdm from "./components/navbarAdm/NavbarAdm";
import Footer from "./components/footer/FooterAdm";
import RoutesApp from "./routes/Routes";

function App() {
   return (
      <BrowserRouter>
         <NavbarAdm />
         <RoutesApp />
         <Footer />
      </BrowserRouter>
   );
}

export default App;
