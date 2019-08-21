function avvisa()
{
    alert('Time\'s up !!');
    // non worka l'audio
}


function sveglia()
{
    let ok = true;
    let ore = $('#ore').val();
    let minuti = $('#minuti').val();
    let secondi = $('#secondi').val();

    if(ore < 0 || ore > 23)
    {
        ok = false;
    }

    if(minuti < 0 || minuti > 59)
    {
        ok = false;
    }

    if(secondi < 0 || secondi > 59)
    {
        ok = false;
    }

    if(ok)
    {
        let msDaAspettare = ( (ore * 3600000) + (minuti * 60000) + (secondi * 1000));
        setTimeout(avvisa, msDaAspettare);
    }
    else
    {
        alert('Non devi inserire numeri negativi');
        $('.campo').val('0');
    }
    
}


$(document).ready(function()
{
    $('#salva').click(function()
    {
        sveglia();
    });
});