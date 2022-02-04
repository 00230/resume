$('.headbox h1 img').on('click', function(){
    var offtop = $(window).height()*0
    $('html').animate({
        scrollTop:offtop
    }, 500)
    return false;
})

$('#menu li a').on('click', function(){
    var index = $(this).parent().index()
    // var offtop = $('#wrap section').eq(index).offset().top
    // $(this).parent().addClass('on').siblings().removeClass('on')
    var offtop = $(window).height()*(index+1)
    $('html').animate({
        scrollTop:offtop
    }, 500)
    return false;
})

$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    var wh = $(this).height()
    var wh0 = $(this).height()*0   
    $('section').eq(0).offset().top
    var wh1 = $(this).height()*1   
    $('section').eq(1).offset().top
    var wh2 = $(this).height()*2   
    $('section').eq(2).offset().top
    var wh3 = $(this).height()*3   
    $('section').eq(3).offset().top
    var wh3 = $(this).height()*4
    $('section').eq(4).offset().top

    if (sct>=wh0 && sct<wh1) {
        // $('#menu li').eq(0).addClass('on').siblings().removeClass('on')
        // $('.me1').slickslide()
    } else if (sct>=wh1 && sct<wh2) {
        // $('#menu li a').eq(1).addClass('bk').siblings().removeClass('bk')
        $('#header .headbox').removeClass('on')
        $('.nav ul li a').removeClass('on')
        $('#header .headbox h1 .klog').removeClass('on')
    } else if (sct=wh2) {
        // $('#menu li a').eq(3).addClass('').siblings().removeClass('bk')
        $('#header .headbox').addClass('on')
        $('.nav ul li a').addClass('on')
        $('#header .headbox h1 .klog').addClass('on')
    } else if (sct>wh4){
        $('#header .headbox').removeClass('on')
        $('.nav ul li a').removeClass('on')
        $('#header .headbox h1 .klog').removeClass('on')
        // $('#menu li').eq(3).addClass('on').siblings().removeClass('on')
    } else {
        
    }
    // for (let i=0; i<4; i++) {
    //     if (sct>=wh*i && sct<wh*(i+1)) {
    //         $('#menu li').eq(i).addClass('on').siblings().removeClass('on')
    //     }
    // }
    // if (sct>=wh*2) {
    //     $('#header .headbox').addClass('on')
    //     $('.nav ul li a').addClass('on')
    //     $('#header .headbox h1 .klog').addClass('on')
    // } else if (sct>=wh*1){
    //     $('#header .headbox').removeClass('on')
    //     $('.nav ul li a').removeClass('on')
    //     $('#header .headbox h1 .klog').removeClass('on')
    // } else if (sct>=wh*3) {
    //     $('#header .headbox').removeClass('on')
    //     $('.nav ul li a').removeClass('on')
    //     $('#header .headbox h1 .klog').removeClass('on')
    // }
})


var offTop = 0;
$('section').on('mousewheel', function(e, delta){
    
    if (delta<0) {
        offTop = $(this).next().offset().top
    } else if ( delta>0 ) {
        offTop = $(this).prev().offset().top
    }
    $('html').stop().animate({
        scrollTop:offTop
    }, 500)
})