import React, { FC } from "react";
import { Attributes } from "../domain";

type Props = {
  scores: Record<Attributes, number>;
  canSwap: boolean;
};

export const AttribuesTable: FC<Props> = ({ scores }) => {
  const { STR, DEX, CON, INT, WIS, CHA } = Attributes;
  return (
    <table>
      <thead>
        <th>{STR}</th>
        <th>{DEX}</th>
        <th>{CON}</th>
        <th>{INT}</th>
        <th>{WIS}</th>
        <th>{CHA}</th>
      </thead>
      <tbody>
        <td>{scores[STR]}</td>
        <td>{scores[DEX]}</td>
        <td>{scores[CON]}</td>
        <td>{scores[INT]}</td>
        <td>{scores[WIS]}</td>
        <td>{scores[CHA]}</td>
      </tbody>
    </table>
  );
};
