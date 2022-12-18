async function handleRequest(request) {
	
	// If the bot score is below 30, return a JSON response and block this request
	if (request.cf.bot_management.score < 30) {
	  return new Response(JSON.stringify({ message: "this is an automatic request" }), {
		status: 403,
		headers: {
		  "Content-Type": "application/json",
		},
	  });
	}
  
	// Otherwise, send a subrequest to the requested URL
	const response = await fetch(request.url, {
	  method: request.method,
	  body: request.body,
	  headers: request.headers,
	});
  
	// Return the response from the subrequest
	return response;
  }
  
