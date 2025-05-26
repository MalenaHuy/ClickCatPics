// alert("HELLO FROM APP.JS!");

// list of the data variable. starts from 0
var pics =[
    "imgs/1.jpg",
    "imgs/2.jpg",
    "imgs/3.png",
    "imgs/4.png",
    "imgs/5.png"
]

// btn named whatever you want
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

// want to run something if I click; everyting the the {} will runs if i click
btn.addEventListener("click", function(){
    // Loop from 0 to 6; only run if counter is exactly 6
    if (counter ===5){
        counter = 0;
    }
    // alert("clicked!")
    //chang the sources 
    img.src = pics [counter]
    counter = counter + 1;

});
