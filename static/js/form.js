$(document).ready(function() {

	$('form').on('submit', function(event) {

		$.ajax({
			data : {
				image : $('#fname').val()
			},
			type : 'POST',
			url : '/process'
		})
		.done(function(data) {

			if (data.error) {
				$('#errorAlert').text(data.error).show();
				$('#successAlert').hide();
			}
			else {
				$('#successAlert').text(data.results).show();
				$('#errorAlert').hide();
			}

		});

		event.preventDefault();

	});

});
