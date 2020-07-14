import Header from "./components/header";
import Footer from "./components/footer";
import Artists from "./components/Artists";
import Artist from "./components/Artist";
import Albums from "./components/Albums";

const appDiv = document.querySelector('.app');


export default function pageBuild(){
    header();
    footer();
    showArtists();
    showAlbums();
}

function header(){
    const headerElement = document.querySelector('.header-container');
    headerElement.innerHTML = Header();
    
}

function footer(){
    const footerElement = document.querySelector('.footer-container');
    footerElement.innerHTML = Footer();
}

function showArtists() {
    fetch("https://localhost:44313/api/artist")
    .then(response => response.json())
    .then(artists => {
        appDiv.innerHTML = Artists(artists);
        console.log(artists);
        artistNameButton();

    })
    .catch(err => console.log(err))
}
function artistNameButton(){
    const artistNameElement = document.querySelectorAll('.artist__name');
    artistNameElement.forEach (element => {
        element.addEventListener('click' , function(){
            const artistId = element.id;
            fetch("https://localhost:44313/api/artist/${artistId}")
            .then(response => response.json())
            .then(artist => {
                appDiv.innerHTML = Artist(artist);
            })
            .catch(err => console.log(err))
        })
    })
}
function showAlbums(){
        const albumsButton = document.querySelector('.album__name');
        albumsButton.addEventListener('click', function(){
            fetch("https://localhost44313/api/album")
            .then(response => response.json())
            .then(albums => {
                appDiv.innerHTML = Albums(albums);

        })
        .catch(err => console.log(err))
    })
}