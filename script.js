const loader = document.getElementById("loader");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const letterBtn = document.getElementById("letterBtn");
const galleryBtn = document.getElementById("galleryBtn");

const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");

const surpriseBtn = document.getElementById("surpriseBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

const typewriter = document.getElementById("typewriter");

const message = `Hey Hrudya ❤️,

Kaay chalu aahe?

Can you believe it's already been two months since you joined HUL? Time really flies.

Mala mahite suruvatila tula khup tension hota. Nawin office, nawin lok, nawin environment...

Pan bagh...

Tu sagla khup chhan handle kelays.

I'm genuinely so proud of you. ❤️

Aaj pan ekach sangnar...

Tension nako gheus.

Jar kahi hi vatla...

Only gyo to me. ❤️

Try to express what you feel.

Please don't keep everything inside.

You have amazing friends there...

And obviously...

You have me.

Always.

Whenever you're stressed...

Just call me.

We'll laugh together.

Because that's when you look the prettiest. ❤️

I hope HUL gives you everything you dream of.

New memories.

New achievements.

Lots of happiness.

And endless reasons to smile.

I love you so much.

Happy Girlfriend's Day ❤️

Forever yours,

❤️ Kaushik`;

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},1800);

});

musicBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="⏸ Pause Music";

}else{

music.pause();

musicBtn.innerHTML="🎵 Play Music";

}

});

letterBtn.addEventListener("click",()=>{

letter.classList.remove("hidden");

letter.scrollIntoView({

behavior:"smooth"

});

startTyping();

});

galleryBtn.addEventListener("click",()=>{

gallery.classList.remove("hidden");

gallery.scrollIntoView({

behavior:"smooth"

});

});

let i=0;

function startTyping(){

typewriter.innerHTML="";

i=0;

type();

}

function type(){

if(i<message.length){

typewriter.innerHTML+=message.charAt(i);

i++;

setTimeout(type,35);

}

}
/* ==========================
   FLOATING HEARTS
========================== */

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    const hearts=["❤️","💖","💕","💗","💞"];

    heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    heart.style.animationDuration=(6+Math.random()*3)+"s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,1000);


/* ==========================
   POPUP
========================== */

surpriseBtn.addEventListener("click",()=>{

    popup.classList.remove("hidden");

});

closePopup.addEventListener("click",()=>{

    popup.classList.add("hidden");

});


popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.classList.add("hidden");

    }

});


/* ==========================
   IMAGE ZOOM
========================== */

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        if(img.classList.contains("zoom")){

            img.classList.remove("zoom");

        }else{

            document.querySelectorAll(".gallery img").forEach(i=>i.classList.remove("zoom"));

            img.classList.add("zoom");

        }

    });

});


/* ==========================
   CONFETTI
========================== */

function celebrate(){

    for(let i=0;i<80;i++){

        const piece=document.createElement("div");

        piece.style.position="fixed";

        piece.style.width="8px";

        piece.style.height="8px";

        piece.style.borderRadius="50%";

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.background=`hsl(${Math.random()*360},100%,60%)`;

        piece.style.pointerEvents="none";

        piece.style.zIndex="99999";

        piece.style.transition="3.5s linear";

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.style.transform=`translateY(${window.innerHeight+100}px) rotate(${Math.random()*720}deg)`;

            piece.style.opacity="0";

        },50);

        setTimeout(()=>{

            piece.remove();

        },3600);

    }

}

surpriseBtn.addEventListener("click",celebrate);


/* ==========================
   AUTO MUSIC
========================== */

document.body.addEventListener("click",()=>{

    if(music.paused){

        music.play().catch(()=>{});

        musicBtn.innerHTML="⏸ Pause Music";

    }

},{once:true});

