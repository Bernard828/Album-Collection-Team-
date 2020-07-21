export default function Artists(artists){
    return `
        <h1>List of Artists</h1>
        <ul class="artist-collection">
            ${artists.map(artist => {
                return `
                    <li><a class="artist__name" id="${artist.id}" href="#"> <img src="images/jovi.jpg" alt="image"> ${artist.name}</a></li>
                `
            }).join("")}
        </ul>
        <section class= "add-artist">
        <button class= "add-artist__button">Add Artist </button>
        </section>
    `
}