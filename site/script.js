$(document).ready(() => {
    document.getElementById("searchButton").addEventListener("click", function(){
        console.log("click works");
        $.get("http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=440&format=xml", function(data){
            console.log("succees");
            console.log(data);
        });
    });
});

