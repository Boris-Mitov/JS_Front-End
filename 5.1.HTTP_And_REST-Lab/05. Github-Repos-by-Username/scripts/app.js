function loadRepos() {
	const username = document.getElementById('username').value;
	const resultsContainer = document.getElementById('repos');
	let url = `https://api.github.com/users/${username}/repos`

	fetch(url, {method: 'GET'})
		.then((result) => result.json())
		.then((data) => {
			resultsContainer.querySelectorAll('*').forEach((child) => child.remove());
			
			for (let i = 0; i < data.length; i++) {
				const newListItem = document.createElement('li');
				const newAnchor = document.createElement('a');

				newAnchor.href = data[i]['html_url'];
				newAnchor.textContent = data[i]['full_name'];
				newListItem.appendChild(newAnchor);
				resultsContainer.appendChild(newListItem);
			}
		})
		.catch((err) => {
			const errorMsg = document.createElement('p');
			errorMsg.textContent = err;

			resultsContainer.appendChild(errorMsg);
		})
}