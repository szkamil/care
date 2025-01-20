addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === 'OPTIONS') {
    // Handle CORS preflight request
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': 'https://eterna.care',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  }

  if (request.method === 'POST') {
    const data = await request.json()
    const id = crypto.randomUUID()
    await USER_PROFILES.put(id, JSON.stringify(data))
    return new Response('Profile saved', {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://eterna.care',
      },
    })
  }

  return new Response('Method not allowed', {
    status: 405,
    headers: {
      'Access-Control-Allow-Origin': 'https://eterna.care',
    },
  })
}