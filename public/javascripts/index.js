$('#nuevaCuenta').hide();

function ocultarLogin(){
    $("#login").hide();
    $("#nuevaCuenta").show();
};

$("#login a").on("click", function(e){
    e.preventDefault();
})

//validacion
$("form").on("submit", function(e){
    var incompletos=false;
    var formId=$(this).attr("id");
    var inputs=Array.from($("#"+formId+" input"))
    $(".formIngreso input").css("border","1px solid #979797"); 
    $(inputs).each(function( index, element ) {
        if(!element.value){
            $(element).css("border","1px solid red");
            incompletos=true;
        }
    });
    if(incompletos){
        return false;
    }else{
        $("#linkLogin").text("salir")
    }
})

$(".formIngreso input").on("input", function(){
    $(this).css("border","1px solid #979797"); 
})


