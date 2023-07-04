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