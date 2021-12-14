$(document).ready(function(){

    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '350px'
        }, 700);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });    

});