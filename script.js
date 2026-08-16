const PASSWORD = "NAINA";

const unlockBtn = document.getElementById("unlockBtn");

unlockBtn.addEventListener("click", checkPassword);

function checkPassword(){

    const input = document.getElementById("password").value.trim();

    const error = document.getElementById("error");

    if(input === PASSWORD)
        {
        document.querySelector(".login-page").style.display = "none";

        showIntro();

    }
    else{

        error.innerHTML="❌ REALLY MY LOVE ";

        error.style.color="#ff6b81";

    }

}
const galleryImages = [
 "IMG_20260105_124341_896.jpg",
 "IMG_20260105_124355_976.jpg",
 "IMG_20260105_124417_727.jpg",
 "IMG_20260105_124432_751.jpg",
 "IMG_20250815_155004_263.jpg",
 "IMG_20250815_155017_178.jpg",
 "IMG_20250815_155035_366.jpg",
 "IMG_20260105_124335_567.jpg"
];

function loadGallery() {

    const gallery = document.getElementById("photoGallery");

    gallery.innerHTML = "";

    galleryImages.forEach((image, index) => {

        const img = document.createElement("img");

        img.src = "photos/" + image;
        img.alt = "Memory " + (index + 1);

        img.addEventListener("click", () => {
            openLightbox(index);
        });

        gallery.appendChild(img);

    });

}

/* ======================
   Floating Hearts
====================== */

function createHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.bottom="-40px";

        heart.style.fontSize=(20+Math.random()*25)+"px";

        heart.style.opacity=Math.random();

        heart.style.pointerEvents="none";

        heart.style.zIndex="999";

        heart.style.transition="transform 8s linear, opacity 8s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform="translateY(-120vh) rotate(360deg)";

            heart.style.opacity="0";

        },50);

        setTimeout(()=>{

            heart.remove();

        },8000);

    },500);

}

/* ======================
   Press ENTER to Unlock
====================== */

document.getElementById("password")
.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        checkPassword();

    }

});
function showIntro(){

    const music = document.getElementById("bgMusic");

  music.play()
    .then(() => {
    console.log("Music started");
    })
    .catch(err => {
    console.error(err);
    });

    const intro = document.createElement("div");

    intro.id = "intro";

    intro.innerHTML = `
        <div class="intro-heart">❤️</div>

        <h1>Every love story is beautiful...</h1>

        <h2>But ours is my favorite.</h2>

        <p>Balozi ❤️ Naifat</p>
    `;

    document.body.appendChild(intro);

    setTimeout(()=>{

        intro.style.opacity="0";

    },5000);

    setTimeout(()=>{

        intro.remove();

        document.getElementById("mainPage").style.display="block";

        loadGallery();
        createHearts();
        createPetals();
        createShootingStar();
        typeLetter();


    },6500);

}
/* ======================
   PHOTO VIEWER
====================== */

const images=document.querySelectorAll(".photos img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightboxImg");

let current = 0;

function openLightbox(index){

    current = index;

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");

    lightbox.style.display = "flex";
    lightboxImg.src = "photos/" + galleryImages[current];

}

function showImage(){

    document.getElementById("lightboxImg").src =
    "photos/" + galleryImages[current];

}

document.getElementById("next").onclick = () => {

    current = (current + 1) % galleryImages.length;

    showImage();

};

document.getElementById("prev").onclick = () => {

    current = (current - 1 + galleryImages.length) % galleryImages.length;

    showImage();

};

document.getElementById("close").onclick = () => {

    document.getElementById("lightbox").style.display = "none";

};
/* ======================
   LOVE TIMER
====================== */

const anniversaryDate = new Date("2024-08-19T00:00:00");

function updateLoveTimer(){

    const now = new Date();

    const diff = now - anniversaryDate;

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor((diff/(1000*60*60))%24);

    const minutes = Math.floor((diff/(1000*60))%60);

    const seconds = Math.floor((diff/1000)%60);

    document.getElementById("loveTimer").innerHTML =
    `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;

}

setInterval(updateLoveTimer,1000);

updateLoveTimer();
/* ======================
   ROSE PETALS
====================== */

function createPetals(){

    setInterval(()=>{

        const petal=document.createElement("div");

        petal.innerHTML="🌹";

        petal.style.position="fixed";

        petal.style.top="-50px";

        petal.style.left=Math.random()*100+"vw";

        petal.style.fontSize=(18+Math.random()*20)+"px";

        petal.style.pointerEvents="none";

        petal.style.zIndex="999";

        petal.style.transition="transform 10s linear, opacity 10s";

        document.body.appendChild(petal);

        setTimeout(()=>{

            petal.style.transform=
            "translateY(120vh) rotate(720deg)";

            petal.style.opacity="0";

        },50);

        setTimeout(()=>{

            petal.remove();

        },10000);

    },700);

}
/* ======================
   SHOOTING STARS
====================== */

function createShootingStar(){

    setInterval(()=>{

        const star=document.createElement("div");

        star.style.position="fixed";
        star.style.width="3px";
        star.style.height="120px";

        star.style.background=
        "linear-gradient(white,transparent)";

        star.style.left=Math.random()*100+"vw";
        star.style.top="-150px";

        star.style.transform="rotate(45deg)";

        star.style.pointerEvents="none";

        star.style.zIndex="998";

        star.style.transition="all 1.5s linear";

        document.body.appendChild(star);

        setTimeout(()=>{

            star.style.top="120vh";
            star.style.left=(Math.random()*100)+"vw";
            star.style.opacity="0";

        },50);

        setTimeout(()=>{

            star.remove();

        },1700);

    },5000);

}
/* ======================
   TYPEWRITER LETTER
====================== */

const letter = `Dear Imma🥰,

Every day with you becomes one of my favorite memories.

Thank you for your love,
your kindness,
and your beautiful heart.

No matter where life takes us,
my heart will always find yours.
It's not been easy but our hearts took it easy and trust,built the strong bond and we pray for our love to prosper until we die. I LOVE YOU🥰

Happy Anniversary ❤️

Yours today,Yours Tomorrow and Forever Yours,

Balozi`;

function typeLetter(){

    const target=document.getElementById("letterText");

    target.innerHTML="";

    let i=0;

    const typing=setInterval(()=>{

        target.innerHTML+=letter.charAt(i);

        i++;

        if(i>=letter.length){

            clearInterval(typing);

        }

    },40);

}
document.getElementById("lightbox").addEventListener("click",function(e){

    if(e.target===this){

        this.style.display="none";

    }

});
