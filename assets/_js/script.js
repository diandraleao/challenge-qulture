$(document).ready(function(){

	DEFAULT.init();

});

var DEFAULT = {
	init: function(){

		DEFAULT.getColab();
		DEFAULT.addColab();
	},

	getColab: function(){
		$('.loading').show();
			
		$.getJSON('//qr-challenge.herokuapp.com/api/v1/users', function(resp) {
				var a = resp.users;
				var obj, values = [], b = [];
				for (var i = 0; i < a.length; i++) {
					obj = a[i];
					values = Object.keys(obj).map(function (key) { return obj[key]; });
					// console.log(values);
					b[i] = values;
				}
				// console.log(b);
				$('#datatable-list').DataTable({
					data: b,
					scrollX: false,
					responsive: true,
					language: {
			            "lengthMenu": "Exibindo _MENU_ registros",
			            "zeroRecords": "Nenhum registro encontrado",
			            "info": "Exibindo page _PAGE_ de _PAGES_",
			            "infoEmpty": "Sem registros disponíveis",
    					"search": "Busca:",
			            "infoFiltered": "(filtrado do total _MAX_)"
			        },
				    paginate: {
				        "first": "Primeiro",
				        "last": "Último",
				        "next": "Próximo",
				        "previous": "Anterior"
				    },
				    columns: [
				        { title: '#' },
				        { title: 'Nome' },
				        { title: 'E-mail' },
				        { title: 'URL foto' },
				        { title: 'Cargo' },
				        { title: 'Data de admissão' }
				    ]
				});

		});
		
	},


	addColab: function () {

		$(document).on('click touchstart', '#form-add-colab button[type="submit"]', function(e) {
			var form = $('form-add-colab');
			var newUser  =  '?name='+form.find('input[name="colab_name"]').val() +
							'&email='+form.find('input[name="colab_email"]').val()+
							'&job_title='+form.find('input[name="colab_job"]').val()+
							'&admission_date='+form.find('input[name="colab_start"]').val()+
							'&photo_url='+form.find('input[name="colab_photo"]').val();

			$.ajax({
				url: '//qr-challenge.herokuapp.com/api/v1/users',
				type: "POST",
				data: newUser
			})
			.done(function(resp) {
				console.log(resp);
			});		

		});
		
	},

	deleteColab: function (id) {
		
	}

}
