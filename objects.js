var playlist = {
 artistName: "Phil Ochs",
 songTitle: "Here's to the State of Mississippi"
};
function updatePlaylist(playlist, artistName, songTitle){
  return ({"Phil Ochs": "Here's to the State of Mississippi"})
}
 Object.assign({}, playlist, {artistName: "Phil Ochs"})

  Object.assign({}, playlist, {songTitle: "Here's to the State of Mississippi"})
  function removeFromPlaylist(playlist, artistName){
    var Kanye = {playlist: "Gold Digger", artistName: "Kanye"};
    delete playlist.artistName;
    delete playlist.songTitle;
  }