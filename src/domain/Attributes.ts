export enum Attributes {
  STR = "STR",
  DEX = "DEX",
  CON = "CON",
  INT = "INT",
  WIS = "WIS",
  CHA = "CHA"
}

export type AbilityScores = Record<Attributes, number>;

export const DEFAULT_RACE_ABILITY_SCORE = 13;

export const DEFAULT_ABILITIES_SCORES = {
  [Attributes.STR]: 10,
  [Attributes.DEX]: 10,
  [Attributes.CON]: 10,
  [Attributes.INT]: 10,
  [Attributes.WIS]: 10,
  [Attributes.CHA]: 10
};
