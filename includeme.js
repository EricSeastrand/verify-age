$(function(){
    var modal = $('.birthdate-verification').dialog({closeOnEscape: false, title: "Enter Birthdate", modal: true});
    $('.ui-dialog-titlebar-close').remove();
    $('.birthdate-verification').on('keyup', check_birthdate);

    $('.birthday-continue-link').on('click', function(){ modal.dialog('close'); } );
});

function years2milliseconds(years){
    return years * 86400 * 365 * 1000;
}


function check_birthdate(){
    var month = $('.birthday-month').val();
    var day = $('.birthday-day').val();
    var year = $('.birthday-year').val();
    
    if(!month || !day || year.length < 4) return;
    
    var birthdate = new Date();
    
    birthdate.setFullYear(year);
    birthdate.setMonth(month, day);
    
    var now = new Date().getTime();
    var eighteenyearsago = new Date(
        now - years2milliseconds(18)
     );
        
    if(eighteenyearsago < birthdate) {
        $('.birthday-rejected-link').show();
        $('.birthday-continue-link').hide();
        $('.birthday-verification-age').text( birthdate.getFullYear() + 18 )
        console.log(now, eighteenyearsago, birthdate);
    } else {
        $('.birthday-continue-link').show();
        $('.birthday-rejected-link').hide();
    }
}

