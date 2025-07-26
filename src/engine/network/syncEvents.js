export async function pushEventToServer(event, playerId, sessionId) {
  const res = await fetch(`/api/events/${sessionId}`, {
    method: 'POST',
    body: JSON.stringify({ playerId, event }),
    headers: { 'Content-Type': 'application/json' }
  });
  return res.ok;
}

export async function getEventsForSession(sessionId) {
  const res = await fetch(`/api/events/${sessionId}`);
  const events = await res.json();
  return events;
}
