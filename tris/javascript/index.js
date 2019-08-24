function chiGioca(i)
{
    if(i % 2 == 0)
    {
        return 'X';
    }
    else
    {
        return 'O';
    }
}


function vinci()
{
    if( ($('#1A').text() == 'X' && $('#2A').text() == 'X' && $('#3A').text() == 'X') || ($('#1B').text() == 'X' && $('#2B').text() == 'X' && $('#3B').text() == 'X') || ($('#1C').text() == 'X' && $('#2C').text() == 'X' && $('#3C').text() == 'X') || ($('#1A').text() == 'X' && $('#1B').text() == 'X' && $('#1C').text() == 'X') || ($('#2A').text() == 'X' && $('#2B').text() == 'X' && $('#2C').text() == 'X') || ($('#3A').text() == 'X' && $('#3B').text() == 'X' && $('#3C').text() == 'X') || ($('#1A').text() == 'X' && $('#2B').text() == 'X' && $('#3C').text() == 'X') || ($('#3A').text() == 'X' && $('#2B').text() == 'X' && $('#1C').text() == 'X'))
    {
        return 'X';
    }

    if( ($('#1A').text() == 'O' && $('#2A').text() == 'O' && $('#3A').text() == 'O') || ($('#1B').text() == 'O' && $('#2B').text() == 'O' && $('#3B').text() == 'O') || ($('#1C').text() == 'O' && $('#2C').text() == 'O' && $('#3C').text() == 'O') || ($('#1A').text() == 'O' && $('#1B').text() == 'O' && $('#1C').text() == 'O') || ($('#2A').text() == 'O' && $('#2B').text() == 'O' && $('#2C').text() == 'O') || ($('#3A').text() == 'O' && $('#3B').text() == 'O' && $('#3C').text() == 'O') || ($('#1A').text() == 'O' && $('#2B').text() == 'O' && $('#3C').text() == 'O') || ($('#3A').text() == 'O' && $('#2B').text() == 'O' && $('#1C').text() == 'O'))
    {
        return 'O';
    }

    return null;
}


function win(vittoria, turno)
{
    if(vittoria == 'X')
    {
        alert('Congratulations X, you won!');
        window.location.reload();
    }

    if(vittoria == 'O')
    {
        alert('Congratulations O, you won!');
        window.location.reload();
    }

    if(vittoria == null && turno == 9)
    {
        alert('Nobody won!');
        window.location.reload();
    }
}

$(document).ready(function()
{
    var i = -1;
    console.log(i);
    var segno = '';

    segno = chiGioca(++i);

    var valore = $('#1A').text();
    console.log(valore);
    var turno = 0;

    $('button').click(function()
    {
        $('p').show();
        $('p').text('Player: ' + segno);

        $('#1A').click(function()
        {
            if($('#1A').text() == '')
            {
                segno = chiGioca(i);
                $('#1A').text(segno);
                segno = chiGioca(++i);
                $('p').text('Player: ' + segno);
                turno++;
            } 

            var vittoria = vinci();
            console.log('v ' + vittoria);
            win(vittoria, turno);
        });

        $('#2A').click(function()
        {
            if($('#2A').text() == '')
            {
                segno = chiGioca(i);
                $('#2A').text(segno);
                segno = chiGioca(++i);
                $('p').text('Player: ' + segno);
                turno++;
            }
            
            var vittoria = vinci();
            console.log('v ' + vittoria);
            win(vittoria, turno);
        });

        $('#3A').click(function()
        {
            if($('#3A').text() == '')
            {
                segno = chiGioca(i);
                $('#3A').text(segno);
                segno = chiGioca(++i);
                $('p').text('Player: ' + segno);
                turno++;
            }

            var vittoria = vinci();
            console.log('v ' + vittoria);
            win(vittoria, turno);
            
        });

        $('#1B').click(function()
        {
            if($('#1B').text() == '')
            {
                segno = chiGioca(i);
                $('#1B').text(segno);
                segno = chiGioca(++i);
                $('p').text('Player: ' + segno);
                turno++;
            }

            var vittoria = vinci();
            console.log('v ' + vittoria);
            win(vittoria, turno);
            
        });

        $('#2B').click(function()
        {
            if($('#2B').text() == '')
            {
                segno = chiGioca(i);
                $('#2B').text(segno);
                segno = chiGioca(++i);
                $('p').text('Player: ' + segno);
                turno++;
            }

            var vittoria = vinci();
            console.log('v ' + vittoria);
            win(vittoria, turno);
            
        });

        $('#3B').click(function()
        {
            if($('#3B').text() == '')
            {
                segno = chiGioca(i);
                $('#3B').text(segno);
                segno = chiGioca(++i);
                $('p').text('Player: ' + segno);
                turno++;
            }

            var vittoria = vinci();
            console.log('v ' + vittoria);
            win(vittoria, turno);
            
        });


        $('#1C').click(function()
        {
            if($('#1C').text() == '')
            {
                segno = chiGioca(i);
                $('#1C').text(segno);
                segno = chiGioca(++i);
                $('p').text('Player: ' + segno);
                turno++;
            }

            var vittoria = vinci();
            console.log('v ' + vittoria);
            win(vittoria, turno);
            
        });

        $('#2C').click(function()
        {
            if($('#2C').text() == '')
            {
                segno = chiGioca(i);
                $('#2C').text(segno);
                segno = chiGioca(++i);
                $('p').text('Player: ' + segno);
                turno++;
            }

            var vittoria = vinci();
            console.log('v ' + vittoria);
            win(vittoria, turno);
            
        });

        $('#3C').click(function()
        {
            if($('#3C').text() == '')
            {
                segno = chiGioca(i);
                $('#3C').text(segno);
                segno = chiGioca(++i);
                $('p').text('Player: ' + segno);
                turno++;
            }

            var vittoria = vinci();
            console.log('v ' + vittoria);
            win(vittoria, turno);
            
            
        });
    });
});
