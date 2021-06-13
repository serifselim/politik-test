import ContextProvider from './context/ContextProvider';
import { Home, Result, Test } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <ContextProvider>

      <Router>


        <Switch>

          <Route path="/result">
            <Result />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>

    </ContextProvider>
  );
}

export default App;
