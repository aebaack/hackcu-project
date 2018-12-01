$(document).ready(() => {
    document.getElementById("searchButton").addEventListener("click", function(){
        console.log("click works");
        var input = document.getElementById("searchSteamID").value;
        console.log(input);
        $.get("https://hackcu-api.herokuapp.com/user/" + input + "", function(data){
            console.log("succees");
            console.log(data);
            localStorage.setItem('userObj', JSON.stringify(data));
        });
    });
});

