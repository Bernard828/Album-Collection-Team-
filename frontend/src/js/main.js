import Header from "./components/header";
import Footer from "./components/footer";
import Artists from "./components/Artists";
import Artist from "./components/Artist";
import Albums from "./components/Albums";
import apiActions from "./api/apiActions";
import ArtistPostSection from "./components/artistPost_section";
import AlbumPostSection from "./components/albumPost_section";
import Album from "./components/album";
import SongPostSection from "./components/songPost_section";
import AlbumEditSection from "./components/albumPost_section";

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

function navArtist(artistId, artistName) {
    const variableButtonElement = document.querySelector('.nav__variable');
    variableButtonElement.removeAttribute("hidden");
    variableButtonElement.innerHTML = artistName;
    variableButtonElement.addEventListener('click', function () {
        const endpoint = `https://localhost:44313/api/artist/${artistId}`;
        const callBack = artist => {
            appDiv.innerHTML = Artist(artist);
            albumNameButton();
            console.log("before setAttribute");
            variableButtonElement.setAttribute("hidden", "true");
            console.log("after setAttribute");
        };
        apiActions.getRequest(endpoint, callBack); 
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
            const artistEndpoint = `https://localhost:44313/api/artist/${artistId}`;
            const artistCallback = artist => {
                appDiv.innerHTML = Artist(artist);
                albumNameButton(artistId, artist.name);
            };
            apiActions.getRequest(artistEndpoint, artistCallback);
        })
    })
}
function albumNameButton(artistId, artistName) {
    const albumNameElement = document.querySelectorAll('.album__name');
    //console.log(artistNameButton);
    albumNameElement.forEach(element => {
        element.addEventListener('click', function () {
            const albumId = element.id;
            console.log("Album clicked");
            console.log(albumId);
            const endpoint = `https://localhost:44313/api/album/${albumId}`;
            const callBack = album => {
                appDiv.innerHTML = Album(album);
                navArtist(artistId, artistName);
            };
            apiActions.getRequest(endpoint, callBack);
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
    //console.log("add artist button click");
    //const addArtistSection = document.querySelector('.add-artist');
    //console.log(addArtistSection);
    if (event.target.classList.contains('add-artist__button')) {
        const addArtistSection = document.querySelector('.add-artist');
        console.log(addArtistSection);
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
    //console.log("add artist submit click");
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
                artistNameButton();
            }
        )
    }

})
appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-album__button')) {
        console.log("add album button click");
        const addAlbumSection = document.querySelector('.add-album');
        const artistId = event.target.parentElement.querySelector(".add-album__button").id;
        console.log(addAlbumSection);
        console.log("artistId=" + artistId);

        addAlbumSection.innerHTML = AlbumPostSection(artistId);
        console.log("after innerHTML")
    }
})
appDiv.addEventListener('click', function () {
    //console.log("add album submit click");
    if (event.target.classList.contains('add-album__submit')) {
        console.log("in If");
        const albumName = event.target.parentElement.querySelector(".add-album__albumName").value;
        const albumImageName = event.target.parentElement.querySelector(".add-album__albumImageName").value;
        const albumReleaseYear = event.target.parentElement.querySelector(".add-album__releaseYear").value;
        const albumRecordLabel = event.target.parentElement.querySelector(".add-album__recordLabel").value;
        const albumGenre = event.target.parentElement.querySelector(".add-album__albumGenre").value;
        const artistId = event.target.parentElement.querySelector(".add-album__artistId").value;
        console.log("artistID=" + artistId);
        var requestBody = {
            Name: albumName,
            ImageName: albumImageName,
            ReleaseYear: albumReleaseYear,
            RecordLabel: albumRecordLabel,
            Genre: albumGenre,
            ArtistId: artistId
        }
        console.log(requestBody);

        const artistCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/artist/${artistId}`,
                artist => {
                    console.log("In callback");
                    console.log(artist);
                    appDiv.innerHTML = Artist(artist);
                    albumNameButton();
                })
            
        }

        apiActions.postRequest(
            "https://localhost:44313/api/album",
            requestBody,
            artistCallback
        )
    }
})
appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-song__button')) {
        console.log("add song button click");
        const addSongSection = document.querySelector('.add-song');
        const albumId = event.target.parentElement.querySelector(".add-song__button").id;
        console.log(addSongSection);
        console.log("albumId=" + albumId);

        addSongSection.innerHTML = SongPostSection(albumId);
        console.log("after innerHTML")
    }
})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-song__submit')) {
        console.log("add song submit click");
        const songTitle = event.target.parentElement.querySelector(".add-song__songTitle").value;
        const songDuration = event.target.parentElement.querySelector(".add-song__songDuration").value;
        const albumId = event.target.parentElement.querySelector(".add-song__albumId").value;
        console.log(songTitle);
        console.log(songDuration);
        console.log("albumID=" + albumId);
        console.log("before request body");
        var requestBody = {
            Title: songTitle,
            Duration: songDuration,
            AlbumId: albumId
        }
        console.log(requestBody);

        const albumCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/album/${albumId}`,
                album => {
                    console.log("In callback");
                    console.log(album);
                    appDiv.innerHTML = Album(album);
                })
            
        }

        apiActions.postRequest(
            "https://localhost:44313/api/song",
            requestBody,
            albumCallback
        )
    }
})

appDiv.addEventListener('click', function(){
    if(event.target.classList.contains('delete-album__button')){
        console.log("inside delete album")
        const albumId = event.target.parentElement.querySelector('.delete-album__button').id;
        const artistId = event.target.parentElement.querySelector('.artistId').value;
        console.log(albumId);
        console.log(artistId);

        const artistCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/artist/${artistId}`,
                artist => {
                    console.log("In callback");
                    console.log(artist);
                    appDiv.innerHTML = Artist(artist);
                    albumNameButton();
                })
            
        }

        apiActions.deleteRequest(
            `https://localhost:44313/api/album/${albumId}`,
            artistCallback
        )
    }
})
appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('edit-album__button')) {
        const albumId = event.target.parentElement.querySelector('edit-album__button').id;
        const artistId = event.target.parentElement.querySelector('.artistId').value;
        console.log(album.id)
        console.log(artist.id)        
        apiActions.getRequest(
            `https://localhost:44313/api/album/${albumId}` ,
            albumEdit => {
                console.log(albumEdit);
                appDiv.innerHTML = AlbumEditSection(albumEdit);
            }
        )
    }
})

appDiv.addEventListener("click", function () {
    if (event.target.classList.contain('edit-album__submit')) {
        const albumName = event.target.parentElement.querySelector('.edit-album__albumName').value;
        const imageName = event.target.parentElement.querySelector('.edit-album__albumImageName').value;
        const releaseYear = event.target.parentElement.querySelector('.edit-album__releaseYear').value;
        const recordLabel = event.target.parentElement.querySelector('.edit-album__recordLabel').value;
        const genre = event.target.parentElement.querySelector('.edit-album__albumGenre').value;
        const artistId = event.target.parentElement.querySelector('.edit-album__artistId').value;

        const albumEdit = {
            Name: albumName,
            ImageName: imageName,
            ReleaseYear: releaseYear,
            RecordLabel: recordLabel,
            Genre: genre,
            ArtistId: artistId
        };
        console.log(albumEdit)
        const artistCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/artist/${artistId}`,
                artist => {
                    console.log("In callback");
                    console.log(artist);
                    appDiv.innerHTML = Artist(artist);
                    albumNameButton();
                })
        }
        apiActions.putRequest(
            `https://localhost:44313/api/album/${albumId}`,
            albumEdit,
            artistCallback
        )
    }
})
