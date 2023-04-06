import './styles/style.css'
import "./App.css";
import AdoptionHeader from "./components/AdoptionHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import PetSmartHeader from "./components/PetSmartHeader";
import MyNavbar from "./components/Navbar";
import MembersTreats from "./components/MembersTreats";
import { Container } from "react-bootstrap";
import Banner from "./components/Banner";
import Footer from './components/Footer';
import ShopByPet from './components/ShopByPet';
function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <header>
          <AdoptionHeader />
          <PetSmartHeader />
          <MyNavbar />
          <MembersTreats />
        </header>
        <Container style={{height:'fit-content'}}>
          <Banner/>
          <ShopByPet/>
        </Container>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
