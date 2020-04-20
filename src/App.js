import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/home-page";
import NavigationHeader from "./components/navigation-header"
import CountryDetailPage from "./pages/country-detail-page";
import ContactPage from "./pages/contact-page";
import AboutPage from "./pages/about-page";


function App() {
  return (
    <div>
      <NavigationHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/countrydetailpage" component={CountryDetailPage} />
        <Route path="/contactpage" component={ContactPage} />
        <Route path="/aboutpage" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
