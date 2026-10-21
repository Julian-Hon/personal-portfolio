const albums = {
  sour: {
    number: 'CASE 01 / 03',
    title: 'SOUR',
    artist: 'Olivia Rodrigo',
    description: 'A debut full of sharp pop-rock and intimate ballads, with every feeling turned all the way up.',
    year: '2021',
    tracks: '11',
    image: 'images/albums/sour.jpg',
    url: 'https://music.apple.com/us/album/sour/1560735414'
  },
  '1989': {
    number: 'CASE 02 / 03',
    title: '1989 (Deluxe Edition)',
    artist: 'Taylor Swift',
    description: 'A bright, synth-driven pop record, with the deluxe edition making more room for the world of 1989.',
    year: '2014',
    tracks: '19',
    image: 'images/albums/1989-deluxe.jpg',
    url: 'https://music.apple.com/us/album/1989-deluxe-edition/1440933512'
  },
  mylo: {
    number: 'CASE 03 / 03',
    title: 'Mylo Xyloto',
    artist: 'Coldplay',
    description: 'A colorful record that mixes big choruses, electronic textures, and a little bit of graffiti-covered escapism.',
    year: '2011',
    tracks: '14',
    image: 'images/albums/mylo-xyloto.jpg',
    url: 'https://music.apple.com/us/album/mylo-xyloto/726372830'
  }
};

const cases = [...document.querySelectorAll('.shelf-album')];
const shelfScroll = document.querySelector('.shelf-scroll');
const emptyState = document.getElementById('details-empty');
const details = document.getElementById('details-content');
let selectedAlbum = null;
let scrollTimer;

cases.forEach((albumCase) => {
  albumCase.addEventListener('click', () => {
    const key = albumCase.dataset.album;
    selectedAlbum = selectedAlbum === key ? null : key;

    cases.forEach((item) => {
      const selected = item.dataset.album === selectedAlbum;
      item.classList.toggle('is-selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });

    emptyState.hidden = selectedAlbum !== null;
    details.hidden = selectedAlbum === null;
    if (shelfScroll.scrollWidth > shelfScroll.clientWidth) {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => shelfScroll.scrollTo({
        left: selectedAlbum ? shelfScroll.scrollWidth - shelfScroll.clientWidth : 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      }), 250);
    }
    if (!selectedAlbum) return;

    const album = albums[selectedAlbum];
    document.getElementById('details-art').src = album.image;
    document.getElementById('details-art').alt = `${album.title} album cover`;
    document.getElementById('details-number').textContent = album.number;
    document.getElementById('details-title').textContent = album.title;
    document.getElementById('details-artist').textContent = album.artist;
    document.getElementById('details-description').textContent = album.description;
    document.getElementById('details-year').textContent = album.year;
    document.getElementById('details-tracks').textContent = album.tracks;
    document.getElementById('details-link').href = album.url;
  });
});
