import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
chartjs.register(
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  BarElement
);
function RegionDonut() {
  const url = "http://localhost:8080/get";
  const [state, setState] = useState([]);
 const ukSector=[]
  for (let i = 0; i < state.length; i++) {
    if (state[i].country === "United States of America") {
     ukSector.push(state[i].sector);};
      console.log(ukSector)
    // } else if (state[i].country === "India") {
    //   inIn += state[i].intensity;
    //   inRelevence += state[i].relevance;
    //   inLivelyH += state[i].likelihood;
    // } else if (state[i].country === "Russia") {
    //   ruIn += state[i].intensity;
    //   ruRelevence += state[i].relevance;
    //   ruLivelyH += state[i].likelihood;
    // } else if (state[i].country === "Saudi Arabia") {
    //   saIn += state[i].intensity;
    //   saRelevence += state[i].relevance;
    //   saLivelyH += state[i].likelihood;
    // } else if (state[i].country === "Egypt") {
    //   egIn += state[i].intensity;
    //   egRelevence += state[i].relevance;
    //   egLivelyH += state[i].likelihood;
    // } else if (state[i].country === "China") {
    //   chIn += state[i].intensity;
    //   chRelevence += state[i].relevance;
    //   chLivelyH += state[i].likelihood;
    // } else if (state[i].country === "Iraq") {
    //   iraqIn += state[i].intensity;
    //   iraqRelevence += state[i].relevance;
    //   iraqLivelyH += state[i].likelihood;
    // } else if (state[i].country === "Iran") {
    //   iranIn += state[i].intensity;
    //   iranRelevence += state[i].relevance;
    //   iranLivelyH += state[i].likelihood;
    // } else if (state[i].country === "Canada") {
    //   caIn += state[i].intensity;
    //   caRelevence += state[i].relevance;
    //   caLivelyH += state[i].likelihood;
    // } else if (state[i].country === "United Kingdom") {
    //   ukIn += state[i].intensity;
    //   ukRelevence += state[i].relevance;
    //   ukLivelyH += state[i].likelihood;
    // }
  }
  useEffect(() => {
    axios.get(url).then((res) => {
      setState(res.data);
    });
  }, []);

  const options = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 0,
      },
      responsive: true,
      plugins: {
        legend: {
          position: "left",
        },
        title: {
          display: true,
          text: "blackCoffer",
        },
      },
    },
  };

  const labels = [
    "United States of America",
    
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "sector",
        data: ukSector,
        borderColor: "rgb(73,52,32)",
        backgroundColor: [
          "rgb(196,22,28)",
          "rgb(0,54,160)",
          "rgb(51,137,221)",
          "rgb(0,105,51)",
          "rgb(200,16,37)",
          "rgb(215,39,15)",
          "rgb(1,32,102)",
          "rgb(110,104,101)",
          "rgb(34,154,61)",
          "rgb(247,209,0)",
        ],
        color: "teal",
      },
      
      ,
    ],
  };
  return (
    <>
      <Doughnut data={data} options={options} />
      {/* <Doughnut data={data} options={options} /> */}
    </>
  );
}

export default RegionDonut;
