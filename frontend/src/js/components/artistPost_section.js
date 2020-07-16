export default function ArtistPostSection() {
    return `
    <input class="add-artist__artistName" type="text" placeholder="Add Artist Here">
    <input class="add-artist__artistImageName" type="text" placeholder="Add Image Here">
    <input class="add-artist__artistAge" type="text" placeholder="Age of the Artist">
    <input class="add-artist__artistHomeTown" type="text" placeholder="Where's the Artist from">
        <button class="add-artist__submit">Save Artist</button>
    `
}