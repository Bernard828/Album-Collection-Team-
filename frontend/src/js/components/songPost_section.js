export default function SongPostSection(albumId){
    return `

<input class="add-song__songTitle" type="text" placeholder="Add song Title Here">
<input class="add-song__songDuration" type="text" placeholder="Add Song Duration Here">
<input class="add-song__album" type="text" hidden="true" value="${albumId}">
<button class="add-song__submit">Save song</button>
    `
}