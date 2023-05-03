import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:8080/get";
function Black() {
  let ukregion =[]
  const [state, setState] = useState([]);
  for (let i = 0; i < state.length; i++) {
    if (state[i].country === "United Kingdom") {
      ukregion.push(state[i].sector);
      
    }
  }
  console.log(ukregion, "inee");
 ;
  useEffect(() => {
    axios.get(url).then((res) => {
      setState(res.data);
    });
  }, []);
  return (
    <>
      {state.length > 0 &&
        state.map((ele) => {
          return <h1>{ele.country}</h1>;
        })}
    </>
  );
}

export default Black;
