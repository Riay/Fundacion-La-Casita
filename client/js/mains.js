
function check_values() {
    if ($("#username").val().length != 0 && $("#password").val().length != 0) {
        $("#button1").removeClass("hidden").animate({ left: '250px' });;
        $("#lock1").addClass("hidden").animate({ left: '250px' });;
    }
}


$('.modal-types button').on('click', function () {
    var type = $(this).attr('class').slice(5)
    swal(type + '!', '', type).catch(swal.noop)
  })

$('.quote-done').on('click', function(e) {
	e.preventDefault();

	const url = $(this).attr("href")
	const method = 'PUT'
	const data = 'status=' + true

	$.ajax({ url, method, data })
		.done(response => {
			location.reload();
		})
})

$('.quote-quit').on('click', function(e) {
	e.preventDefault();

	const url = $(this).attr("href")
	const method = 'PUT'
	const data = 'status=' + false

	$.ajax({ url, method, data })
		.done(response => {
			location.reload();
		})
})


$('.quote-deletes').on('click', function(e) {
	e.preventDefault();

	const url = $(this).attr("href")
	const method = 'PUT'
	const data = 'deletes=' + true

	$.ajax({ url, method, data })
		.done(response => {
			location.reload();
		})
})

$('.quote-undeletes').on('click', function(e) {
	e.preventDefault();

	const url = $(this).attr("href")
	const method = 'PUT'
	const data = 'deletes=' + false

	$.ajax({ url, method, data })
		.done(response => {
			location.reload();
		})
})

$('.type-success').on('click', function(e) {
	e.preventDefault();

	const url = $(this).attr("href")
	const method = 'POST'
	const data = 'name' + 'email' + 'number' + 'comments'
	console.log(data)

	$.ajax({ url, method, data })
		.done(response => {
			location.reload();
		})
})

window.onload = send_whatsapp;

function send_whatsapp(){

  document.querySelector('.send_message').addEventListener('click',function(){

    var url = "whatsapp://send?text="
    var message = document.querySelector('#mensaje').value;
    window.open(url+encodeURIComponent(message));
    
  });

};