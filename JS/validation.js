$(document).ready(function () {
    $('#signup').validate({
        rules : {
            fname : {
                required: true,
                minlength: 5,
            },
            surname : {
                required : true,
            },
            mobile : {
                required : true,
            },
            password : {
                required : true,
            },
            day : {
                required : true,
            },
            month : {
                required : true,
            },
            year : {
                required : true,
            },
            gender : {
                required : true,
            }
        },
        messages : {
            fname : {
                required : "please enter the first name",
                minlength : "please enter at least 5 character"
            }
        }
    })
});