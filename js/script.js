$(document).ready(function() {


    $(window).scroll(function(){
        var navFixed = $(window).scrollTop();
        if(navFixed > 100){
            $(".main__menu").addClass("fixed-top fadeInDown");
        }else{
            $(".main__menu").removeClass("fixed-top fadeInDown");
        }
    });

    

})
