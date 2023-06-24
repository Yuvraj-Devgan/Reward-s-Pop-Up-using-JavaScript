let box = document.getElementById("box");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

function exit(){
    box.style.display = "none";
    box2.style.display = "flex";
}
function exit2(){
    box2.style.display = "none";
    box3.style.display = "flex";
}
function exit3(){
    box3.style.display = "none";
    alert("If you delete all these Rewards, then you'll not be able to get this.");
}