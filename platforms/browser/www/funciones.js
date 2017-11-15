$("form").submit(function(e){
	e.preventDefault();

	var n=$("#nombre").val();
	$.ajax({
		url:"http://rincondelaflora4.com/prueba.php",
		data:{nom:n},
		type:"post"
	}).done(function(res){
		$(".mensaje").html(res);
	});


});