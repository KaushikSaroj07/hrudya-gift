const loader = document.getElementById("loader");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const letterBtn = document.getElementById("letterBtn");
const memoryBtn = document.getElementById("memoryBtn");
const celebrateBtn = document.getElementById("celebrate");
const surpriseBtn = document.getElementById("surpriseBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const typewriter = document.getElementById("typewriter");
const message = `Hey Hrudya ❤️,

Kaay chalu aahe?

Can you believe it's already been two months since you joined HUL? Time really flies.

Mala mahite suruvatila tula khup tension hota. Nawin office, nawin lok, nawin environment... everything was new.

Pan bagh, tu sagla kiti chhan handle kelays. I'm really proud of you. ❤️

Aaj pan ekach sangnar...

Tension nako gheus.

Jar kahi hi vatla, kahi share karaycha asel, kiwa fakta konashi bolaycha mood asel...

Only gyo to me. ❤️

Please don't keep everything inside.

Express what you feel.

You know you have amazing friends there...

And obviously, you have me. Always.

Be patient with yourself.

You don't have to be perfect every day.

You're learning, growing, and becoming stronger with every passing day.

And honestly...

Seeing you smile after a long day makes my whole day better.

So whenever you're stressed...

Just call me.

Let's talk, laugh, or simply sit together on a video call.

Because that's when you look the prettiest. ❤️✨

I hope HUL gives you everything you dream of—

New experiences,
Great friends,
Success,
Confidence,
And lots of happy memories.

No matter where life takes us...

I'll always be your biggest supporter.

I'm so proud of you, Hrudya.

I love you more than words can express.

Forever yours,

❤️ Kaushik`;

window.onload = () => {
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
    }, 2500);
};

musicBtn.onclick = () => {

    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "⏸ Pause";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Music";
    }

};

letterBtn.onclick = () => {

    letter.classList.remove("hidden");

    letter.scrollIntoView({
        behavior: "smooth"
    });

    typeWriter();

};

memoryBtn.onclick = () => {

    gallery.classList.remove("hidden");

    gallery.scrollIntoView({
        behavior: "smooth"
    });

};

let i = 0;

function typeWriter() {

    typewriter.innerHTML = "";

    i = 0;

    function write() {

        if (i < message.length) {

            typewriter.innerHTML += message.charAt(i);

            i++;

            setTimeout(write, 35);

        }

    }

    write();

}
// Floating Hearts

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["❤️","💖","💕","💗","💞"][Math.floor(Math.random()*5)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (18 + Math.random()*25) + "px";

    heart.style.animationDuration = (6 + Math.random()*5) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },11000);

}

setInterval(createHeart,400);


// Surprise Popup

surpriseBtn.addEventListener("click", function () {
    popup.style.display = "flex";
});

closePopup.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    popup.style.display = "none";
});

};


// Celebrate Button

celebrateBtn.onclick = () => {

    createConfetti();

};


// Confetti

function createConfetti(){

    for(let i=0;i<180;i++){

        const piece=document.createElement("div");

        piece.style.position="fixed";

        piece.style.width="10px";

        piece.style.height="10px";

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.borderRadius="50%";

        piece.style.background=`hsl(${Math.random()*360},100%,60%)`;

        piece.style.zIndex="9999";

        piece.style.pointerEvents="none";

        piece.style.transition="4s linear";

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.style.transform=`translateY(${window.innerHeight+200}px)
            rotate(${Math.random()*720}deg)`;

            piece.style.opacity="0";

        },20);

        setTimeout(()=>{

            piece.remove();

        },4200);

    }

}


// Image Click Zoom

document.querySelectorAll(".grid img").forEach(img=>{

    img.onclick=()=>{

        if(img.style.transform==="scale(1.5)"){

            img.style.transform="";

            img.style.zIndex="";

            img.style.position="";

        }else{

            img.style.transform="scale(1.5)";

            img.style.zIndex="999";

            img.style.position="relative";

        }

    }

});


// Auto Play Music After First Tap

document.body.addEventListener("click",()=>{

    if(music.paused){

        music.play().catch(()=>{});

        musicBtn.innerHTML="⏸ Pause";

    }

},{once:true});

