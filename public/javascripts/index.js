$("#btnNuevo").on("click", function(e){
    var error=false;
    $('#registro input').css("border","1px solid #979797");
    if(!$("#nombre").val()){
        $("#nombre").css("border","1px solid red");
        error=true;
    }
    if(!$("#email").val()){
        $("#email").css("border","1px solid red");
        error=true;
    }
    if(!$("#password").val()){
        $("#password").css("border","1px solid red");
        error=true;
    }
    if(error){
        return false;
    }
})

$("#btnLogin").on("click", function(e){
    var error=false;
    $('#registro input').css("border","1px solid #979797");
    if(!$("#emailLogin").val()){
        $("#emailLogin").css("border","1px solid red");
        error=true;
    }
    if(!$("#passwordLogin").val()){
        $("#passwordLogin").css("border","1px solid red");
        error=true;
    }
    if(error){
        return false;
    }
});


