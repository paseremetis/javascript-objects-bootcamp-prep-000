var playlist = {
 artistName: "Phil Ochs",
 songTitle: "Here's to the State of Mississippi"
};
function updatePlaylist(playlist, artistName, songTitle)
Object.assign({}, playlist, {artist: "Phil Ochs"})

Object.assign({}, playlist, {songtitle: "Here's to the State of Mississippi"})