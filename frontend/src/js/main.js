//import Header from "./components/header";
import Footer from "./components/footer";
import Artists from "./components/Artists";

const appDiv = document.querySelector('.app');

pageBuild();

function pageBuild(){
    //header();
    footer();
    navArtist2();
}

function header(){
    const headerElement = document.querySelector('.header-container');
    headerElement.innerHTML = Header();
}

function footer(){
    const footerElement = document.querySelector('.footer-container');
    footerElement.innerHTML = Footer();
}

// function navArtist() {
//     const artistButton = document.querySelector('.nav__artist');
//     artistButton.addEventListener('click', function(){
//         console.log("word button clicked");
//         fetch("https://localhost:44313/api/artist")
//         .then(response => response.json())
//         .then(artists => {
//             appDiv.innerHTML = Artists(artists);
//             console.log(artists);

//         })
//         .catch(err => console.log(err))
//         // appDiv.innerHTML = Artist(artist);
//     })
// }

function navArtist2() {
    console.log("in navArtis2")
    fetch("https://localhost:44313/api/artist")
    .then(response => response.json())
    .then(artists => {
        appDiv.innerHTML = Artists(artists);
        console.log(artists);

    })
    .catch(err => console.log(err))
    console.log(artists);
}