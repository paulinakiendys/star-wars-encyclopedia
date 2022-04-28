import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navigation";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Router>
      <Navbar />

      <main>
        Content
      </main>
    </Router>
  );
}

export default App;
