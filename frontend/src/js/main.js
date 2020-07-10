import Artists from "./components/Artists";
console.log("in main.js");
console.log(Artists);
console.log("after log artists");
navArtist();

const appDiv = document.querySelector('.app');

function navArtist() {
    const artistButton = document.querySelector('.nav__artist');
    artistButton.addEventListener('click', function(){
        console.log("word button clicked");
        fetch("https://localhost:44313/api/artist")
        .then(response => response.json())
        .then(artists => {
            appDiv.innerHTML = Artists(artists);
            console.log(artists);

        })
        .catch(err => console.log(err))
        // appDiv.innerHTML = Artist(artist);
    })
}