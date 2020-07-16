    export default function AlbumPostSection(artistId){
        return `
    
    <input class="add-album__albumName" type="text" placeholder="Add Album Here">
    <input class="add-album__albumImageName" type="text" placeholder="Add Image Here">
    <input class="add-album__releaseYear" type="text" placeholder="Release Year">
    <input class="add-album__recordLabel" type="text" placeholder="Record Label">
    <input class="add-album__albumGenre" type="text" placeholder="Add Genre Here">
    <input class="add-album__artistId" type="text" hidden="true" value="${artistId}">
    <button class="add-album__submit">Save Album</button>
        `
    }