function openMenu(){
        $('#menu').height("5em");
        $('#menu').css({bottom: -5+'em'});
        $('#menu').css('border-right', '1px solid #009688');

        $('.burger1').css({top: 9+'px'});
        $('.burger3').css({top: 9+'px'});

        setTimeout(function(){
            $('#menuButtonOn').hide();
            $('#menuButtonOff').show();
        },250);
}
function closeMenu(){
    $('#menu').height("1.65em");
    $('#menu').css({bottom: 0+'em'});
    $('#menu').css('borderRight', '0');

    $('.burger1').css({top: 0+'px'});
    $('.burger3').css({top: 18+'px'});
    setTimeout(function(){
        $('#menuButtonOn').show();
        $('#menuButtonOff').hide();
        $('.burger1').css({top: 0+'px'});
        $('.burger3').css({top: 18+'px'});
    },250);
}
