export default {
	fetch(request) {
		if (request.method.toUpperCase() === 'POST') {
		return new Response('It is a POST request, return JSON', {
			headers: {
				'content-type': 'application/json',
			},
		});
	}else{
		return new Response('Sorry, it is NOT a POST request ' , { 
			headers: {
			'content-type': 'text/plain',
		  },
		}); 
	}
	},
};
