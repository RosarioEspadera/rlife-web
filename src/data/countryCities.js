import phCities from "./phCitiesData.json";

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
    cities: [
      { name: "New York", population: 8500000, traits: ["Cosmopolitan", "Ambitious"], eventTags: ["BroadwayAudition", "Snowstorm"] },
      { name: "Austin", population: 1000000, traits: ["Startup scene", "Hot summers"], eventTags: ["TechConference", "BBQFestival"] }
    ],
    eventPack: "us_events.json"
  }
];
