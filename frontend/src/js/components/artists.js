export default function Artists(artists){
    return `
        <h1>List of Artists</h1>
        <ul class="artist-collection">
            ${artists.map(artist => {
                return `
                    <li>${artist.name} is ${artist.age} year's old, and from ${artist.homeTown}</li>
                `
            }).join("")}
        </ul>
    `
}