// Orientacion para fotografias

enum photoOrientation {
    landscape = 0,
    portrait = 1,
    square = 2,
    panorama = 3
}

const landscape: photoOrientation = photoOrientation.landscape;
console.log('landscape ', landscape);
console.log('Landscape', photoOrientation[landscape]);


enum PictureOrientation {
    landscape = 10,
    portrait,
    square,
    panorama 
}

console.log('portrait', PictureOrientation.landscape);

enum Country{
    Bolivia = 'Bol',
    Colombia = 'Col'
}

const country: Country = Country.Colombia;
console.log('country', country);