const songs = [
    { id:11,
        title: "All of Me",
     artist: "John Legend",
      genre: "Pop",
      image: "allofme.jpg",
       duration: 248 ,
       source:"audio1.mp3"
    },
    { 
        id:12,
        title: "Despacito",
     artist: "Luis Fonsi", 
     genre: "Pop",
     image:"dispacho.jpg",
      duration: 279 ,
      source:"audio7.mp3"
    },
    
    { id:13,
        title: "Someone Like You",
     artist: "Adele", 
     image:"someone.jpg",
     genre: "Pop",
      duration: 285 ,
      source:"audio77.mp3"
    
    },
    {
        id:14,
      title: "Thriller",
      artist: "Michael Jackson",
      image:"triller.jpg",
      genre: "Pop",
      duration: 357,
      source:"audio4.mp3"
    },
    {
        id:15,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      image:"BohemianRhapsody.jpg",
      genre: "Rock",
      duration: 354,
      source:"audio5.mp3"
    },
    {
        id:16,
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      image:"StairwaytoHeaven.jpg",
      genre: "Rock",
      duration: 480,
      source:"audio6.mp3"
    },
    {
        id:116,
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      image:"SweetChildO'Mine.jpg",
      genre: "Rock",
      duration: 355,
      source:"audio7.mp3"
    },
    {
        id:17,
      title: "Smells Like Teen Spirit",
      image:"SweetChildO'Mine.jpg",
      artist: "Nirvana",
      genre: "Rock",
      duration: 302,
      source:"audio8.mp3"
    },
    {
        id:18,
      title: "Hotel California",
      image:"hotel.jpg",
      artist: "Eagles",
      genre: "hip-hop",
      duration: 390,
      source:"audio9.mp3"
    },
    {
        id:19,
      title: "Thrash Unreal",
      image:"abc.jpg",
      artist: "Against Me!",
      genre: "hip-hop",
      duration: 292,
      source:"audio10.mp3"
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
        if(playlistName.value.trim()!=="")
        {
          
          let newDiv=document.createElement('div');
          newDiv.className='newDiv';
          
          let addToListbutton=document.createElement('button');
          addToListbutton.className='addToList';
          addToListbutton.textContent=playlistName.value;
          newDiv.appendChild(addToListbutton);
          playlistContainer.appendChild(newDiv);
          playlistName.value='';
        }

      }
        
      playListbtn.addEventListener('click',createPlaylist);
      

function addInsidePlaylist()
{
  let playlistContainer=document.getElementById('playlistContainer');
  let playlistDiv=document.createElement('div');
  playlistDiv.className="playlistDiv";
  var sn=songName.innerHTML.toString();
  playlistDiv.textContent=sn;
  playlistContainer.appendChild(playlistDiv);

}



