export default function Artists(artists){
    return `
        <h1>List of Artists</h1>
        <section class= "add-artist">
        <button class= "add-artist__button">Add Artist </button>
        </section>
        <ul class="artist-collection">
            ${artists.map(artist => {
                return `
                    <li>
                    <a class="artist__name" id="${artist.id}" href="#"> 
                    <p> <img src="images/jovi.jpg" alt="image"> </p>
                     ${artist.name}</a>
                     </li>
                `
            }).join("")}
        </ul>
    `
}