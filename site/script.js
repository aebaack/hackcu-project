$(document).ready(() => {
    document.getElementById("searchButton").addEventListener("click", function(){
        console.log("click works");
        $.get("https://www.google.com", function(){
            console.log("succees");
        });
    });
});

