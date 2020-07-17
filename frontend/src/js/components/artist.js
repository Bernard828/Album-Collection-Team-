export default function Artist(artist){
    return `
    <h1>${artist.name}</h1>
    <ul>
    ${artist.albums.map(album =>{
        return `
        <li> <a class="album__name" id="${album.id}"  href= "#"> ${album.name} </a> </li>
        `
    }).join("")}
    </ul>
    <section class= "add-album">
        <button class= "add-album__button" Id="${artist.id}">Add Album </button>
        <button class="delete-artist__button" Id="${artist.id}">Delete This Artist</button>
        </section>
    `
}
