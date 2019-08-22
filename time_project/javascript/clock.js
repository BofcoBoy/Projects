function time()
{
    let date = new Date();
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();

    if(hours.length == 1)
    {
        hours = '0' + hours;
    }
    if(minutes.length == 1)
    {
        minutes = '0' + minutes;
    }
    if(seconds.length == 1)
    {
        seconds = '0' + seconds;
    }
    if(month.length == 1)
    {
        month = '0' + month;
    }
    if(day.length == 1)
    {
        day = '0' + day;
    }
    
    $('#time').text(day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds);
}


setInterval(function(){ time(); }, 1000);

