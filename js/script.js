$(document).ready(function() {


    $(window).scroll(function(){
        var navFixed = $(window).scrollTop();
        if(navFixed > 50){
            $(".main__menu").addClass("fadeInDown");
        }else{
            $(".main__menu").removeClass("fadeInDown");
        }
    });

    

})
