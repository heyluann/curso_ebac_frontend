$('form').on('submit', function(e) {
    e.preventDefault();
    const novaTarefa = $('#nova-tarefa').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<li id="decoration">${novaTarefa}</li>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(500);
    $('#nova-tarefa').val('')


})

const itemAdicionado = $('#decoration')

$(itemAdicionado).on('click', function() {
    alert('pls')
});