export class Item {
    /* Database table's id for the item */
    _id?: string;
    /* Item's name as given in source books */
    _name!: string;
    /* Cost of the item, in GP, which will be scaled *
    * for readability in the application.           */
    _cost?: number;
    /* Item's weight, in pounds (lbs.) */
    _weight?: number;

    _itemType?: string[];
    _sourceBook?: string;
    _description?: string;
    _attunement?: boolean;
}

/**LIST OF ITEM TYPES: 
 * > Adventuring Gear
 * > Ammunition
 * > Equipment
 * --> Armor
 * ----> Light Armor
 * ----> Medium Armor
 * ----> Heavy Armor
 * --> Clothing
 * --> Tattoo
 * --> Ring
 * --> Wand
 * --> Weapon
 * ----> Martial Weapon
 * ----> Simple Weapon
 * > Explosive
 * > Food and Drink
 * > Modern
 * > Mount
 * > Other
 * > Poison
 * > Potion
 * > Renaissance
 * > Scroll
 * > Tack and Harness (Barding, Saddles)
 * > Tools
 * --> Artisan's Tools
 * --> Gaming Set
 * --> Musical Instrument
 * --> Uncategorized
 * --> Vehicle
 * ----> Vehicle (Air)
 * ----> Vehicle (Land)
 * ----> Vehicle (Water)
 * > Trade Good
 * > Treasure
 * > Wondrous Item
*/