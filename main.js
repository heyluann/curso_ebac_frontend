$('form').on('submit', function(e) {
    e.preventDefault();
    const novaTarefa = $('#nova-tarefa').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<li id="decoration">${novaTarefa}</li>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(500);
    $(novoItem).click(function() {
        $(this).addClass('riscar');
    });
    $('#nova-tarefa').val('')


})
