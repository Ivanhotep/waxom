$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.menu__item').click(function(event) {
        $('.header__burger,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.header__logo').click(function(event) {
        $('.header__burger,.menu').removeClass('active');
        $('body').removeClass('lock');
    });
});