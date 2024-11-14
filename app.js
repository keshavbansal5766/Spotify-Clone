let music = new Audio("audio/1.mp3");
// music.play();

const songs = [
  {
    id: 1,
    songName: ` On My Way <br />
    <div class="subtitle">Alan Walker</div>`,
    poster: "img/1.jpg",
  },
  {
    id: 2,
    songName: ` Alan walker-Fade <br />
    <div class="subtitle">Alan Walker</div>`,
    poster: "img/2.jpg",
  },
  {
    id: 3,
    songName: ` Cartoon - on & on <br />
    <div class="subtitle">Daniel Levi</div>`,
    poster: "img/3.jpg",
  },
  {
    id: 4,
    songName: `Warriyo - Mortals <br />
    <div class="subtitle">Mortals</div>`,
    poster: "img/4.jpg",
  },
  {
    id: 5,
    songName: `Ertugrul Gazi <br />
    <div class="subtitle">Ertugrul</div>`,
    poster: "img/5.jpg",
  },
  {
    id: 6,
    songName: `Electronic Music <br />
    <div class="subtitle">Alan Walker</div>`,
    poster: "img/6.jpg",
  },
  {
    id: 7,
    songName: `Agar Tum Sath Ho <br />
    <div class="subtitle">Tamashaa</div>`,
    poster: "img/7.jpg",
  },
  {
    id: 8,
    songName: `Suna Hai <br />
    <div class="subtitle">Neha Kakkar</div>`,
    poster: "img/8.jpg",
  },
  {
    id: 9,
    songName: `Dilber <br />
    <div class="subtitle">Satyameva Jayate</div>`,
    poster: "img/9.jpg",
  },
  {
    id: 10,
    songName: `Duniya <br />
    <div class="subtitle">Luka Chuppi</div>`,
    poster: "img/10.jpg",
  },
  {
    id: 11,
    songName: `Lagdi Lahore Di <br />
    <div class="subtitle">Street Dancer 3</div>`,
    poster: "img/11.jpg",
  },
  {
    id: 12,
    songName: `Putt Jatt Da <br />
    <div class="subtitle">Putt Jatt Da</div>`,
    poster: "img/12.jpg",
  },
  {
    id: 13,
    songName: `Baarishein <br />
    <div class="subtitle">Atif Aslam</div>`,
    poster: "img/13.jpg",
  },
  {
    id: 14,
    songName: `Vaaste <br />
    <div class="subtitle">Dhvani Bhanushali</div>`,
    poster: "img/14.jpg",
  },
  {
    id: 15,
    songName: `Lut Gaye <br />
    <div class="subtitle">Jubin Nautiyal</div>`,
    poster: "img/15.jpg",
  },
  {
    id: 16,
    songName: `Tu Meri Jindagi Hai Tu <br />
    <div class="subtitle">Jubin Nautiyal</div>`,
    poster: "img/16.jpg",
  },
  {
    id: 17,
    songName: `Batao Yaad Hai Tumko Wo Jab Dil Ko Churaya Tha <br />
    <div class="subtitle">Rahat Fateh Ali Khan</div>`,
    poster: "img/17.jpg",
  },
  {
    id: 18,
    songName: `Mera Dhol Judaiyan <br />
    <div class="subtitle">Ali Sethi Gill</div>`,
    poster: "img/18.jpg",
  },
  {
    id: 19,
    songName: `Eh Munde Pagal Ne Saare <br />
    <div class="subtitle">AP Dhillon</div>`,
    poster: "img/19.jpg",
  },
  {
    id: 20,
    songName: `Dunny 82K <br />
    <div class="subtitle">Ap Dhillon, Gurinder</div>`,
    poster: "img/20.jpg",
  },
];

const makeAllPlays = () => {
  Array.from(playListPlay).forEach((e) => {
    e.classList.add("bi-play-circle-fill");
    e.classList.remove("bi-pause-circle-fill");
  });
};

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((e) => {
    e.style.background = "rgb(105, 105, 105, 0)";
  });
};

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById("master-play");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

let index = 0;
const playListPlay = document.getElementsByClassName("playListPlay");
const poster = document.getElementById("poster-master-play");
const title = document.getElementById("title");

Array.from(playListPlay).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    music.src = `audio/${index}.mp3`;
    poster.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((obj) => {
      return obj.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105, 105, 105, 0.1)";
    // makeAllPlays()
    el.target.classList.add("bi-pause-circle-fill");
    el.target.classList.remove("bi-play-circle-fill");
    wave.classList.add("active1");
  });
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let currTime = music.currentTime;
  let currDuration = music.duration;

  let durationEndMin = Math.floor(currDuration / 60);
  let durationEndSec = Math.floor(currDuration % 60);

  if (durationEndSec < 10) {
    durationEndSec = `0${durationEndSec}`;
  }
  currentEnd.innerText = `${durationEndMin}:${durationEndSec}`;

  let durationStartMin = Math.floor(currTime / 60);
  let durationStartSec = Math.floor(currTime % 60);

  if (durationStartSec < 10) {
    durationStartSec = `0${durationStartSec}`;
  }
  currentStart.innerText = `${durationStartMin}:${durationStartSec}`;

  let progressBar = parseInt((currTime / currDuration) * 100);
  seek.value = progressBar;
  // console.log(seek.value);
  let seekBar = seek.value;
  bar2.style.width = `${seekBar}%`;
  dot.style.left = `${seekBar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

let volIcon = document.getElementById("vol-icon");
let vol = document.getElementById("vol");
let volBar = document.getElementsByClassName("vol-bar")[0];
let volDot = document.getElementById("vol-dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    volIcon.classList.remove("bi-volume-up-fill");
    volIcon.classList.remove("bi-volume-down-fill");
    volIcon.classList.add("bi-volume-mute-fill");
  }

  if (vol.value > 0) {
    volIcon.classList.remove("bi-volume-up-fill");
    volIcon.classList.add("bi-volume-down-fill");
    volIcon.classList.remove("bi-volume-mute-fill");
  }

  if (vol.value > 50) {
    volIcon.classList.add("bi-volume-up-fill");
    volIcon.classList.remove("bi-volume-down-fill");
    volIcon.classList.remove("bi-volume-mute-fill");
  }

  let volA = vol.value;
  volBar.style.width = `${volA}%`;
  volDot.style.left = `${volA}%`;
  music.volume = volA / 100
  console.log(music.volume);
});

const back = document.getElementById('back')
const next = document.getElementById('next')

back.addEventListener('click', () => {
  index -= 1
  if(index < 1) {
    index = Array.from(document.getElementsByClassName('songItem')).length
  }
  music.src = `audio/${index}.mp3`;
    poster.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((obj) => {
      return obj.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105, 105, 105, 0.1)";
    // makeAllPlays()
    el.target.classList.add("bi-pause-circle-fill");
    el.target.classList.remove("bi-play-circle-fill");
    wave.classList.add("active1");
})

next.addEventListener('click', () => {
  index += 1
  if(index > Array.from(document.getElementsByClassName('songItem')).length) {
    index = 1
  }

  music.src = `audio/${index}.mp3`;
    poster.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((obj) => {
      return obj.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105, 105, 105, 0.1)";
    // makeAllPlays()
    el.target.classList.add("bi-pause-circle-fill");
    el.target.classList.remove("bi-play-circle-fill");
    wave.classList.add("active1");
})

const download = document.getElementById('download-music')

// download.addEventListener('click', (e) => {
//  e.music.download
// })


const popSongLeft = document.getElementById("pop-song-left");
const popSongRight = document.getElementById("pop-song-right");
const popSong = document.getElementsByClassName("pop-song")[0];

popSongRight.addEventListener("click", () => {
  popSong.scrollLeft += 330;
});

popSongLeft.addEventListener("click", () => {
  popSong.scrollLeft -= 330;
});

const popArtLeft = document.getElementById("pop-art-left");
const popArtRight = document.getElementById("pop-art-right");
const popArt = document.getElementsByClassName("items")[0];

popArtRight.addEventListener("click", () => {
  popArt.scrollLeft += 330;
});

popArtLeft.addEventListener("click", () => {
  popArt.scrollLeft -= 330;
});
