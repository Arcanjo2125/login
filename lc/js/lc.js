$(document).ready(function() {
    $("#register-link").click(function(e) {
        e.preventDefault();
        $("#login-panel").hide();
        $("#register-panel").fadeIn();
    });

    $("#login-link").click(function(e) {
        e.preventDefault();
        $("#register-panel").hide();
        $("#login-panel").fadeIn();
    });
});