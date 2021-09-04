var patt = /[a-z0-9._%+-]+@[a-z0-9.]+\.[a-z]{2,3}$/

$('body').on('keyup change paste cut', '#myEmail', function() {

	var res = patt.test($(this).val()) === true  ? 'Correct Email format.' : 'Invalid Email format. Please enter a valid Email address.';
  $('.result').text(res)
});