// Question 40: Album: Create objects for music albums.

type Album = {
    artist: string;
    title: string;
    tracks?: number;
};

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist: artist, title: title };

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

let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);

// Question 42: Great Magicians: Add "the Great" to magician names.

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians);
show_magicians(magicians);
