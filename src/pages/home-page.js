import React from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

import { createGlobalStyle } from "styled-components";
import Stats from "../components/global-stats";
import Countries from "../components/country-selector";
import Update from "../components/footer-update";

const HomePageTitle = styled.h1`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 3rem;
  color: #393e46;
  margin: 0;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    /* background-color: #282c34; */
  }
`;

const HomePage = () => (
  <div>
    <HomePageTitle>
      <FontAwesomeIcon icon={faGlobeAmericas} />
      COVID-19 Global Update
    </HomePageTitle>
    <Stats url="https://covid19.mathdro.id/api"></Stats>
    <Countries></Countries>
    <Update></Update>
    <GlobalStyle />
  </div>
);

export default HomePage;
