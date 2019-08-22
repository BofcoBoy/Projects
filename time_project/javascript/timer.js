var hours = '00';
var minutes = '00';
var seconds = '00';

function start()
{
    seconds++;

    if(seconds < 10)
    {
        seconds = '0' + seconds;
    }

    if(seconds == 60)
    {
        minutes++;
        if(minutes < 10)
        {
            minutes = '0' + minutes;
        }

        seconds = '00';
    }

    if(minutes == 60)
    {
        hours++;
        if(hours < 10)
        {
            hours = '0' + hours;
        }
        minutes = '00';
    }

    $('#time').text(hours + ':' + minutes + ':' + seconds);

}

function end(myInterval)
{
    clearInterval(myInterval);
}


function reset(myInterval)
{
    clearInterval(myInterval);
    $('#time').text('00:00:00');
    hours = '00';
    minutes = '00';
    seconds = '00';
}


$(document).ready(function()
{

    var myInterval = 0;

    $('#start').click(function()
    {
        myInterval = setInterval(function(){ start(); }, 1000);
    });

    $('#stop').click(function()
    {
        end(myInterval);
        
    });

    $('#reset').click(function()
    {
        reset(myInterval);
    });

});