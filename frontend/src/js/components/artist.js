export default function Artist(artist){
    return `
    <h1>${artist.name}</h1>
    <ul>
    ${artist.albums.map(album =>{
        return `
        <li>${album.name}</li>
        `
    }).join("")}
    </ul>
    `
}
