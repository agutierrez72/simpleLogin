$(document).ready(function(){
    $("#button").click(function(){
        var name = $("#textbox").val();

        var msg = "Hello " + name;
        alert(msg);
    })
});