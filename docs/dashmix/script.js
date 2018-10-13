window.konsoleClear = container => {
  let $terminal = $('#' + container)
  $terminal.html('')
}

window.konsoleGroup = (container, groupName) => {
  let $terminal = $('#' + container)
  $terminal.append('<style>#' + container + ':before { content: "OUTPUT ' + groupName + '"; }</style>');
}

window.konsole = (container, type, title, value) => {
  let $terminal = $('#' + container)
  let $pre = $('<pre></pre>')

  if (type.trim() === 'boolean') {
  value = value ? 'true' : 'false'
  }

  $('<code></code>')
  .attr('data-type', 'title')
  .text(title)
  .appendTo($pre)

  $('<code></code>')
  .attr('data-type', type.trim())
  .text(type)
  .appendTo($pre)


  $('<code></code>')
  .attr('data-type', 'value')
  .text(value)
  .appendTo($pre)

  $pre.appendTo($terminal)
}

$(function () {
  $('.regate-example form').on('submit', function (e) {
    e.preventDefault();
    var $example = $(this).closest('.regate-example-container');
    var $serialize = $example.find('.regate-serialize');
    $serialize.html( $( this ).serialize() );
  });
});


function setSyntaxType(syntaxType) {
  $codeBlocks = $('.regate-code');
  $codeBlocks.hide();

  $codeBlocks
    .filter('[data-role="' + syntaxType + '"]')
    .show();

  $('.regate-code-changer .nav-link')
    .removeClass('active')
    .filter('[data-role="' + syntaxType + '"]')
      .addClass('active');
}

$(function () {
  setSyntaxType('JavaScript');
});

$(function () {
  $('.regate-code-changer .nav-link').on('click', function (e) {
    var syntaxType = $(this).attr('data-role');
    setSyntaxType(syntaxType);
  });
});