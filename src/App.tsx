import React, { useState } from "react";
import "./styles.css";
import { Dicer } from "./Dicer";
import { RacePicker } from "./RacePicker";
import { AbilitiesGenerator } from "./AbilitiesGenerator";
import { AbilityScores, Race, DEFAULT_ABILITIES_SCORES } from "./domain";
import { AttribuesTable } from "./AttributesTable/AttribuesTable";

export default function App() {
  const [scores, setScores] = useState<AbilityScores>(DEFAULT_ABILITIES_SCORES);
  const [race, setRace] = useState<Race>(Race.Human);
  const abilitiesGenerator = new AbilitiesGenerator();

  function generate() {
    setScores(abilitiesGenerator.generateScores(race));
  }

  return (
    <div className="App">
      <RacePicker onChange={(curRace) => setRace(curRace)} />
      <br />
      <br />
      <button onClick={generate}>Generate!</button>
      <AttribuesTable scores={scores} canSwap={race === Race.Human} />
      <br />
      <br />
      <Dicer />
    </div>
  );
}
