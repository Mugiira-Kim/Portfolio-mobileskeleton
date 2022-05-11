const projects = [
  {
    title: 'Tonic',
    roles: { company: 'Canopy', position: ['Back End Dev', '2015'] },
    image: 'img/Desktop/Snapshoot-Portfolio1.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: 'felix45.github.io/portfolio', text: 'See live' },
    seesource: { link: 'github.com/felix45/portfolio', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: { article: ['card', 'article-card', 'mb-3', 'm-sm-auto', 'p-sm-2', 'hide-ruby'], cardImage: ['col-md-6', 'images'], cardDescription: ['col-md-6'] },
    rowClass: { row: ['row', 'g-0', 'p-2']},
  },
  
  {
    title: 'Multi-Post Stories',
    roles: { company: 'Facebook', position: ['Full Stack Dev', '2015'] },
      image: 'img/Desktop/Snapshoot-Portfolio2.svg',
      description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      skills: ['html', 'Ruby on rails', 'css', 'javascript'],
      skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'], 
      livelink: { link: 'felix45.github.io/portfolio', text: 'See live' },
      seesource: { link: 'github.com/felix45/portfolio', text: 'See Source' },
      seeproject: 'See Project',
      htmlClass: { article: ['card', 'article-card', 'mb-3', 'm-sm-auto', 'p-sm-2', 'hide-ruby'], cardImage: ['col-md-6', 'images'], cardDescription: ['col-md-6'] },
      rowClass: { row: [ 'row', 'g-0', 'd-flex', 'flex-row', 'flex-row-reverse', 'p-2']},
    },
  
    {
      title: 'Facebook 360',
      roles: { company: 'Facebook', position: ['Full Stack Dev', '2015'] },
      image: 'img/Desktop/Snapshoot-Portfolio3.svg',
      description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
      skills: ['html', 'Ruby on rails', 'css', 'javascript'],
      skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'], 
      livelink: { link: 'felix45.github.io/portfolio', text: 'See live' },
      seesource: { link: 'github.com/felix45/portfolio', text: 'See Source' },
      seeproject: 'See Project',
      htmlClass: { article: ['card', 'article-card', 'mb-3', 'm-sm-auto', 'p-sm-2', 'hide-ruby'], cardImage: ['col-md-6', 'images'], cardDescription: ['col-md-6'] },
      rowClass: { row: [ 'row', 'g-0', 'p-2']},
    },
  
    {
      title: 'Uber Navigation',
      roles: { company: 'Uber', position: ['Lead Developer', '2018'] },
      image: 'img/Desktop/Snapshoot-Portfolio4.svg',
      description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car..',
      skills: ['html', 'Ruby on rails', 'css', 'javascript'],
      skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'], 
      livelink: { link: 'felix45.github.io/portfolio', text: 'See live' },
      seesource: { link: 'github.com/felix45/portfolio', text: 'See Source' },
      seeproject: 'See Project',
      htmlClass: { article: ['card', 'article-card', 'mb-3', 'm-sm-auto', 'p-sm-2', 'hide-ruby'], cardImage: ['col-md-6', 'images'], cardDescription: ['col-md-6'] },
      rowClass: { row: [ 'row', 'g-0', 'd-flex', 'flex-row', 'flex-row-reverse', 'p-2']},
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

const modalFooter = (project) => {
  const modalButtons = document.createElement('div');
  modalButtons.className = 'd-flex overlay-footer';
  const seeSourceButton = createImageButton(project, project.livelink, "/img/Icon.svg");
  modalButtons.appendChild(seeSourceButton);
  const seeLiveButton = createImageButton(project, project.seesource, "/img/sourcecode.svg");
  modalButtons.appendChild(seeLiveButton);

  return modalButtons;
}

const createImageButton = (project, dest, srcLink) => {
  const link = document.createElement('button');
  link.className = 'btn btn-outline-primary mt-2';
  link.textContent = `${dest.text} `
  link.href = dest.link;
  const img = document.createElement('img');
  img.src = srcLink;
  link.appendChild(img);

  return link;
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
  const cardTagWrapper = document.createElement('ul');
  cardTagWrapper.className = 'list-inline list-inline-item';
  //const cardRoleWrapper = createRoles(project);

  if(!isDesktop) {
    console.log('Tesss.......');
    cardRow.appendChild(cardHeader);
    console.log(cardTagWrapper)
    cardRow.appendChild(cardTagWrapper);
  }

  const Image = document.createElement('img');

  if(isDesktop || document.documentElement.clientWidth <= 767) {
    Image.src = project.image;
    Image.className = 'img-fluid rounded-start';
    imageDiv.appendChild(Image);
  }else {
    imageDiv.style.height = `568px`;
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

  const cardCompany = `<span class="fw-bold"> ${project.roles.company} </span>`;

  const cardTagList = document.createElement('ul');
  cardTagList.className = 'px-0 taglist';

  const cardButton = document.createElement('button');
  cardButton.className = 'btn btn-project btn-outline-primary mt-2';

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
    cardTagList.innerHTML = listItems(project.skills, 'badge list-inline-item rounded-pill bg-light text-primary mb-2 mb-sm-0 mx-1 ');
  } else {
    cardText.textContent = mobileDummyText;
    cardTagWrapper.innerHTML = listItems(project.roles.position, 'list-inline-item');
    cardTagList.innerHTML = listItems(project.skills, 'badge list-inline-item rounded-pill bg-light text-primary mb-2 mb-sm-0 mx-1');
  }

  cardHeader.insertAdjacentHTML('afterEnd', cardCompany);
  cardBody.appendChild(cardTagWrapper);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardTagList);
  

  if(isDesktop) {
    cardBody.appendChild(cardButton);
  }
  
  

  cardRow.appendChild(cardDescription);
  return articleHolder;
};

const articleContainer = document.createElement('div');
const cardContainer = document.querySelector('#portfolio');

for (let i = 0; i < projects.length; i += 1) {
  const cardInstance = createProjectCard(projects[i], i + 1, true);
  articleContainer.appendChild(cardInstance);
}

cardContainer.appendChild(articleContainer);

//Popup window

function showPopupWindow() {
 
 const position  = parseInt(this.getAttribute('data-position'));
 const modalContent = createProjectCard(projects[position], false, false);

 const overlay = document.querySelector('.overlay');
 const overlayCloseBtn = overlayCloseButton();
 const modalButtons = modalFooter(projects[position]);

 console.log(modalButtons);

 overlay.innerHTML = '';
 overlay.appendChild(modalContent);

 overlay.childNodes[0].appendChild(overlayCloseBtn);

 const cardBody = document.querySelector('.overlay .card-body');
 cardBody.appendChild(modalButtons);

 overlay.style.display = 'flex';
 document.querySelector('body').classList.toggle('fixed');

}

const closePopup = () => {
  const overlay = document.querySelector('.overlay');
  overlay.style.display = 'none';
  overlay.innerHTML = '';
  document.querySelector('body').classList.toggle('fixed');
}

const overlayCloseButton = () => {
  const overlayCloseBtn = document.createElement('img');
  overlayCloseBtn.className = 'overlay-close';
  overlayCloseBtn.src = '/img/overlay-close.svg';

  overlayCloseBtn.addEventListener('click',closePopup);

  return overlayCloseBtn;
}

const btnProjects = document.querySelectorAll('.btn-project');
btnProjects.forEach((btnProject) => {
  btnProject.addEventListener('click', showPopupWindow);
});



