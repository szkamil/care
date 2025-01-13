addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === 'POST') {
    const data = await request.json()
    const id = crypto.randomUUID()
    await USER_PROFILES.put(id, JSON.stringify(data))
    return new Response('Profile saved', { status: 200 })
  }

  return new Response('Method not allowed', { status: 405 })
}