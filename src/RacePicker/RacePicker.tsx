import React, { FC } from "react";
import { Race } from "../domain";

type Props = {
  onChange(race: Race): void;
};

export const RacePicker: FC<Props> = ({ onChange }) => {
  const { Human, Elf, Dwarf, Halfling } = Race;
  return (
    <select name="choice" onChange={(e) => onChange(e.target.value as Race)}>
      <option value={Human}>{Human}</option>
      <option value={Elf}>{Elf}</option>
      <option value={Dwarf}>{Dwarf}</option>
      <option value={Halfling}>{Halfling}</option>
    </select>
  );
};
