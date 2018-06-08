$(document).on('click', '#search', function(event){
  event.preventDefault();
  let busqueda = {"value": $('#busqueda').val()};
  let discos;
  window.location.href = '/search/'+ busqueda.value
  // $.ajax({
  //   type: "get",
  //   url: "/search/ajax/" + busqueda.value,
    // dataType: 'json',
    // data: busqueda,
    // success: function (result) {
    //   console.log(result);
    //    $('#allContent').html(result);

  //     discos = JSON.parse(result.data);
  //     let content = `<h1 id="discosHeader">El resultado de tu búsqueda...</h1>
  //                   <div id="discosContainer">
  //                   </div>`;
  //     $('body .wrapper.row2').html(content);
  //     console.log("Hola");
  //     $.each(discos, function(index, item) {
  //       console.log("Entré al each")
  //       let disco = `<article class="disco">
  //                       <div class="imgContainer">
  //                         <a href='/discos/${item.id}'>
  //                           <img src="/images/${item.img}" alt=${item.nombre}>
  //                         </a>
  //                       </div>
  //                       <div class="infoContainer">
  //                         <p class="discoNombre"> ${item.nombre} </p>
  //                         <p class="discoArtista"> ${item.artista} </p>
  //                         <p class="discoGenero"> Género: ${item.genero} </p>
  //                       </div>
  //                     </article>`;
  //       $('#discosContainer').append(disco);
  //     });
//     },
//     error: function (result) {
//       alert("No pudo resolver");
//     }
//   });
});
