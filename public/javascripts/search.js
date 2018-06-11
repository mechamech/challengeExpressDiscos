$(document).on('click', '#search', function(event){
  event.preventDefault();
  let busqueda = {"value": $('#busqueda').val()};

  if (busqueda.value)  {
    window.location.href = '/search/'+ busqueda.value;
  } else {
    $('#busqueda').focus();
  }
});

$(document).on('keypress', '#busqueda', function(event) {
  if (event.keyCode === 13) {
    let busqueda = {"value": $('#busqueda').val()};
    if (busqueda.value)  {
      window.location.href = '/search/'+ busqueda.value;
    } else {
      $('#busqueda').focus();
    }
  }
});


// ----------ALTERNATIVA CON LLAMADA AJAX-----------

  // Esto funciona con el router GET de /search/ajax/:search y con discSearch.pug
  // $.ajax({
  //   type: "get",
  //   url: "/search/ajax/" + busqueda.value,
  //   dataType: 'json',
  //   data: busqueda,
  //   success: function (result) {
  //     console.log(result);
  //   },
  //   error: function (result) {
  //     alert("No pudo resolver");
  //   }
  // });
