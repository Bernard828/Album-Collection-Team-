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
                    <p> <img src="images/${artist.imageName}" alt="image" style="width:100px; height:100px;"> </p>
                     ${artist.name}</a>
                     </li>
                `
            }).join("")}
        </ul>
    `
}