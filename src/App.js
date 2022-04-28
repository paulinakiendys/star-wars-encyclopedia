import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Film from "./pages/films/Film";
import Films from "./pages/films/Films";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import People from "./pages/people/People";
import Person from "./pages/people/Person";
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
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/films' element={<Films />} />
              <Route path='/films/:id' element={<Film />} />
              <Route path='/people' element={<People />} />
              <Route path='/people/:id' element={<Person />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
