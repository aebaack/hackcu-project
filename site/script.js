$(document).ready(() => {
    document.getElementById("searchButton").addEventListener("click", function(){
        console.log("click works");
        sendRequest();
    });

});


function sendRequest(){
    var input = document.getElementById("searchSteamID").value;
    console.log(input);
    $.get("https://hackcu-api.herokuapp.com/user/" + input + "", function(data){
        console.log("succees");
        console.log(data);
        sessionStorage.userObj = JSON.stringify(data);
        window.location.assign("https://hackcu-api.herokuapp.com/UserInfoScreen.html");
    });
    return false;
}

