document.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 20) {
        document.documentElement.style.setProperty('--opacity', 1);
        document.documentElement.style.setProperty('--heightheader', 115 + 'px');
        document.documentElement.style.setProperty('--heightheader768', 95 + 'px');
        document.documentElement.style.setProperty('--top1', -20 + 'px');
        document.documentElement.style.setProperty('--top768', -15 + 'px');
    } else {
        document.documentElement.style.setProperty('--opacity', 0.2);
        document.documentElement.style.setProperty('--heightheader', 135 + 'px');
        document.documentElement.style.setProperty('--heightheader768', 165 + 'px');
        document.documentElement.style.setProperty('--top1', 0 + 'px');
        document.documentElement.style.setProperty('--top768', 0 + 'px');
    };
    if (window.pageYOffset > 1) {
        document.documentElement.style.setProperty('--opacity1', 1);
    } else {
        document.documentElement.style.setProperty('--opacity1', 0);
    }
});


document.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 150) {
        $('.header__linc').addClass('active');
    } else {
        $('.header__linc').removeClass('active');
    }
});


$(document).ready(function(){
    $('#li1_1').mouseover(function(event){
        $('#li1_1').addClass('active');
    });
    $('#li1_1').mouseout(function(event){
        $('#li1_1').removeClass('active');
    });
    $('#li1_2').mouseover(function(event){
        $('#li1_2').addClass('active');
    });
    $('#li1_2').mouseout(function(event){
        $('#li1_2').removeClass('active');
    });
    $('#li1_3').mouseover(function(event){
        $('#li1_3').addClass('active');
    });
    $('#li1_3').mouseout(function(event){
        $('#li1_3').removeClass('active');
    });
    $('#li1_4').mouseover(function(event){
        $('#li1_4').addClass('active');
    });
    $('#li1_4').mouseout(function(event){
        $('#li1_4').removeClass('active');
    });
    $('#li1_5').mouseover(function(event){
        $('#li1_5').addClass('active');
    });
    $('#li1_5').mouseout(function(event){
        $('#li1_5').removeClass('active');
    });
    $('#li2_1').mouseover(function(event){
        $('#li2_1').addClass('active');
    });
    $('#li2_1').mouseout(function(event){
        $('#li2_1').removeClass('active');
    });
    $('#li2_2').mouseover(function(event){
        $('#li2_2').addClass('active');
    });
    $('#li2_2').mouseout(function(event){
        $('#li2_2').removeClass('active');
    });
    $('#li2_3').mouseover(function(event){
        $('#li2_3').addClass('active');
    });
    $('#li2_3').mouseout(function(event){
        $('#li2_3').removeClass('active');
    });
    $('#li3_1').mouseover(function(event){
        $('#li3_1').addClass('active');
    });
    $('#li3_1').mouseout(function(event){
        $('#li3_1').removeClass('active');
    });
    $('#li3_2').mouseover(function(event){
        $('#li3_2').addClass('active');
    });
    $('#li3_2').mouseout(function(event){
        $('#li3_2').removeClass('active');
    });
    $('.arrow').mouseover(function(event){
        $('.arrow1').addClass('active');
    });
    $('.arrow').mouseout(function(event){
        $('.arrow1').removeClass('active');
    });
});