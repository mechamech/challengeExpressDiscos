function ocultarLogin(){
    $("#login").hide();
    $("#nuevaCuenta *").css("display","block");
};

$("#login a").on("click", function(e){
    e.preventDefault();
})

//validacion
$("form").on("submit", function(){
    let incompletos=false;
    let formId=$(this).attr("id");
    let inputs=Array.from($("#"+formId+" input"))
    $(".formIngreso input").css("border","1px solid #979797");
    $("#lblPassword").html("");
    $(inputs).each(function( index, element ) {
        if(!element.value){
            $(element).css("border","1px solid red");
            incompletos=true;
        }
    });
    if(incompletos){
        return false;
    }else{
        if(formId=="nuevaCuenta"){
            validarPassword();
            return false
        }
    }
});

function validarPassword(){
    let inputsPassword=Array.from($("#nuevaCuenta").children("input[type=password]"));
    if(inputsPassword[0].value!=inputsPassword[1].value){
        $("#lblPassword").html("Las contraseñas no coinciden")
        inputsPassword[0].focus();
    }else{
        $("#nuevaCuenta").submit();
    } 
}

$(".formIngreso input").on("input", function(){
    $(this).css("border","1px solid #979797");
})
