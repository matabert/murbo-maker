//import { AbilityScore } from "./abilities-and-skills/ability-score.model";

import { AbilityScore } from "./abilities-and-skills/ability-score.model";

export class PlayerCharacter {
    /**CHARACTER'S PERSONAL INFORMATION**/
    characterName?: string;
    playerName?: string;
    alignment?: string;
    backgroundId?: string;

    /**ABILITY SCORE ARRAY**/
    strength!: AbilityScore;
    dexterity!: AbilityScore;
    constitution!: AbilityScore;
    intelligence!: AbilityScore;
    wisdom!: AbilityScore;
    charisma!: AbilityScore;

    /**SKILLS ARRAY**/
    /**skills?: {
        acrobatics?: Skill;
        animalHandling?: Skill;
        arcana?: Skill;
        athletics?: Skill;
        deception?: Skill;
        history?: Skill;
        insight?: Skill;
        intimidation?: Skill;
        investigation?: Skill;
        medicine?: Skill;
        nature?: Skill;
        perception?: Skill;
        performance?: Skill;
        persuasion?: Skill;
        religion?: Skill;
        sleightOfHand?: Skill;
        stealth?: Skill;
        survival?: Skill;
    };**/

    /**FEATURES AND TRAITS**/
    /*features!: Feature[];
    proficiencies!: Proficiency[];*/

    constructor() {
        
        //initialize ability score array
        this.strength = new AbilityScore("Strength");
        this.dexterity = new AbilityScore("Dexterity");
        this.constitution = new AbilityScore("Constitution");
        this.intelligence = new AbilityScore("Intelligence");
        this.wisdom = new AbilityScore("Wisdom");
        this.charisma = new AbilityScore("Charisma");

        this.printScores();
    }

    printScores(): void {
        //STRENGTH
        console.log(`${this.strength.name} (${this.strength.abbreviation})`);
        console.log(`${this.strength.totalValue} = ${this.strength.baseValue} + ${this.strength.racialBonus} + ${this.strength.asiBonus} + ${this.strength.miscBonus}`);
        console.log(`${this.strength.modifier}`);
        //DEXTERITY
        console.log(`${this.dexterity.name} (${this.dexterity.abbreviation})`);
        console.log(`${this.dexterity.totalValue} = ${this.dexterity.baseValue} + ${this.dexterity.racialBonus} + ${this.dexterity.asiBonus} + ${this.dexterity.miscBonus}`);
        console.log(`${this.dexterity.modifier}`);
        //CONSTITUTION
        console.log(`${this.constitution.name} (${this.constitution.abbreviation})`);
        console.log(`${this.constitution.totalValue} = ${this.constitution.baseValue} + ${this.constitution.racialBonus} + ${this.constitution.asiBonus} + ${this.constitution.miscBonus}`);
        console.log(`${this.constitution.modifier}`);
        //INTELLIGENCE
        console.log(`${this.intelligence.name} (${this.intelligence.abbreviation})`);
        console.log(`${this.intelligence.totalValue} = ${this.intelligence.baseValue} + ${this.intelligence.racialBonus} + ${this.intelligence.asiBonus} + ${this.intelligence.miscBonus}`);
        console.log(`${this.intelligence.modifier}`);
        //WISDOM
        console.log(`${this.wisdom.name} (${this.wisdom.abbreviation})`);
        console.log(`${this.wisdom.totalValue} = ${this.wisdom.baseValue} + ${this.wisdom.racialBonus} + ${this.wisdom.asiBonus} + ${this.wisdom.miscBonus}`);
        console.log(`${this.wisdom.modifier}`);
        //CHARISMA
        console.log(`${this.charisma.name} (${this.charisma.abbreviation})`);
        console.log(`${this.charisma.totalValue} = ${this.charisma.baseValue} + ${this.charisma.racialBonus} + ${this.charisma.asiBonus} + ${this.charisma.miscBonus}`);
        console.log(`${this.charisma.modifier}`);
    }

}
