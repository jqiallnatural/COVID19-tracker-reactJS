import React from 'react'
import styled from "styled-components";

import useStats from '../utils/fetch-useStats'

const UpdateContainer = styled.div`
  display: flex;
  justify-content: center;
`

const LastUpdateStamp = styled.div`
  font-size: 1rem;
  text-align: center;
`

export default function Update() {
  const { stats, loading, error } = useStats("https://covid19.mathdro.id/api") || {}
  if (loading) return <p>Loading... </p>;
  if (error) return <p>Error... </p>;
  return (
    <UpdateContainer>
      <LastUpdateStamp>
        <h3>Last Update</h3>
        <span>{stats.lastUpdate}</span>
      </LastUpdateStamp>
    </UpdateContainer>
  );
}