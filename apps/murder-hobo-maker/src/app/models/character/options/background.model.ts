import { Proficiency } from "../abilities-and-skills/proficiency.model";
import { Feature } from "../features-and-traits/feature.model";
import { Item } from "../../items/item.model"; 

export class Background {
    _id?: string;
    /*If background is a variant, _baseBgId is the _id of its base background,*
     *and any null values in the variant background are filled with its base's*
     *respective values.                                                      */
    _baseBgId?: string;
    _name?: string;
    _description?: string;
    _proficiencies?: Proficiency[] /*| string[]*/;      //contains either the proficiency objects themselves or the id strings
    _feature?: Feature;
    _equipment?: Item[];

    /*get id(): string { return this._id || 'BACKGROUND_ID_MISSING'; }
    /*get name(): string { return this._name || 'BACKGROUND_NAME_MISSING'; }
    get baseBgId(): string { return this._baseBgId || 'BACKGROUND_NOT_VARIANT'; }
    get description(): string { return this._description || 'BACKGROUND_DESCRIPTION_MISSING'; }
    get proficiencies(): Proficiency[] { return this._proficiencies || [] };
    get feature(): Feature { return this._feature || new Feature(); }*/
}
