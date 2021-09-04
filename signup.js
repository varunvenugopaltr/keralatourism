var patt = /[a-z0-9._%+-]+@[a-z0-9.]+\.[a-z]{2,3}$/

$('body').on('keyup change paste cut', '#myEmail', function() {

	var res = patt.test($(this).val()) === true  ? 'Correct Email format.' : 'Invalid Email format. Please enter a valid Email address(Format sample@domain.com).';
  $('.result').text(res)
});




var mobpatt = /[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{3}.[0-9]{3}.[0-9]{4}|[0-9]{3}&nbsp[0-9]{3}&nbsp[0-9]{4}$/
$('body').on('keyup change paste cut', '#myMob', function() {

	var res1 = mobpatt.test($(this).val()) === true  ? 'Correct Mobile number format.' : 'Invalid Mobile Number format. Suggested format: XXX-XXX-XXXX or XXX.XXX.XXXX or XXX XXX XXX';
  $('.result1').text(res1)
});


