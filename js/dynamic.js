$(function () {
    $("form[name='registration']").validate({

        rules: {
            name1: "required",

            name2: "required",

            address: "required",

            email: {
                required: true,
                email: true
            },

        },

        messages: {
            name1: "Please enter your first name",

            name2: "Please enter your second name",

            address: "Please enter your address",

            email: {
                required: "Please enter your email address",
                email: "Invalid email address"
            },

        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});