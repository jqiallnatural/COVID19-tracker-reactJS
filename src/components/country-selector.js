import React, { useState } from "react";
import useStats from "../utils/fetch-useStats";
import Stats from "./global-stats";

import styled from "styled-components";

// Styled components
const SelectCountryContainer = styled.div`
  padding-top: 1rem;
`;

const Title = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export default function Countries() {
  const { stats: countries, loading, error } =
    useStats("https://covid19.mathdro.id/api/countries") || {};
  const [selectedCountry, setSelectedCountry] = useState("CA");
  if (loading) return <p>Loading... </p>;
  if (error) return <p>Error... </p>;
  return (
    <SelectCountryContainer>
      <Title>Select your country, currently showing {selectedCountry}</Title>
      <SelectContainer>
        <select
          onChange={e => {
            setSelectedCountry(e.target.value);
          }}
        >
          {Object.entries(countries.countries).map(([country, code]) => (
            <option
              selected={selectedCountry === countries.iso3[code]}
              key={code}
              value={countries.iso3[code]}
            >
              {country}
            </option>
          ))}
        </select>
      </SelectContainer>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </SelectCountryContainer>
  );
}
