$(document).ready(function(){
    //text field will hit button on hit of enter button
    $("#textbox").keyup(function(event){
        if(event.keyCode === 13){
            $("#button").click();
        }
    })
    $("#button").click(function(){
        var name = $("#textbox").val();

        //check name has no symbols
        if (name.match(/^[a-zA-Z_\s]+$/)) {
            // Success
            var msg = "Hello " + name;
            document.getElementById("demo").innerHTML = msg;
        }
        else{
            alert("Invalid Entry");
        }
        
        //alert(msg);
    })
});