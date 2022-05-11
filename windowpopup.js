const projects = [
  {
    title: 'Tonic',
    roles: { company: 'Canopy', position: ['Back End Dev', '2015'] },
    image: 'img/Desktop/Snapshoot-Portfolio1.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: 'https://mugiira-kim.github.io/Portfolio-mobileskeleton/',
    seesource: 'https://github.com/Mugiira-Kim',
    seeproject: 'See Project',
    htmlClass: { article: ['card', 'mb-3', 'm-auto', 'p-2', 'hide-ruby'], cardImage: ['col-md-4', 'images'], cardDescription: ['col-md-8'] },
    rowClass: { row: ['row', 'g-0']},
  },
  
  {
    title: 'Multi-Post Stories',
    roles: { company: 'Facebook', position: ['Full Stack Dev', '2015'] },
      image: 'img/Desktop/Snapshoot-Portfolio2.svg',
      description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      skills: ['html', 'Ruby on rails', 'css', 'javascript'],
      skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'], 
      livelink: 'https://mugiira-kim.github.io/Portfolio-mobileskeleton/',
      seesource: 'https://github.com/Mugiira-Kim',
      seeproject: 'See Project',
      htmlClass: { article: ['card', 'mb-3', 'm-auto', 'p-2', 'hide-ruby'], cardImage: ['col-md-4', 'images'], cardDescription: ['col-md-8'] },
      rowClass: { row: [ 'row', 'g-0', 'd-flex', 'flex-row', 'flex-row-reverse']},
    },
  
    {
      title: 'Facebook 360',
      roles: { company: 'Facebook', position: ['Full Stack Dev', '2015'] },
      image: 'img/Desktop/Snapshoot-Portfolio3.svg',
      description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
      skills: ['html', 'Ruby on rails', 'css', 'javascript'],
      skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'], 
      livelink: 'https://mugiira-kim.github.io/Portfolio-mobileskeleton/',
      seesource: 'https://github.com/Mugiira-Kim',
      seeproject: 'See Project',
      htmlClass: { article: ['card', 'mb-3', 'm-auto', 'p-2', 'hide-ruby'], cardImage: ['col-md-4', 'images'], cardDescription: ['col-md-8'] },
      rowClass: { row: [ 'row', 'g-0']},
    },
  
    {
      title: 'Uber Navigation',
      roles: { company: 'Uber', position: ['Lead Developer', '2018'] },
      image: 'img/Desktop/Snapshoot-Portfolio4.svg',
      description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car..',
      skills: ['html', 'Ruby on rails', 'css', 'javascript'],
      skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'], 
      livelink: 'felix45.github.io/portfoliohttps://mugiira-kim.github.io/Portfolio-mobileskeleton/',
      seesource: 'https://github.com/Mugiira-Kim',
      seeproject: 'See Project',
      htmlClass: { article: ['card', 'mb-3', 'm-auto', 'p-2', 'hide-ruby'], cardImage: ['col-md-4', 'images'], cardDescription: ['col-md-8'] },
      rowClass: { row: [ 'row', 'g-0', 'd-flex', 'flex-row', 'flex-row-reverse']},
    },
  ];

  const desktopDummyText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`;

  const mobileDummyText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`;

//create project cards 

const listItems = (items, listClass) => {
  let list = '';
  items.forEach((element) => {
    list += `<li class = '${listClass}'> ${element}</li>`;
  });

  return list;
};

const createRoles = (project) => {
  const cardRoleWrapper = document.createElement('div');
  cardRoleWrapper.className = 'project-role-wrapper';

  const cardRoleCompany = document.createElement('span');
  cardRoleCompany.textContent = project.roles.company;

  cardRoleWrapper.appendChild(cardRoleCompany);

  const cardRolePosition = document.createElement('ul');
  cardRolePosition.className = 'project-role';
  cardRolePosition.innerHTML = listItems(project.roles.position);

  cardRoleWrapper.appendChild(cardRolePosition);

  return cardRoleWrapper;
}

const createHeader = (project, titleElement) => {
  const cardHeader = document.createElement(titleElement);
  cardHeader.className = 'card-title';
  cardHeader.textContent = project.title;

  return cardHeader;
}

const createProjectCard = (project, position = null, isDesktop = true) => {
  articleHolder = document.createElement('article');
  articleHolder.className = project.htmlClass.article.join(' ');

  const cardRow = document.createElement('div'); 
  cardRow.className = project.rowClass.row.join(' ');
  articleHolder.appendChild(cardRow);

  const imageDiv = document.createElement('div');
  imageDiv.className = project.htmlClass.cardImage.join(' ');
  cardRow.appendChild(imageDiv);
  
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const cardHeader = createHeader(project,'h2');
  const cardRoleWrapper = createRoles(project);

  if(!isDesktop) {
    cardBody.appendChild(cardHeader);
    articleHolder.appendChild(cardRoleWrapper);
  }

//  const cardImage = document.createElement('div');
//  cardImage.className = project.htmlClass.cardImage.join(' ');
  const Image = document.createElement('img');

  if(isDesktop || document.documentElement.clientWidth <= 767) {
    Image.src = project.image;
    Image.className = 'img-fluid rounded-start';
    imageDiv.appendChild(Image);
  }else {
    imageDiv.style.height = `70vh`;
    imageDiv.style.backgroundImage = `url(${project.image})`;
    imageDiv.style.backgroundRepeat = `no-repeat`;
    imageDiv.style.backgroundSize = `100%`;
    imageDiv.style.backgroundPositionY = `-190px`;
    imageDiv.style.backgroundPositionx = `center`;
  }
  cardRow.appendChild(imageDiv);

  // New Column
  const cardDescription = document.createElement('div');
  cardDescription.className = project.htmlClass.cardDescription.join(' ');

  cardDescription.appendChild(cardBody);

  const cardTagWrapper = document.createElement('ul');
  cardTagWrapper.className = 'list-inline';

  const cardCompany = `<span class="fw-bold"> ${project.roles.company} </span>`;

  const cardTagList = document.createElement('ul');
  cardTagList.className = 'px-0 taglist';
  
 // cardBody.appendChild(cardTagList);

  const cardButton = document.createElement('button');
  cardButton.className = 'btn btn-outline-primary mt-2';

  if (position){
    cardButton.setAttribute('data-position', position - 1);
  }

  cardButton.innerHTML = '<span>See Project</span>';

  const cardText = document.createElement('p');
  cardText.className = 'card-text';
  cardText.textContent = project.description;

  if(isDesktop) {
    cardBody.appendChild(cardHeader);
   // cardDescription.appendChild(cardRoleWrapper);
    cardText.textContent = project.description;
    cardTagWrapper.innerHTML = listItems(project.roles.position, 'list-inline-item');
    cardTagList.innerHTML = listItems(project.skills, 'badge list-inline-item rounded-pill bg-light text-primary mx-1 ');
  } else {
    cardText.textContent = dummyText;
    cardTagWrapper.innerHTML = listItems(project.roles.position, 'list-inline-item');
    cardTagList.innerHTML = listItems(project.skills, 'badge list-inline-item rounded-pill bg-light text-primary mx-1');
  }

  cardHeader.insertAdjacentHTML('afterEnd', cardCompany);
  cardBody.appendChild(cardTagWrapper);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardTagList);
  cardBody.appendChild(cardButton);
  
  

  cardRow.appendChild(cardDescription);
  return articleHolder;
};

const articleContainer = document.createElement('div');
const cardContainer = document.querySelector('#portfolio');
//let articleHolder = null;

for (let i = 0; i < projects.length; i += 1) {
  const cardInstance = createProjectCard(projects[i], i + 1, true);
  articleContainer.appendChild(cardInstance);
}

cardContainer.appendChild(articleContainer);

//Popup window

function showPopupWindow() {
 console.log(this);
 const position  = parseInt(this.getAttribute('data-position'));
 const modalContent = createProjectCard(projects[position], false, false);
 console.log(modalContent);
 const overlay = document.querySelector('.overlay');
 overlay.innerHTML = '';
 overlay.appendChild(modalContent);
 overlay.style.display = 'flex';
}

const btnProjects = document.querySelectorAll('.btn-project');
btnProjects.forEach((btnProject) => {
  btnProject.addEventListener('click', showPopupWindow);
});



