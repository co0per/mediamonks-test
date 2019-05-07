const stages_text = [
    {
        main_text: "WE ARE BREAKING OUR VOW OF SILENCE",
        tiny_text: "In January 2011, after a decade of digital, we opened the doors to our temple. Follow our noble eightfold path to digital enlightenment here."
    },
    {
        main_text: "TALENT IS GIVEN TRUE SKILLS IS EARNED",
        tiny_text: "Step 1 out of 8 on the path to digital enlightenment."
    },
    {
        main_text: "BE FLEXIBLE TO CHANGE AND STURDY IN CONVICTION",
        tiny_text: "Step 2 out of 8 on the path to digital enlightenment."
    },
    {
        main_text: "USE MANY SKILLS YET WORK AS ONE",
        tiny_text: "Step 3 out of 8 on the path to digital enlightenment."
    },
    {
        main_text: "TO MASTER ANYTHING FIND INTEREST IN ANYTHING",
        tiny_text: "Step 4 out of 8 on the path to digital enlightenment."
    },
    {
        main_text: "INDIVIDUALS FLOURISH IF CULTURE AND WIDSOM ARE SHARED",
        tiny_text: "Step 5 out of 8 on the path to digital enlightenment."
    },
    {
        main_text: "TRAIN FOR PERFECTION BUT AIM FOR MORE",
        tiny_text: "Step 6 out of 8 on the path to digital enlightenment."
    },
    {
        main_text: "TAKE PRIDE IN YOUR WORK BUT DO NOT SEEK PRAISE",
        tiny_text: "Step 7 out of 8 on the path to digital enlightenment."
    },
    {
        main_text: "TEMPORARY SACRIFICE BRINGS LASTING RESULTS",
        tiny_text: "Step 8 out of 8 on the path to digital enlightenment."
    },
    {
        main_text: "BECOME A MONK",
        tiny_text: ""
    },
];

let load_screen = document.getElementById("load-screen");
let slide_screen = document.getElementById("slide-screen");

setTimeout(() => {
    slide_screen.style.display = "block"
    setTimeout(() => {
        load_screen.style.display = "none";
        slide_screen.style.opacity = "1";
    }, 1000);
}, 3000);

let background_img = document.getElementById("background");
let forward_button = document.getElementById("forward-button");
let backward_button = document.getElementById("backward-button");
let final_info = document.getElementById("final-info");
let slide_stage_displayer = document.getElementById("slide-stage-displayer");
let big_text = document.getElementById("big-text");
let tiny_text = document.getElementById("tiny-text");
let slide_index = 0;

forward_button.innerText = ">";
backward_button.innerText = "<";

backward_button.onclick = function() { 
    slide_index--;
    slide_staging(slide_index);
};
forward_button.onclick = function() { 
    slide_index++;
    slide_staging(slide_index); 
};

function slide_staging(i) {
    slide_index = i;
    update_text();
    slide_background();
    fill_slide_stage_displayer();
    display_buttons();
}

update_text();

function update_text() {
    big_text.style.opacity = tiny_text.style.opacity = "0";
    document.getElementById("final-info").style.opacity = "0";

    setTimeout(() => {
        big_text.innerText = stages_text[slide_index].main_text;
        big_text.className = `bt${slide_index}`;
    
        tiny_text.innerHTML  = stages_text[slide_index].tiny_text;
        if(slide_index == stages_text.length - 1){
            document.getElementById("final-info").style.opacity = "1";
        }
        tiny_text.className = `tt${slide_index}`;
    
        big_text.style.opacity = tiny_text.style.opacity = "1";
    }, 1000);
}

function slide_background() {
    const distance = (background_img.width/stages_text.length) * (-slide_index);
    background_img.style.transform = `translate(${distance}px)`;
}

/* Shows or hides back/forward buttons deppending on the slide index/stage */
function display_buttons() {
    switch(slide_index) {
        case 0:
            backward_button.style.display = "none";
            forward_button.style.display = "inline-block";
            break;
        case 9:
            backward_button.style.display = "inline-block";
            forward_button.style.display = "none";
            break;
        default:
            backward_button.style.display = "inline-block";
            forward_button.style.display = "inline-block";
    }
}

/* Create slide stage displayer selectors */
for (let i = 0; i < stages_text.length; i++) {
    let node = document.createElement("DIV");
    node.className = "ssd-inner-box";

    if(i == 0 || i == 9){
        node.style.color = "rgba(0,0,0,0)"; 
    }

    node.onclick = function() { slide_staging(i) };
    const textnode = document.createTextNode(i);
    node.appendChild(textnode);
    slide_stage_displayer.appendChild(node);
}

fill_slide_stage_displayer();

/* Fills the background of the selected stage in the displayer */
function fill_slide_stage_displayer() {
    let ssd_inner_box = document.getElementsByClassName("ssd-inner-box");
    for (let i = 0; i < ssd_inner_box.length; i++) {
        ssd_inner_box[i].style.background = "none";
    }
    ssd_inner_box[slide_index].style.background = "white";
}