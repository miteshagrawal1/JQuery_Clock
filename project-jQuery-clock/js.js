$(document).ready(function () {

    function time() {

        var newdate = new Date();
        var hour = newdate.getHours();
        var minutes = newdate.getMinutes();
        var second = newdate.getSeconds();
        var ampm = "PM";

        if(hour<10){
            hour = '0'+hour;
        }
        if(minutes<10){
            minutes = '0'+minutes;
        }
        if(second<10){
            second = '0'+second;
        }

        if(hour>12){
            ampm = "PM";
        }
        else{
            ampm = "AM";
        }

        $('#hr').text(hour);
        $('#min').text(minutes);
        $('#sec').text(second);
        $('#ampmsec').html(ampm)

        setTimeout(time, 1000);
    }

    time();

})