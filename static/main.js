$(document).ready(function(){
    //text field will hit button on hit of enter button
    $("#textbox").keyup(function(event){
        if(event.keyCode === 13){
            $("#button").click();
        }
    })
    $("#textbox2").keyup(function(event){
        if(event.keyCode === 13){
            $("#button").click();
        }
    })
    $("#button").click(function(){
        var name = $("#textbox").val();
        var pwd = $("#textbox2").val();
        //check name has no symbols
        if (name.match(/^[a-zA-Z_\s]+$/) && pwd != "") {
            // Success
            var msg = "Hello " + name;
            // document.getElementById("demo").innerHTML = msg;
            // document.getElementById("demo2").innerHTML = pwd;
            
        }
        if(name == "" && pwd== "")
        {
            alert("One or more fields empty");
        }
        else if(name == "")
            alert("Invalid Username!")
        else if( pwd == ""){
            alert("Invalid Password!" );
        }

      
        //clear textbox after click
        document.getElementById("textbox").value= "";
        document.getElementById("textbox2").value= "";
        //alert(msg);
    })
});