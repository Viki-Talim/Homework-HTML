let favoriteIds = [];
const faveIdString = localStorage.getItem("favorites");
if (faveIdString) {
  favoriteIds = JSON.parse(faveIdString).map((id) => Number(id));
}
async function renderFaveShows() {
  if (favoriteIds.length === 0) {
    document.getElementById(
      "shows-container"
    ).innerHTML = `<p class='noShow-message'>You don't have any favorite shows.</p>`;
    return;
  }
  const promises = favoriteIds.map((id) =>
    fetch(`https://api.tvmaze.com/shows/${id}`).then((res) => res.json())
  );
  const shows = await Promise.all(promises);
  renderShows(shows);
}
function renderShows(shows) {
  const favoriteShowContainer = document.getElementById("shows-container");
  favoriteShowContainer.innerHTML = "";
  shows.forEach((show) => {
    favoriteShowContainer.innerHTML += `
             <div id="show-${show.id}" class='show ${
      favoriteIds.includes(show.id) ? "fave" : ""
    }'>
                  <img src='${show.image.medium}' />
                  <div class="show-rating">
                  <div onclick="toggleFavorite(${show.id})">
                  ${
                    show.rating.average > 8
                      ? '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" color="#3b718a" fill="none" viewBox="0 0 24 24"><path d="M10.0802 7.89712C11.1568 5.96571 11.6952 5 12.5 5C13.3048 5 13.8432 5.96571 14.9198 7.89712L15.1984 8.3968C15.5043 8.94564 15.6573 9.22007 15.8958 9.40114C16.1343 9.5822 16.4314 9.64942 17.0255 9.78384L17.5664 9.90622C19.6571 10.3793 20.7025 10.6158 20.9512 11.4156C21.1999 12.2153 20.4872 13.0487 19.0619 14.7154L18.6932 15.1466C18.2881 15.6203 18.0856 15.8571 17.9945 16.1501C17.9034 16.443 17.934 16.759 17.9953 17.3909L18.051 17.9662C18.2665 20.19 18.3742 21.3019 17.7231 21.7962C17.072 22.2905 16.0932 21.8398 14.1357 20.9385L13.6292 20.7053C13.073 20.4492 12.7948 20.3211 12.5 20.3211C12.2052 20.3211 11.927 20.4492 11.3708 20.7053L10.8643 20.9385C8.90677 21.8398 7.928 22.2905 7.27688 21.7962C6.62575 21.3019 6.7335 20.19 6.94899 17.9662L7.00474 17.3909C7.06597 16.759 7.09659 16.443 7.00548 16.1501C6.91438 15.8571 6.71186 15.6203 6.30683 15.1466L5.93808 14.7154C4.51276 13.0487 3.8001 12.2153 4.04881 11.4156C4.29751 10.6158 5.34288 10.3793 7.43361 9.90622L7.9745 9.78384C8.56862 9.64942 8.86568 9.5822 9.1042 9.40114C9.34272 9.22007 9.4957 8.94565 9.80165 8.3968L10.0802 7.89712Z" fill="currentColor"></path><path opacity="0.5" d="M4.86752 2.50058C4.89751 2.3948 5.08528 2.39416 5.11598 2.49974C5.25618 2.98185 5.51616 3.69447 5.90928 4.08495C6.30241 4.47543 7.01676 4.73058 7.49981 4.86752C7.6056 4.89751 7.60623 5.08528 7.50065 5.11598C7.01854 5.25618 6.30592 5.51616 5.91545 5.90928C5.52497 6.30241 5.26981 7.01676 5.13287 7.49981C5.10288 7.6056 4.91511 7.60623 4.88441 7.50065C4.74421 7.01854 4.48424 6.30592 4.09111 5.91545C3.69798 5.52497 2.98363 5.26981 2.50058 5.13287C2.3948 5.10288 2.39416 4.91511 2.49974 4.88441C2.98185 4.74421 3.69447 4.48424 4.08495 4.09111C4.47543 3.69798 4.73058 2.98363 4.86752 2.50058Z" fill="currentColor"></path><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M19 3.25C19.4142 3.25 19.75 3.58579 19.75 4V4.25H20C20.4142 4.25 20.75 4.58579 20.75 5C20.75 5.41421 20.4142 5.75 20 5.75H19.75V6C19.75 6.41421 19.4142 6.75 19 6.75C18.5858 6.75 18.25 6.41421 18.25 6V5.75H18C17.5858 5.75 17.25 5.41421 17.25 5C17.25 4.58579 17.5858 4.25 18 4.25H18.25V4C18.25 3.58579 18.5858 3.25 19 3.25Z" fill="currentColor"></path></svg>'
                      : '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" color="#3b718a" fill="none" viewBox="0 0 24 24"><path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="currentColor"></path></svg>'
                  }</div>
                      
                      <h3>${show.rating.average}</h3>
                  </div>
                  <h2 class="show-title">${show.name}</h2>
                  <a class="view-show-link" href='show.html?id=${
                    show.id
                  }'>View Show</a>
             </div>
          `;
  });
}
function toggleFavorite(id) {
  const showId = Number(id);
  if (favoriteIds.includes(showId)) {
    favoriteIds = favoriteIds.filter((x) => x !== showId);

    const showElement = document.getElementById(`show-${showId}`);
    if (showElement) {
      showElement.classList.remove("fave");
    }
  }
  localStorage.setItem("favorites", JSON.stringify(favoriteIds));
  renderFaveShows();
}
renderFaveShows();
