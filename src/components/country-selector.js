import React, { useState } from "react";
import useStats from "../utils/fetch-useStats";
import Stats from "./global-stats";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

// Styled components
const SelectCountryContainer = styled.div`
  padding-top: 1rem;
`;

const Title = styled.div`
  font-size: 3rem;
  text-align: center;
  color: #393e46;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
// Look into React-story-book
export default function Countries() {
  const { stats: countries, loading, error } =
    useStats("https://covid19.mathdro.id/api/countries") || {};
  console.log("countries", countries);
  const [selectedCountry, setSelectedCountry] = useState("CAN");
  // If you get partial error in a complex API
  if (loading) return <p>Loading... </p>;
  if (error) return <p>Error... </p>;
  return (
    <SelectCountryContainer>
      <Title>
        <FontAwesomeIcon icon={faFlag} />
        Select your country, currently showing {selectedCountry}
      </Title>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
      <SelectContainer>
        <select
          onChange={(e) => {
            setSelectedCountry(e.target.value);
          }}
        >
          {countries.countries.map(({ name, iso3 }) => (
            <option selected={selectedCountry === iso3} key={iso3} value={iso3}>
              {name}
            </option>
          ))}
        </select>
      </SelectContainer>
    </SelectCountryContainer>
  );
}
