
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

$('.quote-indeletes').on('click', function(e) {
	e.preventDefault()

	const $thisElement = $(this)
	const url = $thisElement.attr("href")
	const method = 'DELETE'

	$.ajax({url, method})
		.done( response => {
		$thisElement
      .parents('.inbox-small-cells')
        .remove()
        location.reload();
	})
})

$('.type-success').on('click', function(e) {
	e.preventDefault();

	const url = '/quotes/appointments'
	const method = 'POST'

	const name = $('[name="name"]').val()
	const email = $('[name="email"]').val()
	const number = $('[name="number"]').val()
	const comments = $('[name="comments"]').val()


	const data = { name, email, number, comments}
	console.log(data)

	$.ajax({ url, method, data })
		.done(response => {
		})
})

$('.btn-aqua').on('click', function(e) {
	e.preventDefault();

	const url = '/Contact'
	const method = 'POST'

	const name = $('[name="name"]').val()
	const email = $('[name="email"]').val()
	const number = $('[name="number"]').val()
	const comments = $('[name="comments"]').val()


	const data = { name, email, number, comments}
	console.log(data)

	$.ajax({ url, method, data })
		.done(response => {
			alert('Tu correo se ha enviado correctamente');
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