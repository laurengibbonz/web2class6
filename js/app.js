// Tip: update url with your API & API key (if needed)
const url = `https://api.thecatapi.com/v1/images/search&limit=10`;

// Tip: if headers needed, update to fetch(url, urlInit) on line 33
// const urlInit = {
// 	headers: {
// 		"x-rapidapi-key": "",
// 		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
// 		"useQueryString": true
// 	},
// };

function handleErrors(response) {
	console.log(response);
	if(!response.ok) {
		throw (`${response.status}: ${response.statusText}`);
	}
	return response.json();
}

function updateUI(data) {
	console.log(data);
	// Tip: If data returns API, uncomment code below
	// for(let i = 0; i < data.length; i++)
	// 	document.querySelector('#content').innerHTML += `<img src="${elem.url}"/>`;
	// }
}

function failUI(error) {
	console.log(error);
}

fetch(url)
.then(function(response) {
   return handleErrors(response);
})
.then(function(data) {
   return updateUI(data);
})
.catch(function(error) {
   return failUI(error);
});