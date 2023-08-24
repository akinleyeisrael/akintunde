
//remove alert messages after 2 seconds
setTimeout(function(){
    if ($('#msg').length > 0) {
      $('#msg').remove();
    }
  }, 5000)


















// // $(document).on('click', '.delete', function(){
// // 	$id = $(this).attr('name');
// // 	$.ajax({
// // 		url: 'videos/delete/' + $id,
// // 		type: 'POST',
// // 		data: {
// // 			csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
// // 		},
// // 		success: function(){
// // 			Read();
// // 			alert("Deleted!");
// // 		}
// // 	});
// // });



// $(function () {

//   /* Functions */

//   var loadForm = function () {
//     var btn = $(this);
//     $.ajax({
//       url: btn.attr("data-url"),
//       type: 'get',
//       dataType: 'json',
//       beforeSend: function () {
//         $("#modal-book").modal("show");
//       },
//       success: function (data) {
//         $("#modal-book .modal-content").html(data.html_form);
//       }
//     });
//   };

//   // delete Video html
//   var saveForm = function () {
//     var form = $(this);
//     $.ajax({
//       url: form.attr("action"),
//       data: form.serialize(),
//       type: form.attr("method"),
//       dataType: 'json',
//       success: function (data) {
//         if (data.form_is_valid) {
//           $("#video-table li").html(data.html_book_list);
//           $("#modal-book").modal("hide");
//         }
//         else {
//           $("#modal-book .modal-content").html(data.html_form);
//         }
//       }
//     });
//     return false;
//   };


//   /* Binding */

// // Delete book
// $("#video-table").on("click", ".js-delete-video", loadForm); //videos.htm
// $("#modal-book").on("submit", ".js-delete-video-form", saveForm); //delete.html
// });