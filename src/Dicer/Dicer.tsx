import React, { FC, useState } from "react";
import { dice } from "../helpers";

type State = {
  dieType?: number;
  dieCount?: number;
};

const initialDie: State = {
  dieType: 6,
  dieCount: 1
};

export const Dicer: FC = () => {
  const [dieState, setDieState] = useState<State>(initialDie);
  const [rollState, setRollState] = useState<number>(0);

  function handleRoll() {
    setRollState(dice(dieState.dieType, dieState.dieCount));
  }

  return (
    <div>
      <span>
        <input
          value={dieState.dieCount}
          type="number"
          onChange={(e) =>
            setDieState({ ...dieState, dieCount: Number(e.target.value) })
          }
        />
      </span>
      d
      <span>
        <input
          value={dieState.dieType}
          type="number"
          onChange={(e) =>
            setDieState({ ...dieState, dieType: Number(e.target.value) })
          }
        />
      </span>
      <button onClick={handleRoll}>Roll!</button>
      <br />
      <b>{rollState}</b>
    </div>
  );
};
