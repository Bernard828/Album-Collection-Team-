import Header from "./components/header";
import Footer from "./components/footer";
import Artists from "./components/Artists";

const appDiv = document.querySelector('.app');

pageBuild();

function pageBuild(){
    header();
    footer();
    showArtists();
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

    })
    .catch(err => console.log(err))
}