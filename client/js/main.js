//MAIN JS

//COLLAPSE FIX ON SMALL SCREEN SIZE
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});