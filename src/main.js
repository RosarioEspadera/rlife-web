import { createSession, joinSession } from './engine/network/sessionManager.js';
import { getApplicableEvents } from './engine/events.js';
import { renderEventCard } from './ui/eventCard.js'; // optional
import { pushEventToServer } from './engine/network/syncEvents.js';

const bootUI = document.getElementById('boot-ui');
const gameRoot = document.getElementById('game-root');

// 🧭 Parse URL params
const params = new URLSearchParams(window.location.search);
const sessionId = params.get('session');
const selectedCity = params.get('city') || 'Kidapawan';
const selectedCountry = params.get('country') || 'PH';
const playerName = params.get('player') || 'You';

// 🚀 Init simulation
async function bootSimulation() {
  bootUI.style.display = 'none';
  gameRoot.style.display = 'block';

  if (sessionId) {
    await joinSession(sessionId, playerName);
  } else {
    await createSession(); // for solo or new multiplayer
  }

  const events = getApplicableEvents(selectedCountry, selectedCity);
  const selectedEvent = events[Math.floor(Math.random() * events.length)];

  renderEventCard(selectedEvent); // display to UI
  await pushEventToServer(selectedEvent, playerName, sessionId); // multiplayer sync
}

bootSimulation();
