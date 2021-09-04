import { Equipment } from './equipment.model';

export class Armor extends Equipment {
    /**ITEM FIELDS:         *
    * id?: string;          *
    * name?: string;        *
    * cost?: number;        *
    * weight?: number;      *
    * itemType?: string[];  *
    * sourceBook?: string;  *
    * description?: string; *
    * attunement?: boolean; */

    /**ARMOR FIELDS:        */
    armorType?: string;
    baseAC?: number;
    stealthDisadvantage?: boolean;
    strReq?: number = 0;
    maxDexBonus?: number;   //Maximum Dex Bonus is determined by the armor's armorType
}

/** EXAMPLE LIGHT ARMOR ENTRY:
 *  {
 *      "_id": "item_leatherArmor",
 *      "name": "Leather Armor",
 *      "cost": 10,
 *      "weight": 10,
 *      "requires_attunement": false,
 *      "item_type": ["armor"],
 *      "armor_type": "light",
 *      "base_ac": 11,
 *      "stealth_disadv": false
 *  }
 */

/** EXAMPLE MEDIUM ARMOR ENTRY:
 *  {
 *      "_id": "item_chainShirt",
 *      "name": "Chain Shirt",
 *      "cost": 50,
 *      "weight": 20,
 *      "requires_attunement": false,
 *      "item_type": ["armor"],
 *      "armor_type": "medium",
 *      "base_ac": 13,
 *      "stealth_disadv": false
 *  }
 */

/** EXAMPLE HEAVY ARMOR ENTRY
 *  {
 *      "_id": "item_plate-armor",
 *      "name": "Plate Armor",
 *      "cost": 1500,
 *      "weight": 65,
 *      "requires_attunement": false,
 *      "item_type": ["armor"],
 *      "armor_type": "heavy",
 *      "base_ac": 18,
 *      "stealth_disadv": true,
 *      "strength_req": 18
 *  }
 */