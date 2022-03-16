let white1 = document.querySelector("#white-1");
let white2 = document.querySelector("#white-2");
let white3 = document.querySelector("#white-3");
let white4 = document.querySelector("#white-4");
let white5 = document.querySelector("#white-5");
let white6 = document.querySelector("#white-6");
let white7 = document.querySelector("#white-7");

let bkey1 = document.querySelector("#b-key1");
let bkey2 = document.querySelector("#b-key2");
let bkey3 = document.querySelector("#b-key3");
let bkey4 = document.querySelector("#b-key4");
let bkey5 = document.querySelector("#b-key5");




white1.addEventListener("click",function() {
    var audio = new Audio("notes/A.mp3");
    audio.play();
});

white2.addEventListener("click",function() {
    var audio = new Audio("notes/B.mp3");
    audio.play();
});

white3.addEventListener("click",function() {
    var audio = new Audio("notes/C.mp3");
    audio.play();
});

white4.addEventListener("click",function() {
    var audio = new Audio("notes/D.mp3");
    audio.play();
});

white5.addEventListener("click",function() {
    var audio = new Audio("notes/E.mp3");
    audio.play();
});

white6.addEventListener("click",function() {
    var audio = new Audio("notes/F.mp3");
    audio.play();
});

white7.addEventListener("click",function() {
    var audio = new Audio("notes/G.mp3");
    audio.play();
});

bkey1.addEventListener("click",function() {
    var audio = new Audio("notes/Ab.mp3");
    audio.play();
})
bkey2.addEventListener("click",function() {
    var audio = new Audio("notes/Bb.mp3");
    audio.play();
})
bkey3.addEventListener("click",function() {
    var audio = new Audio("notes/Db.mp3");
    audio.play();
})
bkey4.addEventListener("click",function() {
    var audio = new Audio("notes/Eb.mp3");
    audio.play();
})
bkey5.addEventListener("click",function() {
    var audio = new Audio("notes/Gb.mp3");
    audio.play();
})


document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyZ') {
      var audio = new Audio("notes/A.mp3");
      audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyX') {
      var audio = new Audio("notes/B.mp3");
      audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyC') {
      var audio = new Audio("notes/C.mp3");
      audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyV') {
      var audio = new Audio("notes/D.mp3");
      audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyB') {
      var audio = new Audio("notes/E.mp3");
      audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyN') {
      var audio = new Audio("notes/F.mp3");
      audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyM') {
      var audio = new Audio("notes/G.mp3");
      audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyA') {
      var audio = new Audio("notes/Ab.mp3");
      audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyS') {
      var audio = new Audio("notes/Bb.mp3");
      audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyD') {
      var audio = new Audio("notes/Db.mp3");
      audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyF') {
      var audio = new Audio("notes/Eb.mp3");
      audio.play();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyG') {
      var audio = new Audio("notes/Gb.mp3");
      audio.play();
    }
});