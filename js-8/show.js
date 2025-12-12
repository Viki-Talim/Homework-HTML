const LOGGED_USER_KEY = "loggedUser";
let show = {};
let episodes = [];
let cast = [];

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

console.log(id);
function logout() {
  localStorage.removeItem(LOGGED_USER_KEY);
  window.location.href = "index.html";
}
function checkLoginStatus() {
  const userString = localStorage.getItem(LOGGED_USER_KEY);
  const loggedUser = userString ? JSON.parse(userString) : null;
  const favoritesLink = document.getElementById("favoritesLink");
  const joinLink = document.getElementById("joinLink");
  const userDataDiv = document.getElementById("userData");

  if (loggedUser) {
    favoritesLink.style.display = "block";
    joinLink.style.display = "none";
    userDataDiv.style.display = "flex";
  } else {
    favoritesLink.style.display = "none";
    joinLink.style.display = "block";
    userDataDiv.style.display = "none";
  }
}
checkLoginStatus();
fetch(`https://api.tvmaze.com/shows/${id}`)
  .then((res) => res.json())
  .then((res) => {
    show = res;
    renderShows();
  });
function renderShows() {
  const showContainer = document.getElementById("show-container");

  showContainer.innerHTML += `<div class="summary">
    
    <img src='${show.image.medium}'/>
    <div class="summary-content">
    <h2 >${show.name}</h2>
    <p class="genres">${show.genres}</p>
    <p>${show.summary}</p>
    
      <h2 >Episodes</h2></div></div>
  
    `;
}

fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
  .then((res) => res.json())
  .then((res) => {
    episodes = res;
    renderEpisodes();
  });
function renderEpisodes() {
  const episodeContainer = document.getElementById("episode-container");
  console.log(episodes);
  episodes.forEach((episode) => {
    episodeContainer.innerHTML += `
   <div class="episode-card">
      <h1 id="episode-title">${episode.name}</h1>
      <img src='${episode.image.medium}'/>
      ${episode.summary}
</div>
      
      `;
  });
}
fetch(`https://api.tvmaze.com/shows/${id}/cast`)
  .then((res) => res.json())
  .then((res) => {
    cast = res;
    renderCast();
  });
function renderCast() {
  const castContainer = document.getElementById("cast-container");
  cast.forEach((cast) => {
    castContainer.innerHTML += `
    <div class="cast-member">
    <img src='${cast.person.image.medium}'/>
    <h2>${cast.person.name}</h2>
    <p>${cast.character.name}</p>
    </div>
    
    `;
  });
}
