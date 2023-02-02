$(function(){
    $('.menu_mobile').click(function(){
        let list_menu = $('.menu nav ul');

        if(list_menu.is(':hidden') === true) {
            list_menu.slideDown("slow");
        }else {
            list_menu.slideUp("slow");
        }
    });
});

