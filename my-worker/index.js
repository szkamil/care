addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === 'OPTIONS') {
    // Handle CORS preflight request
    return new Response(null, {
      status: 200, // Change status to 200 OK
      headers: {
        'Access-Control-Allow-Origin': 'https://6647fe58.care-1dq.pages.dev',
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
        'Access-Control-Allow-Origin': 'https://6647fe58.care-1dq.pages.dev',
      },
    })
  }

  return new Response('Method not allowed', {
    status: 405,
    headers: {
      'Access-Control-Allow-Origin': 'https://6647fe58.care-1dq.pages.dev',
    },
  })
}