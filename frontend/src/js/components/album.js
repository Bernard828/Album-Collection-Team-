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
`
}