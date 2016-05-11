
function validar (formulario1) {
       
 
    if(document.formulario1.codigo.value==""){
        alert("El Campo codigo esta vacio");
        return false;
    }
    else if( document.formulario1.nombre.value=="" ){
        alert("El Campo Nombre esta vacio");
        return false;
    }
     else if( document.formulario1.apellido.value=="" ){
        alert("El Campo Apellido esta vacio");
        return false;
    }
    else if( document.formulario1.sapellido.value=="" ){
        alert("El Campo Segundo Apellido esta vacio");
        return false;
    }
    else if( document.formulario1.cedula.value==""  ){
        alert("El Campo Cedula esta vacio");
        return false;
    }
    else if( document.formulario1.fnacimiento.value==""){
        alert("El Campo fecha de nacimiento esta vacio");
        return false;
    }

    else if(  document.formulario1.lnacimiento.value=="selecionadopordefeto" ){
        alert("El Campo Lugar de nacimiento esta vacio");
        return false;
    }
    else if( document.formulario1.nacionalidad.value=="nacionalidad"  ){
        alert("El Campo Nacionalidad esta vacio");
        return false;
    }
     else if( document.formulario1.sexo.value=="sexo"   ){
        alert("El Campo Sexo esta vacio");
        return false;
    }
       else if( document.formulario1.sangre.value=="sangre"  ){
        alert("El Campo Sangre esta vacio");
        return false;
    }
     else if(  document.formulario1.direcion.value==""   ){
        alert("El Campo Direcion esta vacio");
        return false;
    }
     else if(  document.formulario1.provincia.value=="provincia"  ){
        alert("El Campo Provincia esta vacio");
        return false;
    }
    else if(  document.formulario1.estado1.value==""  ){
        alert("El Campo Estado esta vacio");
        return false;
    }
    
    else{
        return true;
    }
  
 
  
}

function validar2(formulario2){
    if (document.formulario2.empleado.value == "empleado") {
        alert(" El campo empleado esta vacio ");
        return false;

    }
    else if (document.formulario2.puesto.value == "puesto") {
        alert(" El campo Puesto esta vacio ");
        return false;

    }
    else if (document.formulario2.departamento.value == "departamento") {
        alert(" El campo departamento esta vacio ");
        return false;

    }
    else if (document.formulario2.horario.value == "horario") {
        alert(" El campo Horario esta vacio ");
        return false;

    }
    else if (document.formulario2.asegurado.value == "") {
        alert(" El campo Aseguado esta vacio ");
        return false;

    }
    else if (document.formulario2.dependiente.value == "") {
        alert(" El campo Dependiente esta vacio ");
        return false;

    }
    else if (document.formulario2.ingresos.value == "ingreso") {
        alert(" El campo Ingreso esta vacio ");
        return false;

    }
    else if (document.formulario2.monto.value == "") {
        alert(" El campo monto esta vacio ");
        return false;

    }

    else if (document.formulario2.reingreso.checked == "" || document.formulario2.primeraquinsena.checked == "" || document.formulario2.segundaquinsena.checked == "" || document.formulario2.defuciones.checked == "" || document.formulario2.exepto.checked == "") {
        alert("");
        return false;

    }
    else {
        return true;
    }
}

function soloparanumeros(e){

    key = e.KeyCode || e.which;
    teclado = String.fromCharCode(key);
    numero = "0123456789";
    especiales = "8-37-38-46";
    teclado_especial = false;

    for(var i in especiales){
        if (key==especiales[i]){
           teclado_especial=true;
        }
    }
    if(numero.indexOf(teclado)==-1 && !teclado_especial){
   return false;
   }
}

function soloparaletras(e){

    key = e.KeyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = "abcdefghijklmnopqrstuvwxyz";
    especiales = "8-37-38-46-164";
    teclado_especial = false;

    for(var i in especiales){
        if (key==especiales[i]){
           teclado_especial=true;
        }
    }
    if(letras.indexOf(teclado)==-1 && !teclado_especial){
   return false;
   }
}




function validar3(formulario3){
    if (document.formulario3.fecha.value == "")  {
        alert(" El campo Fecha esta vacio ");
        return false;
    }
    else if(  document.formulario3.mensual.value == "" && document.formulario3.diario.value == ""){
         alert("Debe selecionar campo Sueldo mensual o Diario");
        return false;
    }
    else if(  document.formulario3.cuenta.value == ""){
         alert(" El campo Cuenta esta vacio ");
        return false;
    }
     else if (document.formulario2.formapago.checked == "" && document.formulario2.formapago.checked == "" && document.formapago.segundaquinsena.checked == "") {
        alert("");
        return false;

    }
    else{
        return true;
    }

}

function validar4(formulario4){
    if (document.formulario4.escaner.value == "" ) {
        alert("Seleciona un Scaner");
        return false;
    }
    else {
        return true;
        
    }
    
}
function validar5(vacaciones){
    if (document.vacaciones.mes.value == "" || document.vacaciones.fechaciere.value == "" || document.vacaciones.codigo.value == "" || document.vacaciones.sueldo.value == "" ) {
        alert("");
        return false;
    }
}
function validar6(licenciamedica){
    if (document.licenciamedica.fecha.value == "")  {
        alert("Debe poner una Fecha");
        return false;
    }
    else if( document.licenciamedica.executor.value == ""){
         alert("Debe poner el Executor");
        return false;
    }
   
    else if( document.licenciamedica.codigolm.value == ""){
         alert("Debe poner el Codigo");
        return false;
    } else if( document.licenciamedica.nombrelm.value == ""){
         alert("Debe poner la Nombre");
        return false;
    }
     else if( document.licenciamedica.incapacidaddias.value == ""){
         alert("Debe poner la Incapacidad");
        return false;
    }
     else if( document.licenciamedica.incapacidadhasta.value == ""){
         alert("Debe poner la Incapacidad Hasta");
        return false;
    }
     else if( document.licenciamedica.totallicencia.value == ""){
         alert("Debe poner el Total de licencia");
        return false;
    }
    else{
        return true;
    }
}
function validar7(modificacions) {
    if (document.modificacions.fechams1.value == "") {
        alert("Debe poner la fecha");
        return false;
    }
    else if (document.modificacions.empleadoms.value == "") {
        alert("Debe poner el Empleado");
        return false;
    }
    else if (document.modificacions.empleadoms2.value == "") {
        alert("Debe poner el Empleado");
        return false;
    }
    else if (document.modificacions.fechams.value == "") {
        alert("Debe poner Fecha");
        return false;
    }
    else if (document.modificacions.sueldoms.value == "") {
        alert("Debe poner Sueldo");
        return false;
    }
    else if (document.modificacions.sueldoactums.value == "") {
        alert("Debe poner Sueldo Actualizar");
        return false;
    }
    else {
        return true;
    }
}

    function validar8(incidencia){
    if (document.incidencia.fechai.value == "")  {
        alert("Debe poner la fecha inicial");
        return false;
    }
     else if( document.incidencia.fechaf.value == ""){
         alert("Debe poner el Fecha Final");
        return false;
    }
    else{
        return true;
    }
}

function linpiarform() {
  alert("Nuevo");
  document.formulario1.reset(); 
}