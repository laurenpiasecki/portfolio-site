jQuery(document).ready(function () {
    $(".dessert").hide();
    $(".lunch").hide();
    $(".breakfast").hide();
    $(".wine").hide();
    $("#dessert").click(function () {
        $(".dessert").toggle();
        $(".lunch").hide();
        $(".breakfast").hide();
        $(".wine").hide();
        $(".dinner").hide();
    });
    $("#dinner").click(function () {
        $(".dinner").toggle();
        $(".dessert").hide();
        $(".lunch").hide();
        $(".breakfast").hide();
        $(".wine").hide();
    });
    $("#lunch").click(function () {
        $(".lunch").toggle();
        $(".dessert").hide();
        $(".breakfast").hide();
        $(".wine").hide();
        $(".dinner").hide();
    });
    $("#wine").click(function () {
        $(".wine").toggle();
        $(".dessert").hide();
        $(".lunch").hide();
        $(".breakfast").hide();
        $(".dinner").hide();
    });
    $("#breakfast").click(function () {
        $(".breakfast").toggle();
        $(".dessert").hide();
        $(".lunch").hide();
        $(".wine").hide();
        $(".dinner").hide();
    });
});