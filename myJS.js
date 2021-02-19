
var btn = document.getElementById("light");
btn.onclick = function(){changelight()}

function changelight(){
    console.log("light");
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementsByTagName("h1")[0].style.color = "#4d4d4d";
    document.getElementsByTagName("p")[0].style.color = "#4d4d4d";
    document.getElementsByTagName("p")[1].style.color = "#4d4d4d";
}

var btn = document.getElementById("dark");
btn.onclick = function(){changedark()}

function changedark(){
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    document.getElementsByTagName("h1")[0].style.color = "white";
    document.getElementsByTagName("p")[0].style.color = "white";
    document.getElementsByTagName("p")[1].style.color = "white";
}


document.getElementById("submitbtn").addEventListener("click", submitcomment);

function submitcomment(){
    var text = document.getElementById("c-input").value;
    document.getElementById("new-com").innerHTML = text;
}

var myVar = setInterval(changecolor,1000);
n = 0
function changecolor(){
    if (n == 0){
        document.getElementById("current").style.backgroundColor = "red";
        n = 1;
    }
    else {
        document.getElementById("current").style.backgroundColor = "#0883c9";
        n = 0;
    }
}

