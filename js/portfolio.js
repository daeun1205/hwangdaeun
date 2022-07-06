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

    $('.menu_box li').eq(0).click(function(){
        const sct = $(window).scrollTop();
        const about = $('.section1').offset().top;
        $('html,body').animate({
            scrollTop: about-100
        });

        $('.shape').addClass('active');
        $('.java_icon').addClass('active');
        $('.js_icon').addClass('active');
        $('.ps_icon,.figma_icon').addClass('active');
        $('.ai_icon').addClass('active');
        $('.xd_icon').addClass('active');
    });

    $('.menu_box li').eq(1).click(function(){
        const sct = $(window).scrollTop();
        const renewal = $('.section2').offset().top;
        $('html,body').animate({
            scrollTop: renewal-100
        });
    });

    $('.menu_box li').eq(2).click(function(){
        const sct = $(window).scrollTop();
        const uiux = $('.section3').offset().top;
        $('html,body').animate({
            scrollTop: uiux-100
        });
    });

    $('.menu_box li').eq(3).click(function(){
        const sct = $(window).scrollTop();
        const contact = $('.section4').offset().top;
        $('html,body').animate({
            scrollTop: contact-100
        });
    });
        
});//end
