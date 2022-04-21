$(document).ready(function(){  
    $("#flip1").click(function(){  
        $("#panel1").slideToggle("slow");  
    });  
});  


$(document).ready(function(){  
    $("#flip2").click(function(){  
        $("#panel2").slideToggle("slow");  
    });  
}); 

$(document).ready(function(){  
    $("#flip3").click(function(){  
        $("#panel3").slideToggle("slow");  
    });  
}); 


$(document).ready(function(){  
    $("#flip4").click(function(){  
        $("#panel4").slideToggle("slow");  
    });  
}); 



$(document).ready(function(){


$(".select_p").hover(function(){
    $(this).css("background-color", "gray");
    }, function(){
    $(this).css("background-color", "#e6e4df");
  });
});


$(document).ready(function(){


    $(".color_change").hover(function(){
        $(this).css("background-color", "black");
        }, function(){
        $(this).css("background-color", "#e6e4df");
      });
    });