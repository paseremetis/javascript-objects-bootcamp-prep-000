var playlist = {
 artistName: "Phil Ochs",
 songTitle: "Here's to the State of Mississippi"
};
function updatePlaylist(playlist, artistName, songTitle)
Object.assign({}, playlist, {artistName: "Phil Ochs"})

Object.assign({}, playlist, {songTitle: "Here's to the State of Mississippi"})