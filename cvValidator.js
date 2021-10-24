const $ = id => document.getElementById(id) ;
let errors = false;
let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;






window.addEventListener("load",()=>{

    //FORMULARIO

    const form = $('formCV')

    //INPUT A VALIDAR 


    //Personal
    const inputName= $('nombre');
    const inputApellido = $('apellido');
    const phone=$('mitelefono');
    const fechaNacimiento=$('edad');
    const email=$('micorreo');
    const address=$('dire');
    const city=$('ciudad');

    //Acadèmico
    const school=$('titsec');
    const university=$('tituni');

    //Laboral
    const seller=$('vendedor');
    const mechanic=$('mecanico');
    const admin=$('admin');
    const geren=$('ejecutivo');
    

    //Texto complementario:
    const cart=$('presentacion');



    //FUNCIONES 

    const calcularEdad = (fechaNacimiento) => {
        const fechaActual = new Date();
        const anoActual = parseInt(fechaActual.getFullYear());
        const mesActual = parseInt(fechaActual.getMonth()) + 1;
        const diaActual = parseInt(fechaActual.getDate());
    
        
        const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
        const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
        const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));
        
        let edad = anoActual - anoNacimiento;
        if (mesActual < mesNacimiento) {
            edad--;
        } else if (mesActual === mesNacimiento) {
            if (diaActual < diaNacimiento) {
                edad--;
            }
        }

            return edad
    };



   //VALIDACIONES
   
   
   //Apellido

   inputApellido.addEventListener('keyup',() =>{
    if(inputApellido.value.trim()==''){
     inputApellido.classList.add("is-invalid")
     $('errorApellido').innerHTML = "apellido obligatorio"
     errors= true;
 }else if(inputApellido.value.trim().length < 2){
     inputApellido.classList.add("is-invalid")
     $("errorApellido").innerHTML = "El apellido debe tener al menos 2 caracteres"
     errors = true; 
 }else{
     inputApellido.classList.remove('is-invalid')
     $('errorApellido').innerHTML = null 
     errors = false;
 }
})

    //Nombre

   inputName.addEventListener('keyup',() =>{
       console.log(inputName.value);
       if(inputName.value.trim()==''){
        inputName.classList.add("is-invalid")
        $('errorName').innerHTML = "Nombre obligatorio"
        errors= true;
    }else if(inputName.value.trim().length < 2){
        inputName.classList.add("is-invalid")
        $("errorName").innerHTML = "el nombre debe tener al menos 2 caracteres"
        errors = true; 
    }else{
        inputName.classList.remove('is-invalid')
        $('errorName').innerHTML = null 
        errors = false;
    }
   })


   // Edad

   // INGRESAR EDAD COMPLETA 
   
   fechaNacimiento.addEventListener('change',()=> {

    const edad = calcularEdad(fechaNacimiento.value)

    if (edad < 18 ) {
        $('errorAge').innerHTML = `Lo siento, eres menor de edad. Tienes : ${edad} años`;
    }
     else{
        $('errorAge').innerHTML = null 
      errors = false;
     }
})


    // Teléfono

    phone.addEventListener('keyup',()=> {
        if(phone.value.trim()==''){
            phone.classList.add('is-invalid')
            $('errorCel').innerHTML = 'Ingresar teléfono'
            errors= true;
        }else if(!Number.isInteger(parseInt(phone.value))){
            phone.classList.add('is-invalid')
            $('errorCel').innerHTML = 'Ingresar solo nùmeros'
            errors=true
        }else{
            phone.classList.remove('is-invalid')
            $('errorCel').innerHTML  =null 
            errors= false;
        }
    })

    // Email 

    email.addEventListener("keyup",() =>{

        if (!regExEmail.test(email.value)) {
            email.classList.add("is-invalid")
            $("errorEmail").innerHTML = "Debes ingresar un email válido"
            errors = true;
        } else {
            email.classList.remove("is-invalid")
            $("errorEmail").innerHTML = null
            errors = false;
        }   
    })

    // Dirección

    address.addEventListener('keyup',() =>{
        if(address.value.trim()==''){
         address.classList.add("is-invalid")
         $('errorAddress').innerHTML = "Dirección obligatoria"
         errors= true;
     }else if(address.value.trim().length < 2){
         address.classList.add("is-invalid")
         $("errorAddress").innerHTML = "La dirección debe tener al menos 2 caracteres"
         errors = true; 
     }else{
         address.classList.remove('is-invalid')
         $('errorAddress').innerHTML = null 
         errors = false;
     }
    })

        // Ciudad

    city.addEventListener('keyup',() =>{
        if(city.value.trim()==''){
         city.classList.add("is-invalid")
         $('errorCity').innerHTML = "Ciudad obligatoria"
         errors= true;
     }else if(city.value.trim().length < 2){
         city.classList.add("is-invalid")
         $("errorCity").innerHTML = "La ciudad debe tener al menos 2 caracteres"
         errors = true; 
     }else{
         city.classList.remove('is-invalid')
         $('errorCity').innerHTML = null 
         errors = false;
     }
    })


    
    // Académica 
    
    


    school.addEventListener('keyup',() =>{
        if(school.value.trim()==''){
         school.classList.add("is-invalid")
         $('errorSchool').innerHTML = "Campo obligatorio"
         errors= true;
     }else{
         school.classList.remove('is-invalid')
         $('errorSchool').innerHTML = null 
         errors = false;
     }
     university.addEventListener('keyup',() =>{
        if(university.value.trim()==''){
         university.classList.add("is-invalid")
         $('errorUniversity').innerHTML = "Campo obligatorio"
         errors= true;
     }else{
         university.classList.remove('is-invalid')
         $('errorUniversity').innerHTML = null 
         errors = false;
     }
    })






})


    
    
    
    form.addEventListener("submit",(e) =>{
        e.preventDefault()
    })
})