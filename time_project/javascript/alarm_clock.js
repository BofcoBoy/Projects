function wakeUp()
{
    alert('Wake up !!');
    $('.campo').val('0');
    // no audio
}


function alarm()
{
    let ok = true;
    let hours = $('#hours').val();
    let minutes = $('#minutes').val();
    let seconds = $('#seconds').val();

    console.log(hours);

    if(hours < 0 || hours > 23)
    {
        ok = false;
    }

    if(minutes < 0 || minutes > 59)
    {
        ok = false;
    }

    if(seconds < 0 || seconds > 59)
    {
        ok = false;
    }

    if(ok)
    {
        let ms = ( (hours * 3600000) + (minutes * 60000) + (seconds * 1000));
        setTimeout(wakeUp, ms);
    }
    else
    {
        alert('No negative numbers.');
        $('.campo').val('0');
    }
    
}


$(document).ready(function()
{
    $('#save').click(function()
    {
        alarm();
    });
});