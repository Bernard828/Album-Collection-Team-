export default function Album(album) {
    return `
  <h1>${album.name}</h1>
    <ul>
    ${album.songs.map(song => {
        return `
        <li>${song.title}</li>
        `
    }).join("")}
    </ul>    
    <section class= "add-song">
    <button class= "add-song__button" Id="${album.id}">Add Song </button>
    <button class="delete-album__button" Id="${album.id}">Delete This Album</button>
    </section>
`
}