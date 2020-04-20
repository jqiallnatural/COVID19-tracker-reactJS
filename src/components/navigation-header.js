import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

// import CountryDetailPage from "../pages/country-detail-page";
// import ContactPage from "../pages/contact-page";
// import AboutPage from "../pages/about-page";

const NavigationContainer = styled.div`
  font-size: 1.3rem;
  height: 3rem;
  width: 100%;
  border-bottom: solid 0.05rem lightgrey;
  z-index: 999;
  margin-bottom: 5rem;
  background: #f1f3f4;
`;

const NavBarInnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: auto;
  padding: 0 1.45rem 0 1.0875rem;
  /* margin: 0 auto; */
  height: 3rem;
`;

const HeaderH1 = styled(Link)`
  margin: 0;
  text-decoration: none;
  color: black;
  :hover {
    opacity: 0.5;
  }
  transition: 0.6s;
`
const OptionsContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const OptionsLink = styled(Link)`
  padding: 0 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  :hover {
    opacity: 0.3;
  }
  transition: 0.6s;
`


const NavigationHeader = () => (
  <NavigationContainer>
    <NavBarInnerDiv>
    <HeaderH1 to="/">COVID-19-TRACKING</HeaderH1>
    <OptionsContainer>
      <OptionsLink to="/countrydetailpage">Detail</OptionsLink>
      <OptionsLink to="/contactpage">Contact</OptionsLink>
      <OptionsLink to="/aboutpage">About</OptionsLink>
    </OptionsContainer>
    </NavBarInnerDiv>
  </NavigationContainer>
);

export default NavigationHeader;
