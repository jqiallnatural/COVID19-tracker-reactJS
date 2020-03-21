import React from 'react'
import styled from "styled-components";
import useStats from "../utils/fetch-useStats";
// import deviceBreakingPoint from "./cssBreakPoint";

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 2rem;
`

const StatBlock = styled.div`
  background: #f1f3f4;
  font-size: 2rem;
  text-align: center;
  padding: 1.5rem;
  border-radius: 1rem;
  justify-items: center;
`

const TextH3 = styled.h3`
  font-size: 2rem;
  color: #393e46;
`

const ConfirmNum = styled.span`
  font-size: 3rem;
  color: #f68787;
`

const RecoverNum = styled.span`
  font-size: 3rem;
  color: #8cba51;
`

const DeathNum = styled.span`
  font-size: 3rem;
  color: #979797;
`
export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url) || {};
  const confirmedData = stats?.confirmed?.value || "No data available"
  const recoveredData = stats?.recovered?.value || "No data available"
  const deathsData = stats?.deaths?.value || "No data available"
  console.log(stats, loading, error);
  if (loading) return <p>Loading... </p>;
  if (error) return <p>Error... </p>;
  return (
    <StatGrid>
      <StatBlock>
        <TextH3>Confirmed:</TextH3>
        <ConfirmNum>{confirmedData}</ConfirmNum>
      </StatBlock>
      <StatBlock>
        <TextH3>Recovered:</TextH3>
        <RecoverNum>{recoveredData}</RecoverNum>
      </StatBlock>
      <StatBlock>
        <TextH3>Death:</TextH3>
        <DeathNum>{deathsData}</DeathNum>
      </StatBlock>
    </StatGrid>
  );
}
