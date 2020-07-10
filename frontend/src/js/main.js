import Artists from "./components/Artists";
//navArtist();
console.log(Artists);

function navArtist() {
    const artistButton = document.querySelector('.nav__artist');
    artistButton.addEventListener('click', function(){
        fetch("https://localhost:44393/api/artist")
        .then(response => response.json())
        .then(artists => {
            //appDiv.innerHTML = Artist(artist);
            console.log(Artists);

        })
        .catch(err => console.log(err))
        // appDiv.innerHTML = Artist(artist);
    })
}