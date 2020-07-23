import Header from "./components/header";
import Footer from "./components/footer";
import Artists from "./components/Artists";
import Artist from "./components/Artist";
import apiActions from "./api/apiActions";
import ArtistPostSection from "./components/artistPost_section";
import AlbumPostSection from "./components/albumPost_section";
import Album from "./components/album";
import SongPostSection from "./components/songPost_section";
import AlbumEditSection from "./components/albumEdit_section";
import SongEditSection from "./components/songEdit_section";

const appDiv = document.querySelector('.app');

export default function pageBuild() {
    header();
    footer();
    navHome();
    showArtists();
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
            artistNameButton();
        })
        .catch(err => console.log(err))
}

function artistNameButton() {
    const artistNameElement = document.querySelectorAll('.artist__name');
    artistNameElement.forEach(element => {
        element.addEventListener('click', function () {
            const artistId = element.id;
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
    albumNameElement.forEach(element => {
        element.addEventListener('click', function () {
            const albumId = element.id;
            const endpoint = `https://localhost:44313/api/album/${albumId}`;
            const callBack = album => {
                appDiv.innerHTML = Album(album);
            };
            apiActions.getRequest(endpoint, callBack);
        })
    })
}

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-artist__button')) {
        const addArtistSection = document.querySelector('.add-artist');
        addArtistSection.innerHTML = ArtistPostSection();
    }
})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-artist__submit')) {
        const artistName = event.target.parentElement.querySelector(".add-artist__artistName").value;
        const artistImageName = event.target.parentElement.querySelector(".add-artist__artistImageName").value;
        const artistAge = event.target.parentElement.querySelector(".add-artist__artistAge").value;
        const artistHomeTown = event.target.parentElement.querySelector(".add-artist__artistHomeTown").value;

        var requestBody = {
            Name: artistName,
            ImageName: artistImageName,
            Age: artistAge,
            HomeTown: artistHomeTown
        }

        apiActions.postRequest(
            "https://localhost:44313/api/artist",
            requestBody,
            newArtists => {
                appDiv.innerHTML = Artists(newArtists);
                artistNameButton();
            }
        )
    }

})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-album__button')) {
        const addAlbumSection = document.querySelector('.add-album');
        const artistId = event.target.parentElement.querySelector(".add-album__button").id;
        addAlbumSection.innerHTML = AlbumPostSection(artistId);
    }
})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-album__submit')) {
        const albumName = event.target.parentElement.querySelector(".add-album__albumName").value;
        const albumImageName = event.target.parentElement.querySelector(".add-album__albumImageName").value;
        const albumReleaseYear = event.target.parentElement.querySelector(".add-album__releaseYear").value;
        const albumRecordLabel = event.target.parentElement.querySelector(".add-album__recordLabel").value;
        const albumGenre = event.target.parentElement.querySelector(".add-album__albumGenre").value;
        const artistId = event.target.parentElement.querySelector(".add-album__artistId").value;
        
        var requestBody = {
            Name: albumName,
            ImageName: albumImageName,
            ReleaseYear: albumReleaseYear,
            RecordLabel: albumRecordLabel,
            Genre: albumGenre,
            ArtistId: artistId
        }

        const artistCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/artist/${artistId}`,
                artist => {
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
        const addSongSection = document.querySelector('.add-song');
        const albumId = event.target.parentElement.querySelector(".add-song__button").id;
        addSongSection.innerHTML = SongPostSection(albumId);
    }
})

appDiv.addEventListener('click', function () {
    if (event.target.classList.contains('add-song__submit')) {
        const songTitle = event.target.parentElement.querySelector(".add-song__songTitle").value;
        const songDuration = event.target.parentElement.querySelector(".add-song__songDuration").value;
        const albumId = event.target.parentElement.querySelector(".add-song__albumId").value;
        var requestBody = {
            Title: songTitle,
            Duration: songDuration,
            AlbumId: albumId
        }

        const albumCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/album/${albumId}`,
                album => {
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
        const albumId = event.target.parentElement.querySelector('.delete-album__button').id;
        const artistId = event.target.parentElement.querySelector('.artistId').value;

        const artistCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/artist/${artistId}`,
                artist => {
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
        const editAlbumSection = document.querySelector('.edit-album');
        const albumId = event.target.parentElement.querySelector('.edit-album__button').id;
        const artistId = event.target.parentElement.querySelector('.artistId').value;
        apiActions.getRequest(
            `https://localhost:44313/api/album/${albumId}` ,
            albumEdit => {
                editAlbumSection.innerHTML = AlbumEditSection(artistId,albumEdit);
            }
        )
    }
})

appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('edit-album__submit')) {
        const albumId = event.target.parentElement.querySelector('.edit-album__albumId').value;
        const albumName = event.target.parentElement.querySelector('.edit-album__albumName').value;
        const imageName = event.target.parentElement.querySelector('.edit-album__albumImageName').value;
        const releaseYear = event.target.parentElement.querySelector('.edit-album__releaseYear').value;
        const recordLabel = event.target.parentElement.querySelector('.edit-album__recordLabel').value;
        const genre = event.target.parentElement.querySelector('.edit-album__albumGenre').value;
        const artistId = event.target.parentElement.querySelector('.edit-album__artistId').value;

        const albumEdit = {
            id: albumId,
            Name: albumName,
            ImageName: imageName,
            ReleaseYear: releaseYear,
            RecordLabel: recordLabel,
            Genre: genre,
            ArtistId: artistId
        };

        const artistCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/artist/${artistId}`,
                artist => {
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

appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('nav-artist-return__button')){
        const artistId = event.target.parentElement.querySelector(".nav-artist-return__button").id;
        const endpoint = `https://localhost:44313/api/artist/${artistId}`;
        const callBack = artist => {
            appDiv.innerHTML = Artist(artist);
            albumNameButton();
        };
        apiActions.getRequest(endpoint, callBack); 
    }
})

appDiv.addEventListener("click", function (){
    if (event.target.classList.contains('delete-song__button')){
        const songId = event.target.parentElement.querySelector(".delete-song__button").id;
        const albumId = event.target.parentElement.querySelector(".delete-song__button").value;
        const endpoint = `https://localhost:44313/api/song/${songId}`;
        const albumCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/album/${albumId}`,
                album => {
                    appDiv.innerHTML = Album(album);
                })
        }
        apiActions.deleteRequest(endpoint, albumCallback);
    }
})

appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('update-song__button')) {
        const editSongSection =  document.querySelector('.edit-song');
        const songId = event.target.parentElement.querySelector('.update-song__button').id;
        const albumId = event.target.parentElement.querySelector('.update-song__button').value;
        apiActions.getRequest(
            `https://localhost:44313/api/song/${songId}` ,
            songEdit => {
                editSongSection.innerHTML = SongEditSection(songEdit, albumId);
            }
        )
    }
})

appDiv.addEventListener("click", function () {
    if (event.target.classList.contains('edit-song__submit')) {
        const songId = event.target.parentElement.querySelector(".edit-song__songId").value;
        const albumId = event.target.parentElement.querySelector('.edit-song__albumId').value;
        const songTitle = event.target.parentElement.querySelector('.edit-song__songTitle').value;
        const songDuration = event.target.parentElement.querySelector('.edit-song__songDuration').value;
        const songEdit = {
            id: songId,
            Title: songTitle,
            Duration: songDuration,
            AlbumId: albumId
        };

        const albumCallback = () => {
            apiActions.getRequest(
                `https://localhost:44313/api/album/${albumId}`,
                album => {
                    appDiv.innerHTML = Album(album);
                    albumNameButton();
                })
        }

        apiActions.putRequest(
            `https://localhost:44313/api/song/${songId}`,
            songEdit,
            albumCallback
        )
    }
})