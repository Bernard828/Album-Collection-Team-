export default function Artists(artists){
    return `
        <h1>List of Artists</h1>
        <ul class="artist-collection">
            ${artists.map(artist => {
                return `
                    <li><a href="#"> <img src="images/jovi.jpg" alt="image"> ${artist.name}</li>
                `
            }).join("")}
        </ul>
    `
}