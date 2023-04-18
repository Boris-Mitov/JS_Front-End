window.addEventListener("load", solve);

function solve() {
  const firstNameElement = document.getElementById('first-name');
  const lastNameElement = document.getElementById('last-name');
  const ageElement = document.getElementById('age');
  const storyTitleElement = document.getElementById('story-title');
  const genreElement = document.getElementById('genre');
  const yourStoryElement = document.getElementById('story');
  const publishButtonElement = document.getElementById('form-btn');
  const previewListElement = document.getElementById('preview-list');
  const mainDivElement = document.getElementById('main');

  //New buttons
  const saveStoryButton = document.createElement('button');
  const editStoryButton = document.createElement('button');
  const deleteStoryButton = document.createElement('button');

  const storyInfoLi = document.createElement('li');
  storyInfoLi.classList.add('story-info');

  const article = document.createElement('article');

  const nameH4 = document.createElement('h4');
  const ageP = document.createElement('p');
  const titleP = document.createElement('p');
  const genreP = document.createElement('p');
  const yoursStoryP = document.createElement('p');

  publishButtonElement.addEventListener('click', fillPreviewListHandler);
  editStoryButton.addEventListener('click', editStoryHandler);
  saveStoryButton.addEventListener('click', saveStoryHandler);
  deleteStoryButton.addEventListener('click', deleteStoryHandler);

  function fillPreviewListHandler() {
    if (firstNameElement.value !== '' && lastNameElement.value !== '' &&
      ageElement.value !== '' && storyTitleElement.value !== '' && yourStoryElement.value !== '') {

      nameH4.textContent = 'Name: ' + firstNameElement.value + ' ' + lastNameElement.value;
      ageP.textContent = 'Age: ' + ageElement.value;
      titleP.textContent = 'Title: ' + storyTitleElement.value;
      genreP.textContent = 'Genre: ' + genreElement.value;
      yoursStoryP.textContent = yourStoryElement.value;

      article.appendChild(nameH4);
      article.appendChild(ageP);
      article.appendChild(titleP);
      article.appendChild(genreP);
      article.appendChild(yoursStoryP);

      storyInfoLi.appendChild(article);
      previewListElement.appendChild(storyInfoLi);

      saveStoryButton.classList.add("save-btn");
      saveStoryButton.textContent = 'Save Story';

      editStoryButton.classList.add("edit-btn");
      editStoryButton.textContent = 'Edit Story';

      deleteStoryButton.classList.add("delete-btn");
      deleteStoryButton.textContent = 'Delete Story';

      storyInfoLi.appendChild(saveStoryButton);
      storyInfoLi.appendChild(editStoryButton);
      storyInfoLi.appendChild(deleteStoryButton);

      firstNameElement.value = '';
      lastNameElement.value = '';
      ageElement.value = '';
      storyTitleElement.value = '';
      genreElement.value = 'Disturbing';
      yourStoryElement.value = '';
      publishButtonElement.disabled = true;
    }
  }

  function editStoryHandler() {
    firstNameElement.value = nameH4.textContent.split(' ')[1];
    lastNameElement.value = nameH4.textContent.split(' ')[2];
    ageElement.value = ageP.textContent.split(' ')[1];
    storyTitleElement.value = titleP.textContent.split(' ').slice(1).join(' ');
    genreElement.value = genreP.textContent.split(' ')[1];
    yourStoryElement.value = yoursStoryP.textContent;

    previewListElement.innerHTML = '';
    const previewH3 = document.createElement('h3');
    previewH3.textContent = 'Preview';
    previewListElement.appendChild(previewH3);
    publishButtonElement.disabled = false;
  }

  function saveStoryHandler() {
    mainDivElement.innerHTML = '';
    const messageH1 = document.createElement('h1');
    messageH1.textContent = "Your scary story is saved!";
    mainDivElement.appendChild(messageH1);
  }

  function deleteStoryHandler() {
    previewListElement.innerHTML = '';
    const previewH3 = document.createElement('h3');
    previewH3.textContent = 'Preview';
    previewListElement.appendChild(previewH3);

    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    storyTitleElement.value = '';
    genreElement.value = 'Disturbing';
    yourStoryElement.value = '';
    publishButtonElement.disabled = false;
  }
}
