import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import { Main } from "./components/Main";
import HomePage from "./page/HomePage";
import Details from "./page/Details";
import NotFound from "./page/NotFound";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <HomePage countries={countries} setCountries={setCountries} />
          </Route>
          <Route path="/country/:name" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </>
  );
}

export default App;
