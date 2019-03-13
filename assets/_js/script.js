$(document).ready(function(){

var DEFAULT = {
	init: function(){

	},

	getColab: function(){
		$.ajax({
			url: '//qr-challenge.herokuapp.com/api/v1/users',
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			},
			data: { id: '',
					name: '',
					email: '',
					photo_url: '',
					admission_date: '',
					job_title: '',
					created_at: '',
					updated_at: ''},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		});
		
	},


	addColab: function () {
		
	},

	deleteColab: function (id) {
		
	}



}

});