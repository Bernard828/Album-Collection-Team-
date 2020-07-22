export default function Album(album) {
    return `
  <h1>${album.name}</h1>
    <ol class="song-collection">
    ${album.songs.map(song => {
        return `
        <li>${song.title} -- ${song.duration}</li>
        `
    }).join("")}
    </ol>    
    <section class= "add-song">
    <button class= "add-song__button" Id="${album.id}">Add Song </button>
    <button class="delete-album__button" Id="${album.id}">Delete This Album</button>
    <button class="edit-album__button" Id="${album.id}"> Edit This Album</button>
    <input class="artistId" type="hidden" value="${album.artistId}"> 
    </section>
`
}