// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours;

    minutes = minutes < 10 ? '0' + minutes : minutes;

    var strTime = hours + ":" + minutes + ' ' + ampm;
    return date.getFullYear() + "/" + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) :
        (date.getMonth() + 1)) + "/" + (date.getDate() < 10 ? "0" + date.getDate() :
            date.getDate()) + " " + strTime;
}


$('#karislastir').on('click', function () {
    var date_today = new Date();
    var formated_date = formatDate(date_today);//Calling formatDate Function

    var input_date = $('#date').val();

    var currentDateTime = new Date(Date.parse(formated_date));
    var inputDateTime = new Date(Date.parse(input_date));
    $('#simdikitarih').val(currentDateTime);
    if (inputDateTime <= currentDateTime) {
        $('#sonuc').val('girilen değer küçük yada eşit');
    } else {
        $('#sonuc').val('Girilen değer büyük');
    }
});
