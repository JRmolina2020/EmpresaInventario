
var tabla;
var tablaprovedor;

 function init(){
	guardaryeditar();
	listarp();
	listar();
	ciudadvalidate();
	$("#num_documento").focus();
	
	
}
//Función limpiar
function limpiar()
{
	$("#idpersona").val("");
	$("#nombre").val("");
	$("#apellido").val("");
	$("#num_documento").val("");
	$("#direccion").val("");
	$("#telefono").val("");
	$("#email").val("");
	
}
// mayusculas
function mayus(e) {
    e.value = e.value.toUpperCase();
}
//funcion para listar a los proveedores
function listarp()
{
	 tablaprovedor=$('#listadop').dataTable(
	{
		"aProcessing": true,//Activamos el procesamiento del datatables
	    "aServerSide": true,//Paginación y filtrado realizados por el servidor
	    dom: 'Bfrtip',//Definimos los elementos del control de tabla
	    buttons: [		 
	           
		            'copyHtml5',
		            'excelHtml5',
		            'csvHtml5',
		            'pdf'
		        ],
		"ajax":
				{

			url: '../controller/persona.php?op=listarp',
					dataType : "json",						
					error: function(e){
						console.log(e.responseText);	
					}
				},
		"bDestroy": true,
		"iDisplayLength": 5,//Paginación
	    "order": [[ 0, "desc" ]]//Ordenar (columna,orden)
	}).DataTable();
}

// funcion para listar a los clientes
function listar()
{
	 tabla=$('#listado').dataTable(
	{
		"aProcessing": true,//Activamos el procesamiento del datatables
	    "aServerSide": true,//Paginación y filtrado realizados por el servidor
	    dom: 'Bfrtip',//Definimos los elementos del control de tabla
	    buttons: [		 
	           
		            'copyHtml5',
		            'excelHtml5',
		            'csvHtml5',
		            'pdf'
		        ],
		"ajax":
				{

			url: '../controller/persona.php?op=listarc',
            type: "GET",
					dataType : "json",						
					error: function(e){
						console.log(e.responseText);	
					}
				},
		"bDestroy": true,
		"iDisplayLength": 5,//Paginación
	    "order": [[ 0, "desc" ]]//Ordenar (columna,orden)
	}).DataTable();
}
function guardaryeditar(e)
{
// VALIDATION formulario
$('#formulario') .bootstrapValidator({
	message: 'This value is not valid',
	fields: {
     num_documento: {
			row: '.col-xs-4',
			message: 'Identificacion invalida',
			validators: {
				notEmpty: {
					message: 'Numero de documento invalido,no puede estar vacio'
				},
				integer: {
                        message:'Digite un numero valido',
                         thousandsSeparator: '',
                            decimalSeparator: '.'
                    },

				stringLength: {
					min: 8,
					max: 12,
					message: 'Minimo 8 digitos y Maximo 12 diitos'
				},
				between: {
                            min: 1,
                            max: 999999999999,
                            message: 'El primer digito debe ser  mayor a 0 y debe ser menor a 999999999999'
                        },

						regexp: {
						regexp: /^[a-zA-Z0-9_\.]+$/,
						message: 'No se permiten espacios',
						}
				
			}
		},

		nombre: {
			message: 'Nombre invalido',
			validators: {
				notEmpty: {
					message: 'El nombre  es obligatorio,no puede estar vacio.'
				},
				
                    regexp: {
                        regexp: /^[a-zA-Z\s]+$/,
                        message: 'Ingrese un nombre correcto,no se aceptan valores numericos'
                    },
				stringLength: {
					min: 3,
					max: 30,
					message: 'Minimo 3 caracteres y Maximo 30 caracteres'
				},
			}
		},
		apellido: {
			message: 'Apellido invalido',
			validators: {
				notEmpty: {
					message: 'El Apellido es obligatorio,no puede estar vacio.'
				},
				
                    regexp: {
                        regexp: /^[a-zA-Z\s]+$/,
                        message: 'Ingrese un Apellido correcto,no se aceptan valores numericos'
                    },
				stringLength: {
					min: 3,
					max: 30,
					message: 'Minimo 3 caracteres y Maximo 30 caracteres'
				},
			}
		},
		direccion: {
			message: 'Direccion invalida',
			validators: {
				notEmpty: {
					message: 'La direccion es obligatoria,no puede estar vacia.'
				},
				
				stringLength: {
					min: 6,
					max: 30,
					message: 'Minimo 6 caracteres y Maximo 30 caracteres '
				},
			}
		},
		
		telefono: {
			message:'telefono invalido',
			validators: {
				notEmpty: {
					message: 'El Telefono es obligatorio,no puede estar vacio'
				},
				 numeric: {
                            message: 'Solo se aceptan valores numericos',
                            
                        },
				stringLength: {
					min: 7,
					max: 10,
					message: 'Minimo 7 digitos y Maximo 10 digitos'
				},
						regexp: {
						regexp: /^[a-zA-Z0-9_\.]+$/,
						message: 'No se permiten espacios'
						}
				
			}
		},
		email: {
			message:'correo invalido',
			validators: {
				notEmpty: {
					message: 'El correo es obligatorio,no puede estar vacio'
				},
				 emailAddress: {
                        message: 'Ingrese un correo valido,que cumpla con el estandar'
                    },


				stringLength: {
					min: 15,
					max: 50,
					message: 'Minimo 15 caracteres y Maximo 50 caracteres '
				}
				
			}
		},

	}
})

// end validaciones
.on('success.form.bv', function(e) {
// ---------------------------------------
	e.preventDefault(); //No se activará la acción predeterminada del evento
	$("#btnGuardar").prop("disabled",false);
	var formData = new FormData($("#formulario")[0]);
	$.ajax({
		url: "../controller/persona.php?op=guardaryeditar",
	    type: "POST",
	    data: formData,
	    contentType: false,
	    processData: false,
	    success: function(datos)
	    {                    
	    	swal({
	    		position: 'top-end',
	    		type: 'success',
	    		title: datos,
	    		showConfirmButton: false,
	    		timer: 1500
	    	});  
	    	limpiar();	
	    	  $('#formulario').bootstrapValidator("resetForm",true); 
	          tabla.ajax.reload();
	          tablaprovedor.ajax.reload();
	          $('.nav-tabs a:last').tab('show');
	        
	    }

	});
	});
}
// end save
function mostrar(idpersona)
{
	$.post("../controller/persona.php?op=mostrar",{idpersona : idpersona}, function(data, status)
	{
		data = JSON.parse(data);
		 $('.nav-tabs a:first').tab('show')
	   	$("#idpersona").val(data.idpersona);
	   	$("#tipo_documento").val(data.tipo_documento).change();
	   	$("#num_documento").val(data.num_documento);
		$("#nombre").val(data.nombre);
		$("#apellido").val(data.apellido);
		$("#direccion").val(data.direccion);
		$("#telefono").val(data.telefono);
		$("#ciudad").val(data.ciudad).change();
		$("#email").val(data.email);

 	})
}

//Función para eliminar registros
function eliminar(idpersona)
{
 swal({
  title: "Desea eliminar ha esta persona, Recuerde una vez eliminado no se podra recuperar la informacion!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'SI, ELIMINAR!'
}).then((result) => {
  if (result.value) {
  	$.post("../controller/persona.php?op=eliminar", {idpersona : idpersona}, function(e){
        		 swal(e);
	            tabla.ajax.reload();
	            tablaprovedor.ajax.reload();
       });	
   
  }
})
}

function cerrarformulario(){
$('#formulario').bootstrapValidator("resetForm",true); 
limpiar();
$('.nav-tabs a:last').tab('show');
}

function ciudadvalidate(){
var vciudad = document.formulario.ciudad.value;

if(vciudad=='VALLEDUPAR'){

    var barrio = ["Mayales.", "1 de enero","Panama","URB.Galan","Los cocos","Manuelitas","San fernando","El pupo",
    "Casimiro","Simon bolivar","V.miriam","El poblado","Mareigua","12 de octubre","Kennedy","Candelaria.S",
    "Candelaria N","Sabanas","V.clara"];

}else if (vciudad =='MEDELLIN'){
	 var barrio = ["Santa Cruz","La isla ","El poblado","Villa Niza","La rosa","El Pomar","La cruz"
	 ,"La onda","El Raizal","La salle","Oriente","Berlin","Sevilla","San pedro","Brasilia"];
}
 document.getElementById("barrio").length=0;
  var select = document.getElementById("barrio"); //Seleccionamos el select
    for(var i=0; i < barrio.length; i++){ 
        var option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = barrio[i]; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
}
init();





