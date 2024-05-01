alert("Happy TamaGotcha Day! You just adopted your first TamaGotchi. Now, let's keep it alive!")
const tamaGotchaName = document.querySelector("thename");

let egg = prompt("Congratulations! You have a beautiful baby egg ^.^ Let's give the baby a name", "");

/* need to remove background from Gif egg*/
const nightTime = "linear-gradient(to bottom, #0c0fa8, #37073a, #2e2c2d)";
const dayTime = "linear-gradient(to bottom, #480ca8, #b5179e, #FF6BDB)";


const sleepButton = document.querySelector("#sleeps")
const awakeButton1 = document.querySelector("#awake1");
const awakeButton2 = document.querySelector("#awake2");

const audio1 = document.querySelector('#audioPlayer1');
const audio2 = document.querySelector('#audioPlayer2');

let hungerNum = document.querySelector('#hungerNum');
let sleepinessNum = document.querySelector('#sleepinessNum');
let boredomNum = document.querySelector('#boredomNum'); 
let ageNum = document.querySelector("#ageNum");

let fox1 = document.querySelector('#fox1');
let fox2 = document.querySelector('#fox2');
let fox3 = document.querySelector('#fox3');

let hunger = 0; 
let sleepiness = 0;
let boredom = 0; 
let age = 0;


if(egg ==''){
    prompt("TamaGotchis need love. If you won't give them a name, please try another game.", "");
    tamaGotchaName.innerHTML = egg;
}

// tamaGotchaName.innerHTML = egg;

const buttons = [{
    name: "hunger",
    "button function": ["feedPet"]
}, { 
    name: "sleepiness", 
    "button function": ["sleepPet"]
}, {
    name: "boredom",
    "button function": ["playPet"]
}
]


function feedPet(){
    hunger--;
    age += 0.25;
    hungerNum.innerText = hunger;
    ageNum.innerText = age; 
};

function sleepPet(){ 
    sleepiness--; 
    age +=0.25; 
    sleepinessNum.innerText = sleepiness; 
    ageNum.innerText = age; 
};

function playPet(){
    boredom--; 
    age += 0.25; 
    boredomNum.innerText = boredom; 
    ageNum.innerText = age; 
}


// function petDeath (){ 
//     if (ageNum > 10){
//         alert("Grief is the cost of love. Thank you for loving your tamagotchi for such a long time. It's in a better place now."
//         ); 
//     } else if (hungerNum > 10){ 
//         alert("Your tamagotchi died of hunger X.X"); 
//     } else if (boredomNum > 10){
//         alert("Time Management would've been good here. Your tamagotchi died of boredom");
//     } else if (sleepinessNum > 10){
//         alert("Why are you up so late all the time? Your tamagotchi died from lack of sleep.")
//     }
// };


egg.hidden=false;

let timer1 = setInterval(function(){
    morph();
}, 5000); 

function morph (){  
    console.log(age)
    if (age>=5){ 
        egg.hidden=true;
        fox1.hidden=false; 
        fox2.hidden=true;
        fox3.hidden=true;
        console.log("fox1");
    } 
};

let timer2 = setInterval(function(){
    morph2();
    age++
}, 10000);

    function morph2 (){
        console.log(age)
       if (age>=10){
        egg.hidden=true;
        fox1.hidden=true; 
        fox2.hidden=false;
        fox3.hidden=true;
 } 
};

let timer3 = setInterval(function(){
    morph3();
}, 15000);
    function morph3 (){
        console.log(age)
       if (age>=15){
        egg.hidden=true;
        fox1.hidden=true; 
        fox2.hidden=true;
        fox3.hidden=false;
};
    }
// 
audio1.play()

document.body.style.background = dayTime; 
function changeBackgroundColorForSleep() {
    document.body.style.background = nightTime; 
    audio1.pause()
    audio2.play()
}

function changeBackgroundColorForAwake() {
    document.body.style.background = dayTime; 
    audio1.play()
    audio2.pause()
}
sleepButton.addEventListener("click", changeBackgroundColorForSleep);
awakeButton1.addEventListener("click", changeBackgroundColorForAwake);
awakeButton2.addEventListener("click", changeBackgroundColorForAwake);



// class Tamagotchi{
//     constructor (name) {
//         this.name = name; 
//         this.hunger = 0;
//         this.sleepiness = 0; 
//         this.boredom = 0; 
//         this.age = 0; 
        
//     }
// }


// audio2.hidden=true;
// audio1.hidden=true;
// audio1.play();


// audio2.autoplay=false;



