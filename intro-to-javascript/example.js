function myFunction () {
    var obj = document.getElementById("h01"); //vanilla JavaScript
    obj.innerHTML = "Hello JQuery";
}

function myFunction () {
    $("#h01").html("Hello JQuery"); //JQuery
}

$(document).ready(myFunction); //.ready makes sure page is fully loaded