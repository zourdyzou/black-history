import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Showcase from "./components/Showcase";
import Documentation from "./pages/Documentation";
import Purposes from "./pages/Purposes";
import People from "./components/People";
import Footer from "./components/Footer";
import Information from "./pages/Information";

const App = () => {
  return (
    <Router>
      <Header />

      <Route exact path="/">
        <People />
      </Route>
      <Route path="/information">
        <Information />
      </Route>
      <Route path="/documentation">
        <Documentation />
      </Route>
      <Route path="/purpose">
        <Purposes />
      </Route>

      <Footer />
    </Router>
  );
};

export default App;
