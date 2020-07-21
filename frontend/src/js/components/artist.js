export default function Artist(artist) {
    return `
    <h1>${artist.name}</h1>
     <ul class="album-collection">
        ${artist.albums.map(album => {
        return `
                <li>
                   <p> <img src="images/morrisonHotel.jpg" alt="image"> </p>
                    <a class="album__name" id="${album.id}"  href= "#"> ${album.name} </a> 
                    <ul>
                    <li> ${album.releaseYear} </li>
                    <li> ${album.recordLabel} </li>
                    <li> ${album.genre} </li>
                     </ul>
                </li>
            `
    }).join("")}
    </ul>
    <section class= "add-album">
        <button class= "add-album__button" Id="${artist.id}">Add Album </button>
        <button class="delete-artist__button" Id="${artist.id}">Delete This Artist</button>
        </section>
    `
}
