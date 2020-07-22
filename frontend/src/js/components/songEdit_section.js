export default function SongEditSection(song, albumId){
    return `

<input class="edit-song__songTitle" type="text" value="${song.title}">
<input class="edit-song__songDuration" type="text" value="${song.duration}">
<input class="edit-song__songId" type="text" hidden="true" value="${song.id}">
<input class="edit-song__albumId" type="text" hidden="true" value="${albumId}">
<button class="edit-song__submit">Update song</button>
    `
}