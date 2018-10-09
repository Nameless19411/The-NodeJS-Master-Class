/*
Primary file for the API
*/

// Dependencies
const http = require('http')
const url = require('url')
const StringDecoder = require('string_decoder').StringDecoder

// The Server should response to all requests with a string
const server = http.createServer((req, res) => {
  
  // Get the url and parse it
  const parsedUrl = url.parse(req.url, true)
  
  // Get the path
  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g,'')
  console.log(`Path: ${trimmedPath}`)

  // Get the Query string as an object
  const queryStringObject = parsedUrl.query
  console.log(`Query: ${JSON.stringify(queryStringObject)}`)

  // Get the HTTP method
  const method = req.method.toLowerCase()
  console.log(`Method: ${method}`)

  // Get the Headers as an object
  const headers = req.headers
  console.log(`Header: ${JSON.stringify(headers)}`)

  // Get the payload, if any
  const decoder = new StringDecoder('utf-8')
  let buffer = ''

  req.on('data', (data) => {
    buffer += decoder.write(data)
  })
  
  req.on('end', () => {
    buffer += decoder.end()

    // Send the response
    res.end('Hello World!\n')

    // Log the payload
    console.log(`Payload: ${buffer}`)
  })
})

// Start the server, and have it listen on port 3000
server.listen(3000, () => {
  console.log('The Server is listening on port 3000 now')
})