const music = new Audio('songs/10.mp3')

// create Array

const songs=[
    {
        id:'1',
        songName:`On My Way <br>
        <div class="subtitle">Alan walker</div>`,
        poster:"images/1.jpg"
    },
    {
        id:'2',
        songName:`Ali-Moula-Ali... <br>
        <div class="subtitle">Amjad-Baltistani</div>`,
        poster:"images/2.jpg"
    },
    {
        id:'3',
        songName:`Dua-e-Dega koe.. <br>
        <div class="subtitle">Amjad-Baltistani</div>`,
        poster:"images/3.jpg"
    },
    {
        id:'4',
        songName:`Tere-Darbar mai... <br>
        <div class="subtitle">Indian</div>`,
        poster:"images/4.jpg"
    },
    {
        id:'5',
        songName:`Noker-ho-logo... <br>
        <div class="subtitle">Muzammil-Nagri</div>`,
        poster:"images/5.jpg"
    },
    {
        id:'6',
        songName:`Tumhe-Dil-Lagi.. <br>
        <div class="subtitle">Nusrat-Fateh</div>`,
        poster:"images/6.jpg"
    },
    {
        id:'7',
        songName:`Tumhe-Dil-Lagi... <br>
        <div class="subtitle">Fateh Ali Khan</div>`,
        poster:"images/7.jpg"
    },
    {
        id:'8',
        songName:`Simple-Tune <br>
        <div class="subtitle">Simple-Tune </div>`,
        poster:"images/8.jpg"
    },
    {
        id:'9',
        songName:`Tune<br>
        <div class="subtitle">Alan walker</div>`,
        poster:"images/9.jpg"
    },
    {
        id:'10',
        songName:`Kaise-JiyonGa-Ka<br>
        <div class="subtitle">Indian Singer</div>`,
        poster:"images/10.jpg"
    },
    {
        id:'11',
        songName:`Tere-Jane-ka-Gam... <br>
        <div class="subtitle">Arjith-Singh</div>`,
        poster:"images/11.jpg"
    },
    {
        id:'12',
        songName:`Alan Walker-Fade <br>
        <div class="subtitle">Alan walker</div>`,
        poster:"images/12.jpg"
    },
    {
        id:'13',
        songName:`Teri-ankhon-ki-d... <br>
        <div class="subtitle">Rahat-fateh-Ali</div>`,
        poster:"images/13.jpg"
    },
    {
        id:'14',
        songName:`Tune <br>
        <div class="subtitle">Sub_Tunes</div>`,
        poster:"images/14.jpg"
    },
    {
        id:'15',
        songName:`Alan Walker-Fade <br>
        <div class="subtitle">Alan walker</div>`,
        poster:"images/15.jpg"
    },
    {
        id:'16',
        songName:`Alan Walker-Fade <br>
        <div class="subtitle">Alan walker</div>`,
        poster:"images/15.jpg"
    },
    {
        id:'17',
        songName:`Alan Walker-Fade <br>
        <div class="subtitle">Alan walker</div>`,
        poster:"images/15.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element,e)=>{
    element.getElementsByTagName('img')[0].src=songs[e].poster
    element.getElementsByTagName('h5')[0].innerHTML=songs[e].songName
})


let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementsByClassName('wave')[0]


masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime<=0) {
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        wave.classList.add('active2')
    } else {
        music.pause()
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        wave.classList.remove('active2')
    }
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle')
        element.classList.remove('fa-pause-circle')
    })  
}
const makeAllBackgrounds = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
        element.style.background = "none";
    })  
}


let index = 0;
let poster_master_play= document.getElementById('poster_master_play')
let title= document.getElementById('title')
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index=e.target.id;
        makeAllPlays();
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        music.src=`songs/${index}.mp3`
        poster_master_play.src=`images/${index}.jpg`;
        music.play()

        let songTitle=songs.filter((ele)=>{
            return(ele.id==index)
        })

        songTitle.forEach(ele=>{
            let {songName}=ele;
            title.innerHTML=songName
        })

        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        wave.classList.add('active2')

        // music.addEventListener("ended",()=>{
        //     masterPlay.classList.add('fa-play');
        //     masterPlay.classList.remove('fa-pause');
        //     wave.classList.remove('active2')
        // })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})



let currentStart = document.getElementById('currentStart')
let currentEnd = document.getElementById('currentEnd')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60)
    let sec = Math.floor(music_dur%60)
    if (sec<10) {
        sec=`0${sec}`
    }
    currentEnd.innerHTML=`${min}:${sec}`

    let min1 = Math.floor(music_curr/60)
    let sec1 = Math.floor(music_curr%60)
    if (sec1<10) {
        sec1=`0${sec1}`
    }
    currentStart.innerHTML=`${min1}:${sec1}`


    let progressBar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressBar;
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;
})

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100
})

music.addEventListener('ended',()=>{
    masterPlay.classList.add('fa-play');
    masterPlay.classList.remove('fa-pause');
    wave.classList.remove('active2')
})



let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change',()=>{
    if (vol.value==0) {
        vol_icon.classList.remove('fa-volume-down')
        vol_icon.classList.add('fa-volume-mute')
        vol_icon.classList.remove('fa-volume-up')
    }
    if (vol.value > 0) {
        vol_icon.classList.add('fa-volume-down')
        vol_icon.classList.remove('fa-volume-mute')
        vol_icon.classList.remove('fa-volume-up')
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('fa-volume-down')
        vol_icon.classList.remove('fa-volume-mute')
        vol_icon.classList.add('fa-volume-up')
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100
})


let back = document.getElementById('back')
let next = document.getElementById('next')

back.addEventListener('click',()=>{
    index-=1;
    if (index < 1) {
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src=`songs/${index}.mp3`
    poster_master_play.src=`images/${index}.jpg`;
    music.play()

    let songTitle=songs.filter((ele)=>{
        return(ele.id==index)
    })

    songTitle.forEach(ele=>{
        let {songName}=ele;
        title.innerHTML=songName
    })

    makeAllPlays();
    document.getElementById(`${index}`).classList.remove('fa-play');
    document.getElementById(`${index}`).classList.add('fa-pause');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
});

next.addEventListener('click',()=>{
    index-=0;
    index+=1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1
    }

    music.src=`songs/${index}.mp3`
    poster_master_play.src=`images/${index}.jpg`;
    music.play()

    let songTitle=songs.filter((ele)=>{
        return(ele.id==index)
    })

    songTitle.forEach(ele=>{
        let {songName}=ele;
        title.innerHTML=songName
    })

    makeAllPlays();
    document.getElementById(`${index}`).classList.remove('fa-play');
    document.getElementById(`${index}`).classList.add('fa-pause');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click',()=>{
    pop_song.scrollLeft -=330
})
right_scroll.addEventListener('click',()=>{
    pop_song.scrollLeft +=330
});

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click',()=>{
    item.scrollLeft -=330
})
right_scrolls.addEventListener('click',()=>{
    item.scrollLeft +=330
})