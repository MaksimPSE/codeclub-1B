const RandomResponse = [
	'this is a random response number 1. You are lucky!',
	'this is a second random response. Try hard!',
	'third random response. Try another time!',
	'yep, it is a random response number 4',
];

addEventListener('fetch', event => {
	return event.respondWith(handleRequest(event.request));
});


async function handleRequest(request) {
	let random_value = Math.floor(Math.random() * RandomResponse.length)
	return new Response(RandomResponse[random_value] , { 
		headers: {
			'content-type': 'text/plain',
	  	},
	}); 
}
