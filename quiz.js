// I couldn't think of anything else, the function runs once for one of the calls,
// e.g. if the second right one is clicked, the changes only apply to the first one

function loaded(){
    console.log("page has loaded")
}

function showRight(){
    document.getElementById("right").style.color = "green";
    document.getElementById("defright").innerHTML = "Yep";
    alert("Yippee");
}

function showRight2(){
    document.getElementById("right2").style.color = "green";
    document.getElementById("defright2").innerHTML = "Yep";
    alert("Yippee");
}

function showRight3(){
    document.getElementById("right3").style.color = "green";
    document.getElementById("defright3").innerHTML = "Yep";
    alert("Yippee");
}

function showWrong(){
    document.getElementById("wrong").style.color = "red";
    document.getElementById("defwrong").innerHTML = "Nope";
    alert(" :( ");
}

function showWrong2(){
    document.getElementById("wrong2").style.color = "red";
    document.getElementById("defwrong2").innerHTML = "Nope";
    alert(" :( ");
}