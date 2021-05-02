import HomePage from "../HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/project" component={HomePage} />
          <Route exact path="/skill" component={HomePage} />
          <Route exact component={() => "page not found"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
