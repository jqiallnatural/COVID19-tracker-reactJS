import React from "react";
import { useStats } from "../utils/fetch-useStats"
import { Line, Bar } from 'react-chartjs-2'

export default function GlobleChart() {
  const { stats, loading, error } = useStats("https://covid19.mathdro.id/api/daily") || {}
  console.log(stats, "dailyStats")
  if (loading) return <p>Loading... </p>;
  if (error) return <p>Error... </p>;
  const lineChart = (
    stats.length
    ?(
    <Line
      data={{
        labels: stats.map(date => (date.reportDate)),
        datasets: [{
          data: stats.map(date => (date.totalConfirmed)),
          label: "Confirmed",
          borderColor: '#f68787', 
          fill: true,
        }, {
          data: stats.map(date => (date.deaths.total)),
          label: "Deaths",
          borderColor: '#979797', 
          fill: true,
        }],
      }}
    />) : null
  )

  return (
  <div>{lineChart}</div>
  )
}
