import phCities from "./phCitiesData.json";
import usCities from "./usCitiesData.js";

export const countryData = [
  {
    code: "PH",
    name: "Philippines",
    flag: "🇵🇭",
    region: "Asia",
    language: "Filipino",
    traits: ["Family-oriented", "Karaoke master"],
    cities: phCities,
    eventPack: "ph_events.json"
  },
  {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    region: "North America",
    language: "English",
    traits: ["Individualistic", "Fast-paced"],
    cities: usCities,
    eventPack: "us_events.json"
  }
];
