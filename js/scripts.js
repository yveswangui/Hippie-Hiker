$(document).ready(function(){
    $("form#my-button").submit(function(e){
        e.preventDefault();
    });
});
$(document).ready(function(){
    $(".card").hover(function(){
        if($(this).hasClass("active")){
            ($(".card .bottom").slideUp(function(){
                $(".card").removeClass("active");
            }));
        }else{
            $(".card").addClass("active");
            $(".card .bottom").stop().slideDown();
        }
    
    });
});