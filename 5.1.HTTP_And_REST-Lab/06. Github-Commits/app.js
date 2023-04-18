function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
	const resultsContainer = document.getElementById('commits');
	let url = `https://api.github.com/repos/${username}/${repo}/commits`

	fetch(url, {method: 'GET'})
		.then((result) => result.json())
		.then((data) => {
			resultsContainer.querySelectorAll('*').forEach((child) => child.remove());
			for (let i = 0; i < data.length; i++) {
				const newListItem = document.createElement('li');
   
				newListItem.textContent = `${data[i]['commit']['author']['name']}: ${data[i]['commit']['message']}`;
                                         //`${data[i].commit.author.name}: ${data[i].commit.message}`
                                         //`${data[i][0][0][0]}: ${data[i][0][0]}`
				resultsContainer.appendChild(newListItem);
			}
		})
		.catch((err) => {
			const errorMsg = document.createElement('li');
            
			errorMsg.textContent = err.message;

			resultsContainer.appendChild(errorMsg);
		})
}