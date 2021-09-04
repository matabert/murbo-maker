interface iAbilityScore {
    name: string;
    abbreviation: string;
    totalValue: number;
    baseValue: number;
    racialBonus: number;
    asiBonus: number;
    miscBonus: number;
    modifier: number;
}

export class AbilityScore implements iAbilityScore {
    name: string;
    abbreviation: string;
    totalValue: number;
    baseValue: number;
    racialBonus: number;
    asiBonus: number;
    miscBonus: number;
    modifier: number;

    //Name must be passed in to create ability score, if no value
    //is passed in, value defaults to 10.
    constructor(name?: string, value?: number, racialBonus?: number, asiBonus?: number, miscBonus?: number) {
        this.name = name || "ABILITY SCORE";
        this.abbreviation = this.name.substring(0, 3).toUpperCase();
        this.racialBonus = racialBonus || 0;
        this.asiBonus = asiBonus || 0;
        this.miscBonus = miscBonus || 0;
        this.baseValue = value || 10;
        this.totalValue = this.baseValue + this.miscBonus + this.asiBonus;
        this.modifier = value && (Math.floor((value - 10) / 2)) || 0;
    }
}
