// File: src/engine/events.js

import { countryData } from '../data/countryCities.js';
import phEvents from '../data/events/ph_events.json';
import usEvents from '../data/events/us_events.json';

const eventPackMap = {
  PH: phEvents,
  US: usEvents
};

export function loadEventPack(selectedCountryCode) {
  return eventPackMap[selectedCountryCode] || [];
}

export function getApplicableEvents(selectedCountryCode, selectedCityName) {
  const country = countryData.find(c => c.code === selectedCountryCode);
  const city = country?.cities.find(c => c.name === selectedCityName);
  const tags = city?.eventTags || [];

  const allEvents = loadEventPack(selectedCountryCode);
  return allEvents.filter(event => tags.includes(event.tag));
}
