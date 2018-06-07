$("#btnNuevo").on("click", function(e){
    var error=false;
    $('label').html("");
    if(!$("#nombre").val()){
        $("#nombre").next().html("Campo obligatorio");
        error=true;
    }
    if(!$("#email").val()){
        $("#email").next().html("Campo obligatorio");
        error=true;
    }
    if(!$("#password").val()){
        $("#password").next().html("Campo obligatorio");
        error=true;
    }
    if(error){
        return false;
    }
})

$("#btnLogin").on("click", function(e){
    var error=false;
    $('label').html("");
    if(!$("#emailLogin").val()){
        $("#emailLogin").next().html("Campo obligatorio");
        error=true;
    }
    if(!$("#passwordLogin").val()){
        $("#passwordLogin").next().html("Campo obligatorio");
        error=true;
    }
    if(error){
        return false;
    }
});


