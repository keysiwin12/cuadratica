$(document).ready(function()
	{
	$("#btn").click(function () {
	//saco el valor accediendo a un input de tipo text y name = nombre
	// alert($('#a').val());
     let a = $('#a').val();
     a = parseInt(a)
    // alert($("#b").val());
     let b = $('#b').val();
     b = parseInt(b)
	//saco el valor accediendo al class del input = nombre   
    // alert($("#c").val());
     let c = $('#c').val();
     c = parseInt(c)
     let x1 = (-b + Math.sqrt((Math.pow(b,2)-4*a*c))) / (2*a);
     let x2 =(-b - Math.sqrt((Math.pow(b,2)-4*a*c))) / (2*a);
    console.log(x1);
    $("#x1").val(x1); 
    $("#x2").val(x2); 
    });

});