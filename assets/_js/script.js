$(document).ready(function(){

var DEFAULT = {
	init: function(){

	},

	getColab: function(){
		$.ajax({
			url: '//qr-challenge.herokuapp.com/api/v1/users',
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		})
		.done(function(resp) {
			console.log(resp);
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