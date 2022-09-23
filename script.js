
function validation(){
  var form = document.getElementById('form');
  var email = document.getElementById('email').value;
  var text = document.getElementById('text');

  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
