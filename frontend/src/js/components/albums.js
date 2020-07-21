export default function Albums(albums){
    return `
        <h1>List of Albums</h1>
        <ul class="album-collection">
            ${albums.map(album => {
                return `
                    <li><a class="album__name" id="${album.id}" href="#"> <img src="images/jovi.jpg" alt="image"> ${album.artist.name}</a></li>
                `
            }).join("")}
        </ul>
    `
}