$(document).ready(function() {


    $(window).scroll(function(){
        var navFixed = $(window).scrollTop();
        if(navFixed > 50){
            $(".main__menu").addClass("fadeInDown");
        }else{
            $(".main__menu").removeClass("fadeInDown");
        }
    });

    $(document).on('click','.navbar-collapse',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });
    

    

})
