function openNav() {
    document.getElementById("mySidenav").style.width = "12%";
    document.getElementById("content").style.marginLeft = "50px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});



