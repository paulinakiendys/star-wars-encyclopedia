import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navigation";
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column justify-content-between vh-100">
        <Navbar />
        <main>
          <Container>
            Content
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
