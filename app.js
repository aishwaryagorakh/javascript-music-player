const songs = [
    { id:11,
        title: "All of Me",
     artist: "John Legend",
      genre: "Pop",
      image: "allofme.jpg",
       duration: 248 ,
       source:"song1.mp3"
    },
    { 
        id:12,
        title: "Despacito",
     artist: "Luis Fonsi", 
     genre: "Pop",
     image:"dispacho.jpg",
      duration: 279 ,
      source:"song1.mp3"
    },
    
    { id:13,
        title: "Someone Like You",
     artist: "Adele", 
     image:"someone.jpg",
     genre: "Pop",
      duration: 285 ,
      source:"song1.mp3"
    
    },
    {
        id:14,
      title: "Thriller",
      artist: "Michael Jackson",
      image:"triller.jpg",
      genre: "Pop",
      duration: 357,
      source:"song1.mp3"
    },
    {
        id:15,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      image:"BohemianRhapsody.jpg",
      genre: "Rock",
      duration: 354,
      source:"song1.mp3"
    },
    {
        id:16,
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      image:"StairwaytoHeaven.jpg",
      genre: "Rock",
      duration: 480,
      source:"song1.mp3"
    },
    {
        id:16,
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      image:"SweetChildO'Mine.jpg",
      genre: "Rock",
      duration: 355,
      source:"song1.mp3"
    },
    {
        id:17,
      title: "Smells Like Teen Spirit",
      image:"SweetChildO'Mine.jpg",
      artist: "Nirvana",
      genre: "Rock",
      duration: 302,
      source:"song1.mp3"
    },
    {
        id:18,
      title: "Hotel California",
      image:"hotel.jpg",
      artist: "Eagles",
      genre: "hip-hop",
      duration: 390,
      source:"song1.mp3"
    },
    {
        id:19,
      title: "Thrash Unreal",
      image:"abc.jpg",
      artist: "Against Me!",
      genre: "hip-hop",
      duration: 292,
      source:"song1.mp3"
    },
    
  ];

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


      function createPlaylist()
      {
        let playlistContainer=document.getElementById('playlistContainer');
        let playlistName=document.getElementById("playlistName");
        if(playlistName.value.trim()!=="")
        {
          
          let newDiv=document.createElement('div');
          newDiv.className='newDiv';
          
          let h3=document.createElement('h3');
          h3.className='h3';
          h3.textContent=playlistName.value;
          newDiv.appendChild(h3);
          playlistContainer.appendChild(newDiv);
          playlistName.value='';
        }

      }
        
      playListbtn.addEventListener('click',createPlaylist);
      










      // const playlists = [];
      
      // function createPlaylist() {
      //   const playlistNameInput = document.getElementById('songSearch');
      //   const playlistName = playlistNameInput.value.trim();
      
      //   if (playlistName !== '') {
      //     const playlist = {
      //       name: playlistName,
      //       songs: [],
      //     };
      
      //     playlists.push(playlist);
      //     displayPlaylists();
      //   }
      
      //   playlistNameInput.value = ''; // Clear input field after creating playlist
      // }
      
      // function addToPlaylist() {
      //   const selectedPlaylistElement = document.getElementById('playlistSongs');
      //   const selectedPlayList=Array.from(selectedPlaylistElement.children).indexOf(event.target);
      //   const selectedSong = songs[currentSongIndex];
      
      //   if (selectedPlaylistIndex !== undefined) {
      //     playlists[selectedPlaylistIndex].songs.push(selectedSong.title);
      //     displayPlaylists();
      //   }
      // }
      
      // function displayPlaylists() {
      //   const playlistSection = document.getElementById('playlistSongs');
      //   playlistSection.innerHTML = '';
      
      //   playlists.forEach((playlist, index) => {
      //     const playlistDiv = document.createElement('div');
      //     playlistDiv.textContent = playlist.name;
      
      //     playlistDiv.addEventListener('click', () => {
      //       // Implement logic to load and display songs of the selected playlist
      //       console.log(`Displaying songs of playlist: ${playlist.name}`);
      //     });
      
      //     playlistSection.appendChild(playlistDiv);
      //   });
      // }
      
      // // Attach event listeners
      // document.getElementById('createPlaylist').addEventListener('click', createPlaylist);
      // document.getElementById('add-btn').addEventListener('click', addToPlaylist);



// function addToPlaylist(){


  //     // for(var i=0;i<10; i++)
  //     // {
  //       // debugger;
  //       // if(!document.getElementById("PlayList"+i.toString()))
  //       // {
  //         let playListSong=document.getElementById('playlistSongs');
  //         //let createPlaylist=document.getElementById('createPlaylist');
  //         let songSearch=document.getElementById('songSearch');
  //         if(songSearch.value.trim() !== "")
  //         {
  //         let unorderList=document.createElement('ul');
  //         unorderList.textContent=songSearch.value;
  //         unorderList.className= "song-list";
  //        // unorderList.id="PlayList"+i.toString();
  //         unorderList.style.fontSize = "25px";
  //         unorderList.addEventListener("click",GetClickedPlayListItem)
  //         playListSong.appendChild(unorderList);

  //         songSearch.value = "";
  //         }
       
  //     }
  //    }
  // }

  // function callMe(){
  //   debugger;
  //   var ulList=document.getElementById('PlayList1');
  //   let songName=document.getElementById('song-name');
  //   var sn = songName.innerText.toString();
  //   var li = document.createElement("li");
  //   li.style.fontSize = "20px";
  //   li.textContent = sn;
  
  //   ulList.appendChild(li);
  // }

  // addBtn.addEventListener('click',callMe);

  // const selectedPlayList = "";
  // function GetClickedPlayListItem()
  // {
    

  // }

