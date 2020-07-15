import Header from "./components/header";
import Footer from "./components/footer";
import Artists from "./components/Artists";
import Artist from "./components/Artist";
import Albums from "./components/Albums";
import apiActions from "./api/apiActions";
import ArtistPostSection from "./components/artistPost_section";

const appDiv = document.querySelector('.app');


export default function pageBuild() {
    header();
    footer();
    navHome();
    showArtists();
    //showAlbums();
}

function header() {
    const headerElement = document.querySelector('.header-container');
    headerElement.innerHTML = Header();

}

function footer() {
    const footerElement = document.querySelector('.footer-container');
    footerElement.innerHTML = Footer();
}

function navHome() {
    const homeButton = document.querySelector('.nav__home');
    homeButton.addEventListener('click', function () {
        appDiv.innerHTML = showArtists();
    })

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
function artistNameButton() {
    const artistNameElement = document.querySelectorAll('.artist__name');
    //console.log(artistNameButton);
    artistNameElement.forEach(element => {
        element.addEventListener('click', function () {
            const artistId = element.id;
            console.log("artist Name clicked");
            console.log(artistId);
            fetch(`https://localhost:44313/api/artist/${artistId}`)
                .then(response => response.json())
                .then(artist => {
                    appDiv.innerHTML = Artist(artist);
                    showAlbums();
                })
                .catch(err => console.log(err))
        })
    })
}
function showAlbums() {
    const albumsButton = document.querySelector('.album__name');
    albumsButton.addEventListener('click', function () {
        fetch("https://localhost44313/api/album")
            .then(response => response.json())
            .then(albums => {
                appDiv.innerHTML = Albums(albums);

            })
            .catch(err => console.log(err))
    })
}
appDiv.addEventListener('click', function () {
    console.log("add artist button click");
    const addArtistSection = document.querySelector('.add-artist');
    console.log(addArtistSection);
    if (event.target.classList.contains('add-artist__button')) {
        console.log("if statement");
        // apiActions.getRequest(`https://localhost44313/api/artist`,
        //     artist => {
        //         console.log(artist);
        //         addArtistSection.innerHTML = ArtistPostSection(artist);
        //         console.log("after innerHTML")
        //     })
        
        //console.log(artist);
        //addArtistSection.innerHTML = ArtistPostSection(artist);
        addArtistSection.innerHTML = ArtistPostSection();
        console.log("after innerHTML")
        //console.log(artist);
    }
})
appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-artist__submit')) {
        const artistName = event.target.parentElement.querySelector(".add-artist__artistName").value;
        const artistImageName = event.target.parentElement.querySelector(".add-artist__artistImageName").value;
        const artistAge = event.target.parentElement.querySelector(".add-artist__artistAge").value;
        const artistHomeTown = event.target.parentElement.querySelector(".add-artist__artistHomeTown").value;
        console.log("after const declarations");
        console.log("artist name = " + artistName);
        console.log("artist image = " + artistImageName);
        console.log("artist age = " + artistAge);
        console.log("artist home = " + artistHomeTown);

        var requestBody = {
            Name: artistName,
            ImageName: artistImageName,
            Age: artistAge,
            HomeTown: artistHomeTown
        }
        console.log("requestBody set");
        console.log(requestBody);
        apiActions.postRequest(
            "https://localhost:44313/api/artist",
            requestBody, 
            newArtists => {
                console.log("artist return from backend");
                console.log(newArtists);
                appDiv.innerHTML = Artists(newArtists);
            }
        )
    }
})
