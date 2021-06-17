import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Documentation from "./pages/Documentation";
import Purposes from "./pages/Purposes";
import People from "./components/People";
import Footer from "./components/Footer";
import Information from "./pages/Information";
import ScrollToTop from "./components/ScrollToTp";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Switch>
        <Route exact path="/">
          <Purposes />
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
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
