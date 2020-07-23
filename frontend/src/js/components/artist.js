export default function Artist(artist) {
    return `
    <h1>${artist.name}</h1>
     <ul class="album-collection">
        ${artist.albums.map(album => {
        return `
                <li>
                   <p> <img src="images/${album.imageName}" alt="image"> </p>
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
        </section>
    `
}
