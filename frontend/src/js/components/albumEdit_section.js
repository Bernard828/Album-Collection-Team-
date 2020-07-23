export default function AlbumEditSection(artistId, album) {
    return `
    
    <input class="edit-album__albumName" type="text" value="${album.name}">
    <input class="edit-album__albumImageName" type="text" hidden="true" value="${album.imageName}">
    <input class="edit-album__releaseYear" type="text" value="${album.releaseYear}">
    <input class="edit-album__recordLabel" type="text" value="${album.recordLabel}">
    <input class="edit-album__albumGenre" type="text" value="${album.genre}">
    <input class="edit-album__artistId" type="text" hidden="true" value="${artistId}">
    <input class="edit-album__albumId" type="text" hidden="true" value="${album.id}">
    <button class="edit-album__submit">Save Album Changes</button>
        `
}