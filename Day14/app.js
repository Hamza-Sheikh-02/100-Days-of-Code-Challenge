"use strict";
// Question 40: Album: Create objects for music albums.
function make_album(artist, title, tracks) {
    let album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album('Linkin Park', 'Meteora');
let album2 = make_album('Ed Sheeran', '÷ (Divide)', 16);
let album3 = make_album('Taylor Swift', '1989', 8);
console.log(album1);
console.log(album2);
console.log(album3);
// Question 41: Magicians: Display magician names from an array.
let magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
// Question 42: Great Magicians: Add "the Great" to magician names.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);
show_magicians(magicians);
