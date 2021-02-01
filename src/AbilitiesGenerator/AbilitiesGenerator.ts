import {
  AbilityScores,
  Attributes,
  Race,
  DEFAULT_RACE_ABILITY_SCORE
} from "../domain";
import { dice } from "../helpers";

const { STR, DEX, CON, INT, WIS, CHA } = Attributes;

const { Human, Elf, Dwarf, Halfling } = Race;

export class AbilitiesGenerator {
  constructor() {
    this.generateHuman.bind(this);
  }

  private generateHuman(): AbilityScores {
    const scores: Partial<AbilityScores> = {};
    for (const attribute in Attributes) {
      scores[attribute as Attributes] = dice(6, 3);
    }

    return scores as AbilityScores;
  }

  private generateElf() {
    return {
      [STR]: dice(6, 2) + 3,
      [DEX]: DEFAULT_RACE_ABILITY_SCORE,
      [CON]: dice(6, 2) + 3,
      [INT]: DEFAULT_RACE_ABILITY_SCORE,
      [WIS]: dice(6, 2) + 3,
      [CHA]: dice(6, 2) + 3
    };
  }

  private generateDwarf() {
    return {
      [STR]: DEFAULT_RACE_ABILITY_SCORE,
      [DEX]: dice(6, 2) + 3,
      [CON]: DEFAULT_RACE_ABILITY_SCORE,
      [INT]: dice(6, 2) + 3,
      [WIS]: dice(6, 2) + 3,
      [CHA]: dice(6, 2) + 3
    };
  }

  private generateHalfling() {
    return {
      [STR]: dice(6, 2) + 3,
      [DEX]: dice(6, 2) + 3,
      [CON]: dice(6, 2) + 3,
      [INT]: dice(6, 2) + 3,
      [WIS]: DEFAULT_RACE_ABILITY_SCORE,
      [CHA]: DEFAULT_RACE_ABILITY_SCORE
    };
  }

  generateScores(race: Race) {
    switch (race) {
      case Human:
        return this.generateHuman();
      case Elf:
        return this.generateElf();
      case Dwarf:
        return this.generateDwarf();
      case Halfling:
        return this.generateHalfling();
      default:
        return this.generateHuman();
    }
  }
}
