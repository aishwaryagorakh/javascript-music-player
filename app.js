const songs = [
    { id:11,
        title: "All of Me",
     artist: "John Legend",
      genre: "Pop",
      image: "allofme.jpg",
       duration: 248 ,
       source:"audio/audio1.mp3"
    },
    { 
        id:12,
        title: "Despacito",
     artist: "Luis Fonsi", 
     genre: "Pop",
     image:"dispacho.jpg",
      duration: 279 ,
      source:"audio/audio7.mp3"
    },
    
    { id:13,
        title: "Someone Like You",
     artist: "Adele", 
     image:"someone.jpg",
     genre: "Pop",
      duration: 285 ,
      source:"audio/audio77.mp3"
    
    },
    {
        id:14,
      title: "Thriller",
      artist: "Michael Jackson",
      image:"triller.jpg",
      genre: "Pop",
      duration: 357,
      source:"audio/audio4.mp3"
    },
    {
        id:15,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      image:"BohemianRhapsody.jpg",
      genre: "Rock",
      duration: 354,
      source:"audio/audio5.mp3"
    },
    {
        id:16,
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      image:"StairwaytoHeaven.jpg",
      genre: "Rock",
      duration: 480,
      source:"audio/audio6.mp3"
    },
    {
        id:116,
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      image:"SweetChildO'Mine.jpg",
      genre: "Rock",
      duration: 355,
      source:"audio/audio7.mp3"
    },
    {
        id:17,
      title: "Smells Like Teen Spirit",
      image:"SweetChildO'Mine.jpg",
      artist: "Nirvana",
      genre: "Rock",
      duration: 302,
      source:"audio/audio8.mp3"
    },
    {
        id:18,
      title: "Hotel California",
      image:"hotel.jpg",
      artist: "Eagles",
      genre: "hip-hop",
      duration: 390,
      source:"audio/audio9.mp3"
    },
    {
        id:19,
      title: "Thrash Unreal",
      image:"abc.jpg",
      artist: "Against Me!",
      genre: "hip-hop",
      duration: 292,
      source:"audio/audio10.mp3"
    },
    
  ];

  // toggle section

 const toggleBtn=document.querySelector('#checkbox');

 toggleBtn.addEventListener('change',()=>{
  if(toggleBtn.checked){
    document.body.classList.add('dark-theme');
  }
  else{
    document.body.classList.remove('dark-theme');
  }
 });




  const cplaylist=[];

//   all song section

  function filterSongs() {
    const selectedGenre = document.getElementById('genreSelect').value;
    const filteredSongs =
     selectedGenre === 'all' ? songs : songs.filter(song => song.genre === selectedGenre);

    displaySongs(filteredSongs);
  }

  function displaySongs(songsToDisplay) {
    const songListElement = document.getElementById('songList');
    songListElement.innerHTML = '';

    songsToDisplay.forEach(song => {
      const li = document.createElement('li');
      li.textContent = song.title;
    //   songListElement.appendChild(li);
     li.addEventListener('click',()=>loadSong(song));
     songListElement.appendChild(li);
    });
  }
  filterSongs();

  // song card section

    const audio = document.getElementById('audio');
    const songInfo = document.getElementById('song-info');
    const albumArt = document.getElementById('album-art');
    const songName = document.getElementById('song-name');
    const artist = document.getElementById('artist');
    const playlist = document.getElementById('playlist');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const addBtn=document.getElementById('add-btn');
    const playListbtn=document.getElementById('playListbtn');
  
    let currentSongIndex = 0;

    function loadSong(song) {
      
      audio.src = song.source;
      albumArt.src = song.image;
      songName.textContent = song.title;
      artist.textContent = song.artist;
    }

    function playPreviousSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(songs[currentSongIndex]);
        audio.play();
      }
  
      function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(songs[currentSongIndex]);
        audio.play();
      }
      prevBtn.addEventListener('click', playPreviousSong);
      nextBtn.addEventListener('click', playNextSong);
     
   
      loadSong(songs[currentSongIndex]);

      //  playlist section

      function createPlaylist()
       {
         let playlistContainer=document.getElementById('playlistContainer');
         let playlistName=document.getElementById("playlistName");
         let abc=playlistName.value;
        if(playlistName.value.trim()!=="")
        {
          
          const playlistElement = document.createElement('div');
          playlistElement.classList.add('playlist');
          playlistElement.innerHTML = `
              <h3>${abc}</h3>
              <ul class="playlist-songs"></ul>
              <button class="delete-btn">Delete Playlist</button>
          `;
          playlistContainer.appendChild(playlistElement);

          savePlaylists();

          playlistName.value="";


     }}

  function  savePlaylists(){
    let playlists=document.querySelectorAll('.playlist h3');
    playlistArray=Array.from(playlists).map(playlist=>playlist.textContent);
    localStorage.setItem('playlists',JSON.stringify(playlistArray));
  }

  function loadPlaylists() {
    const savedPlaylists = JSON.parse(localStorage.getItem('playlists'));
    if (savedPlaylists) {
        savedPlaylists.forEach(playlistName => {
            const playlistElement = document.createElement('div');
            playlistElement.classList.add('playlist');
            playlistElement.innerHTML = `
                <h3>${playlistName}</h3>
                <ul class="playlist-songs"></ul>
                <button class="delete-btn">Delete Playlist</button>
            `;
            playlistContainer.appendChild(playlistElement);
        });
    }
}


window.addEventListener('load', loadPlaylists);

// Function to delete playlist
function deletePlaylist(event) {
  const playlistElement = event.target.closest('.playlist');
  if (playlistElement) {
      playlistElement.remove();
      savePlaylists();
  }
}

// Event listener for deleting playlist
playlistContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
      deletePlaylist(event);
  }
});

// Function to add current song to selected playlist
function addToPlaylist() {
  const selectedPlaylist = prompt('Select a playlist to add the song to:');
  if (selectedPlaylist === null) return; // User clicked cancel

  // Find the playlist element
  const playlistElements = document.querySelectorAll('.playlist h3');
  let playlistElement;
  for (let i = 0; i < playlistElements.length; i++) {
      if (playlistElements[i].textContent === selectedPlaylist) {
          playlistElement = playlistElements[i].parentNode;
          break;
      }
  }

  if (!playlistElement) {
      alert('Playlist not found!');
      return;
  }

  // Add the song to the selected playlist
  const songTitle = songs[currentSongIndex].title;
  const songArtist = songs[currentSongIndex].artist;
  const playlistSongs = playlistElement.querySelector('.playlist-songs');
  const li = document.createElement('li');
  li.textContent = `${songTitle} - ${songArtist}`;
  playlistSongs.appendChild(li);

  // Save playlists to local storage
  savePlaylists();
}

// Attach event listeners to each "Add to Playlist" button
const addToPlaylistButtons = document.querySelectorAll('.add-to-playlist-btn');
addToPlaylistButtons.forEach(button => {
  button.addEventListener('click', addToPlaylist);
});






