
// Validar un usuario

$(document).ready(function(){
   $("#formclase").validate({
       rules: {
           nombre: {required:true, minlength:3, maxlength:5}, // se puede usar un maxlenght para que no se pase de digitos
           telefono: {required:true, minlength:10},
           correo: {required:true}
       },
       messages: {
           nombre: {
               required: "El campo nombre es obligatorio",
               minlength: "La longitud del campo debe ser mínimo de 3 caracteres"
           },
           telefono: {
               required: "El campo telefono es obligatorio",
               minlength: "La longitud del campo debe ser mínimo de 10 caracteres"
           },
           correo: {
               required: "El campo email es obligatorio"
           }
       }
   });
});


function vacio(){
    let nombre = $("#nombreuser").val();
    if (nombre.length == 0){
        Swal.fire('La caja de texto esta vacia');
        $("#nombreuser").css("background-color","red"); // para cuando salga el alert se ponga la caja en rojo
        $("#validar").show();
        $("#validar").html("La caja de texto no puede estar vacia");
    }
    else{
      alert("el valor escrito es " + valor)
      $("#cajadetexto").css("background-color","green");
      $("#validar").hide();
    }
} 