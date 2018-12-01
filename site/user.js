userObj = JSON.parse(localStorage.getItem('userObj'));

$(document).ready(() => {
  $('#user-name').text(userObj.user.nickname);
  $('#avatar').attr('src', userObj.user.avatar.large);
  $('#steamID').text(userObj.user.steamID);
  $('#accountDate').text(userObj.user.created)
});