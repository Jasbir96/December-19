var collection = {
  "2548": {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  "2468": {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  "1245": {
    artist: "Robert Palmer"
  },
  "5439": {
    album: "ABBA Gold"
  }
};

function updateRecords(id, prop, value) {
  if (value == "") {
    // delete
    delete collection[id][prop];
    return;
  }
  if (prop != "tracks") {
    // set / update
    collection[id][prop] = value;
  } else {
    if (collection[id][prop] != undefined) {
      console.log(collection[id][prop]);
      collection[id][prop].push(value);
    } else {
      collection[id][prop] = [value];
      console.log(collection[id][prop])
    }
  }
}
updateRecords(5439, "artist", "ABBA");
updateRecords(2468, "tracks", "song");
updateRecords(5439, "tracks", "Take a Chance on Me"),
  updateRecords(2548, "artist", "");
  console.log(collection);
