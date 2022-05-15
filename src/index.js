import getForm from "./utils/form.js";
import fetchData from "./utils/fetchData.js";

const home = document.getElementById('home');
const fragment = document.createDocumentFragment(); 

const templateHome = document.getElementById('template-home').content;
const templateaboutUs = document.getElementById('template-aboutUs').content;
const templateContactUs = document.getElementById('template-contactUs').content;

const renderPage = (template)=>{
  home.textContent = '';
  const cloneHome = template.cloneNode(true);
  fragment.appendChild(cloneHome);
  home.appendChild(fragment);
};

const navigation = (e,idPage,page)=>{
  if(e.target.id===idPage){
    page();
  }
};

const homePage = ()=>{
  renderPage(templateHome);
  fetchData();
};

homePage();

const aboutUsPage = ()=>{
  renderPage(templateaboutUs);
}

const contactUsPage = ()=>{
  renderPage(templateContactUs);
  getForm();
};

document.addEventListener('click',e=>{

  navigation(e,'homePage',homePage);
  navigation(e,'aboutUs',aboutUsPage);
  navigation(e,'contactUs',contactUsPage);

  if(e.target.id==='instagram'){
    document.querySelector('.meme').classList.remove('hidden');
  }else{
    if(!(e.target.id==='imgMeme'))
    document.querySelector('.meme').classList.add('hidden');
  }
});



