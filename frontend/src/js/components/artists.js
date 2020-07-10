export default function Artists(artists){
    return `
        <h1>List of Artist</h1>
        <ol>
            ${artists.map(artist => {
                return `
                    <li>${artist.name} is ${artist.age} year's old, and from ${artist.homeTown}</li>
                `
            }).join("")}
        </ol>
    `
}