$(document).ready(function(){

	DEFAULT.init();

});

var DEFAULT = {
	init: function(){

		DEFAULT.inputMasks();
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

			var name = form.find('input[name="colab_name"]').val();
			var email = form.find('input[name="colab_email"]').val();
			var job_title = form.find('input[name="colab_job"]').val();
			var admission_date = form.find('input[name="colab_start"]').val();
			var photo_url = form.find('input[name="colab_photo"]').val();

			var aux = admission_date.split('/');
			var day,month,year;
			day = aux[0];
			month = aux[1];
			year = aux[2];

			admission_date = year+'-'+month+'-'+day;

			var user  = '{ user {name:'+name+',email:'+email+',job_title:'+job_title+',admission_date:'+admission_date+',photo_url:'+photo_url+'}}';


			$.ajax({
				url: '//qr-challenge.herokuapp.com/api/v1/users',
				type: "POST",
				data: JSON.parse(user),
           		dataType: "json",
			})
			.done(function(resp) {
				console.log(resp);
			});		

		});
		
	},

	deleteColab: function (id) {
		
	},

	inputMasks: function(){
		$('.date').mask("00/00/0000", {placeholder: "__/__/____"});
	}

}
