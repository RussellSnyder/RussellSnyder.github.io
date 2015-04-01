$(document).ready(function(){
    $("#infoIcon").on({
        mouseenter: function(){
            $("#infoText").css("visibility", "visible");
        },  
        mouseleave: function(){
            $("#infoText").css("visibility", "hidden");
        }, 
        click: function(){
            $("#infoText").css("visibility", "visible");
        }  
    });
});
