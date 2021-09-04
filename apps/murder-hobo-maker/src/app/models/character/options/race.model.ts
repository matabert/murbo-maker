//import { Proficiency } from "../abilities-and-skills/proficiency.model";
//import { Feature } from "../features-and-traits/feature.model";

export class Race {

    _id?: string;
    _baseRaceId?: string;           //For sub-races only
    _name?: string;
    
    _size?: Size;
    _walkSpeed?: number;
    _flySpeed?: number;
    _swimSpeed?: number;

    //_features?: Feature[];
    _feautres?: string[];           //Feature IDs
    _languages?: string[];          //Language Proficiency IDs
}

enum Size {
    Tiny,
    Small,
    Medium,
    Large,
    Huge
}

/**Example Race
 *  {
 *      _id: "rc_MtnDwarf",
 *      _baseRaceId: "rc_Dwarf",
 *      _name: "Mountain Dwarf",
 *      _size: Size.Medium,
 *      _moveSpeed: 30,
 *      _
 *  }
 * 
 **BASE RACE
 *  {
 *      _id: "rc_Dwarf",
 *      _name: "Dwarf",
 *      _size: Size.Medium,
 *      _walkSpeed: 25,
 *      _flySpeed: 0,
 *      _swimSpeed: 0,
 *  }
 * 
 */