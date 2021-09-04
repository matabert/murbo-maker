import { Equipment } from './equipment.model';

export class Weapon extends Equipment {
    /**ITEM FIELDS:         *
    * id?: string;          *
    * name?: string;        *
    * cost?: number;        *
    * weight?: number;      *
    * itemType?: string[];  *
    * sourceBook?: string;  *
    * description?: string; *
    * attunement?: boolean; */

    /**WEAPON FIELDS        */
    wpn_class?: string;
    properties?: string[];
    damageDie?: string;
}

/** EXAMPLE WEAPON ENTRY: 
 *  {
 *      "_id": "item_club",
 *      "name": "Club",
 *      "cost": 0.1,
 *      "weight": 2,
 *      "requires_attunement": false,
 *      "item_type": ["weapon"],
 *      "weapon_class": "simple",
 *      "damage_die": "1d4",
 *      "damage_type": "bludgeoning",
 *      "weapon_properties": ["wpnprop_light"]
 *  }
*/