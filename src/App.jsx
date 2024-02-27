import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import { Main } from "./components/Main";
import { Controls } from "./components/Controls";
import { List } from "./components/List";
import { ALL_COUNTRIES } from "./config";
import Card from "./components/Card";

function App() {
  const [countries, setCountries] = useState([]);

  console.log(countries);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Controls />
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
              ],
            };

            return <Card key={c.name} {...countryInfo} />;
          })}
        </List>
      </Main>
    </>
  );
}

export default App;