$(document).ready(() => {
    document.getElementById("searchButton").addEventListener("click", function(){
        sendRequet();
    });

});


function sendRequest(){
    const input = document.getElementById("searchSteamID").value;

    if (input) {
        $.get("https://hackcu-api.herokuapp.com/user/" + input + "", function(data){
    
            localStorage.removeItem('userObj');
            localStorage.setItem('userObj', JSON.stringify(data));
    
            window.location.assign("https://hackcu-api.herokuapp.com/UserInfoScreen.html");
        });
    }
}

