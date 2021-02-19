//@prepros-append

$(function() {
    $(".burger-header__burger").click(function() {
        $(this).toggleClass("active");
        $(".burger-header__row_bottom").toggleClass("active");
        $("body").toggleClass("active");
    });
});

