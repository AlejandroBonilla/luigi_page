$(function () {
    //modal
    $("#submit_form").click(function(event){
        event.preventDefault();

        $('#send_success').modal('show');
    })

    //toltip
    $('[data-toggle="tooltip"]').tooltip()
});