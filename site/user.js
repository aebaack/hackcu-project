userObj = JSON.parse(localStorage.getItem('userObj'));

$(document).ready(() => {
  $('#user-name').text(userObj.user.nickname);
  $('#avatar').attr('src', userObj.user.avatar.large);
});