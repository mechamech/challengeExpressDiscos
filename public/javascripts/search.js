$(document).on('click', '#search', function(event){
  event.preventDefault();
  let busqueda = {"value": $('#busqueda').val()};
  // console.log(busqueda)
  $.ajax({
    type: "post",
    url: "/search",
    dataType: 'json',
    data: busqueda,
    success: function (result) {
      console.log(result);
      window.location.href = '/discos';
      
    },
    error: function (result) {
      alert("No pudo resolver");
    }
  });
});
