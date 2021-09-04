import { Proficiency } from "../../models/character/abilities-and-skills/proficiency.model";
import { Background } from "../../models/character/options/background.model";

export class DummyData {
    static bgList: Background[] = [
        {
            _id: "bg_acolyte",
            _name: 'Acolyte',
            _feature: {
              _name: 'Shelter of the Faithful',
              _description: 'As an acolyte, you command the respect of those who share your faith...'
            },
            _description: 'You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world...',
            //_proficiencies: [ "prof_insight", "prof_religion" ]
            _proficiencies: [
              {
                _name: 'Insight',
                _type: 'skill',
                _subType: 'Wisdom'
              },
              {
                _name: 'Religion',
                _type: 'skill',
                _subType: 'Intelligence'
              }
            ]
          },
          {
            _id: "bg_charlatan",
            _name: 'Charlatan',
            _feature: {
              _name: 'False Identity',
              _description: 'You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.'
            },
            _description: 'You have always had a way with people. You know what makes them tick, you can tease out their hearts\' desires after a few minutes of conversation, and with a few leading questions you can read like they were children\'s books.',
            _proficiencies: [
              {
                _name: 'Deception',
                _type: 'skill',
                _subType: 'Charisma',
              },
              {
                _name: 'Sleight of Hand',
                _type: 'skill',
                _subType: 'Dexterity'
              }
            ]
          },
          {
            _id: "bg_criminal",
            _name: 'Criminal',
            _feature: {
              _name: 'Criminal Contact',
              _description: 'You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.'
            },
            _description: "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You're far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.",
            _proficiencies: [
              {
                _name: 'Deception',
                _type: 'skill'
              },
              {
                _name: 'Stealth',
                _type: 'skill'
              },
              {
                _name: "Thieves' Tools",
                _type: 'tool',
                _subType: 'general',
                _source: 'Criminal (Background)'
              }
            ]
          },
          {
            _id: "bg_spy",
            _baseBgId: "bg_criminal",
            _name: 'Spy',
            _feature: {
              _name: 'Spy Contact',
              _description: "You have a reliable and trustworthy contact who acts as your liaison to a network of other spies. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you."
            },
            _description: "Although your capabilities are not much different from those of a burglar or smuggler, you learned and practiced them in a very different context: as an espionage agent. You might have been an officially sanctioned agent of the crown, or perhaps you sold the secrets you uncovered to the highest bidder.",
            _proficiencies: [
              //Eventually leave these null, as they should pull
              //from the base background.
              {
                _name: 'Deception',
                _type: 'skill'
              },
              {
                _name: 'Stealth',
                _type: 'skill'
              },
              {
                _name: "Thieves' Tools",
                _type: 'tool',
                _subType: 'general',
                _source: 'Criminal (Background)'
              }
            ]
          },
    ];

    static profList: Proficiency[] = [
      /**SKILL PROFICIENCIES**/
      /*{
        _id: "prof_acrobatics",
        _name: "Acrobatics",
        _type: "Skill",
        _subType: "Dexterity",
      },
      {
        _id: "prof_animal_handling",
        _name: "Animal Handling",
        _type: "Skill",
        _subType: "Wisdom",
      },
      {
        _id: "prof_athletics",
        _name: "Athletics",
        _type: "Skill",
        _subType: "Strength",
      },
      {
        _id: "prof_deception",
        _name: "Deception",
        _type: "Skill",
        _subType: "Charisma",
      },
      {
        _id: "prof_history",
        _name: "History",
        _type: "Skill",
        _subType: "Intelligence",
      },
      {
        _id: "prof_insight",
        _name: "Insight",
        _type: "Skill",
        _subType: "Wisdom",
      },
      {
        _id: "prof_intimidation",
        _name: "Intimidation",
        _type: "Skill",
        _subType: "Charisma",
      },
      {
        _id: "prof_investigation",
        _name: "Investigation",
        _type: "Skill",
        _subType: "Intelligence",
      },
      {
        _id: "prof_medicine",
        _name: "Medicine",
        _type: "Skill",
        _subType: "Wisdom",
      },
      {
        _id: "prof_nature",
        _name: "Nature",
        _type: "Skill",
        _subType: "Intelligence",
      },
      {
        _id: "prof_perception",
        _name: "Perception",
        _type: "Skill",
        _subType: "Wisdom",
      },
      {
        _id: "prof_performance",
        _name: "Performance",
        _type: "Skill",
        _subType: "Charisma",
      },
      {
        _id: "prof_persuasion",
        _name: "Persuasion",
        _type: "Skill",
        _subType: "Charisma",
      },
      {
        _id: "prof_religion",
        _name: "Religion",
        _type: "Skill",
        _subType: "Intelligence",
      },
      {
        _id: "prof_sleightofhand",
        _name: "Sleight of Hand",
        _type: "Skill",
        _subType: "Dexterity",
      },
      {
        _id: "prof_stealth",
        _name: "Stealth",
        _type: "Skill",
        _subType: "Dexterity",
      },
      {
        _id: "prof_survival",
        _name: "Survival",
        _type: "Skill",
        _subType: "Wisdom",
      },*/
    ]
}