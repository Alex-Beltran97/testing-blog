import data from '../../data/data.js'

const fragment = document.createDocumentFragment(); 

const fetchData = ()=>{
  const template = document.getElementById('template').content;
  const result = document.querySelector('.top-ten');

  data.forEach(item=>{
    const clone = template.cloneNode(true);

    clone.querySelectorAll('.nameAlbum').forEach(itemName=>itemName.textContent = item.nameAlbum);
    clone.querySelector('#artist').textContent = item.band;
    clone.querySelector('#yearAlbum').textContent = item.year;
    clone.querySelector('#linkSong').setAttribute('src',`https://open.spotify.com/embed?uri=spotify:track:${item.linkSong}`);

    fragment.appendChild(clone);
  })

  result.appendChild(fragment);
};

export default fetchData;