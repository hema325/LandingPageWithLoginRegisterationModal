let modals = $(".modal");

$("button[data-action=modal],a[data-action=modal]").click(function () {
    modals.removeClass("active");
    $($(this).attr("data-target")).addClass("active");
});

modals.click(function (e) {
    if ($(e.target).is(".modal *"))
        return;

    $(this).removeClass("active");
});


$(".modal form input[type=password] + i").click(function () {
    let password = $(this).prev();

    if (password.attr("type") == "text") {
        password.attr("type", "password");
        $(this).attr("class", "fa-regular fa-eye ");
    }
    else {
        password.attr("type", "text");
        $(this).attr("class", "fa-regular fa-eye-slash");
    }
});