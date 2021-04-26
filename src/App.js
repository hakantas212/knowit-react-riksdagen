import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Listbox, Transition } from '@headlessui/react'
import "./App.css";
import Card from "./Card";
import styled from "styled-components";

function App() {
  const [members, setMembers] = useState([]);
  const [parti, setParti] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  function filterParti(e) {
    setParti(e.target.value);
  }

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://data.riksdagen.se/personlista/?utformat=json")
      .then(res => {
        console.log(res.data.personlista.person);
        setMembers(
          res.data.personlista.person
        );
        
        setIsLoading(false);
      })

      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <section>
        <Header>
          <select id="lang" onChange={filterParti} value={parti}>
            <option value="all">ALL</option>
            <option value="S">Socialdemokraterna</option>
            <option value="M">Moderaterna</option>
            <option value="SD">Sverigedemokraterna </option>
            <option value="C">Centerpartiet</option>
            <option value="V">Vänsterpartiet</option>
            <option value="KD">Kristdemokraterna</option>
            <option value="L">Liberalerna</option>
            <option value="MP">Miljöpartiet</option>
          </select>
        </Header>
        <section className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5">
        {isLoading ? (
          <StyledSpinner viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="2"
            />
          </StyledSpinner>
        ) : (
          members
            .filter(type =>
              parti === "all" ? type.parti : type.parti === parti
            )
            .map(member => (
              
              <Card
                hangar_id={member.hangar_id}
                name={member.tilltalsnamn}
                lastname={member.efternamn}
                parti={member.parti}
                photo={member.bild_url_192}
                location={member.valkrets}
                info={member.personuppgift}
              ></Card>
            ))

        )
        }
        </section>
      </section>
    </div>
  );
}

const Header = styled.header`
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-repeat: no-repeat, repeat;
  background-size: 0.65em auto, 100%;
`;
// const Container = styled.div`
//   display: block;
//   margin: 0 auto;
// `;
const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  margin: 40px;
  width: 50px;
  height: 50px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default App;
