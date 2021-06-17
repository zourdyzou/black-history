import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Showcase from "./components/Showcase";
import Documentation from "./pages/Documentation";
import Purposes from "./pages/Purposes";
import People from "./components/People";

const App = () => {
  return (
    <Router>
      <Header />

      <Route exact path="/">
        <People />
      </Route>
      <Route path="/web-app">
        <Showcase />
      </Route>
      <Route path="/documentation">
        <Documentation />
      </Route>
      <Route path="/purpose">
        <Purposes />
      </Route>
    </Router>
  );
};

export default App;
