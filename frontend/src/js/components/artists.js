export default function Artists(artists){
    return `
        <h1>List of Artist</h1>
        <ol>
            ${artist.map(artist => {
                return `
                    <li>${artist.name} is ${artist.age} year's old, and from ${artist.homeTowm}</li>
                `
            })}
        </ol>
    `
}