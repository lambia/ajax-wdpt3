const percorsoDaChiamare = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(percorsoDaChiamare)
	.then(response => response.json())
	.then(data => {

		console.log("Dati recuperati: ", data);

		document.querySelector(".container").innerHTML = `
			<div>
			<p>ID: ${data.id}</p>
			<p>Titolo: ${data.title}</p>
			<p>Testo: ${data.body}</p>
			</div>`;

	});

// const percorsoDaChiamare = 'https://jsonplaceholder.typicode.com/posts';

// const configurazione = {
// 	method: 'POST',
// 	body: JSON.stringify({ title: 'Il mio nuovo post', userId: 1 }),
// 	headers: { 'Content-Type': 'application/json' }
// };

// fetch(percorsoDaChiamare, configurazione)
// 	.then(response => response.json())
// 	.then(data => console.log(data));
