$(document).ready(function(){

    // 상단이동버튼
    var but=$('.top_but');
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            but.fadeIn();
        }else{
            but.fadeOut();
        }
    });
    but.on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },300);
    });

    $('.menu_btn').click(function(){

        $('.menu_wrap').fadeIn();
        $('.menu_btn').fadeOut();
        $('.hamburger_btn').fadeIn();
    });

    $('.hamburger_btn').click(function(){
        $('.menu_wrap').fadeOut();
        $('.menu_btn').fadeIn();
        $('.hamburger_btn').fadeOut();

    });

});//end
