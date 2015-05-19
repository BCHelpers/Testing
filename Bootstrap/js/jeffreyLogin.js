/**
 * Created by jeffrey on 15/4/6.
 */

$(function () {
    "use strict";
    $("#login").on("submit", function (e) {
        var username_or_email = $("#login input[name=email_or_username]").val();
        var password = $("#login input[name=password]").val();

        var data = {
            username_or_email: username_or_email,
            password: password
        };

        $.ajax({
            url: "http://54.172.140.235/api/v1/user/login/",
            contentType: "application/json",
            method: "POST",
            data: JSON.stringify(data),
            success: function (result) {
                console.log(result);
                loggedin = true;
                alert(JSON.stringify(result));
            }
        });
        return false;
    });
});
