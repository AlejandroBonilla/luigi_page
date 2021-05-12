//antes de comenzar a trabajar esperamos al document ready
$(function () {
    //aca podemos trabajar con jquery
    $("#boton1").click(function(){
        $("h1").css({
            color:'orange',
            fontSize:"50px",
        })
        
    });

    $("#boton2").click(function(){
        $("h1").css({
            color:'black',
            fontSize:"32px",
        })
    });
    
    $("#suma").click(function(){
        var num1 = 1;
        alert(suma(num1,6));
    })

    $("#formulario1").submit(function(event){
        event.preventDefault();
        //call function validate
        alert('ya esta todo valido');
        console.log(event);
        console.log('EN FORM')
        this.submit();
    });
});


function suma(num1,num2){
    var resultado = num1 + num2;
    return resultado;
}

