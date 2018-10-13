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
  $codeBlocks = $('[data-content-type] .regate-code');
  $codeBlocks.hide();

  $codeBlocks
    .filter('[data-role="' + syntaxType + '"]')
    .show();

  $('[data-content-type] .regate-code-changer .nav-link')
    .removeClass('active')
    .filter('[data-role="' + syntaxType + '"]')
      .addClass('active');

  $('[data-content-type]')
    .hide()
    .filter('[data-content-type~="' + syntaxType + '"]')
      .show();
}

function setDefaultSyntax() {
  if (typeof localStorage === typeof undefined)
    setSyntaxType('JavaScript')

  var syntax = localStorage.getItem('syntax') || 'JavaScript'
  setSyntaxType(syntax)
}

$(function () {
  $('[data-content-type] .regate-example-container').each(function () {
    var $example = $(this);
    var $codeChanger = $('<div></div')
      .addClass('regate-code-changer')

    var $ul = $('<ul></ul>')
      .addClass('nav nav-tabs nav-tabs-alt')

    var $syntaxRoles = $example.find('.regate-code')
    $syntaxRoles.each(function () {
      var $syntaxRole = $(this);
      var syntaxType = $syntaxRole.attr('data-role');
      var $li = $('<li></li>').addClass('nav-item');
      var $text = $('<span></span>')
        .addClass('nav-link')
        .attr('data-role', syntaxType)
        .text(syntaxType);

      $text.appendTo($li);
      $li.appendTo($ul);
    });

    $ul.appendTo($codeChanger)
    $codeChanger.insertBefore($syntaxRoles.get(0))
  });
});

$(function () {
  $('[data-content-type] .regate-code-changer .nav-link').on('click', function (e) {
    var syntaxType = $(this).attr('data-role');
    setSyntaxType(syntaxType);

    if (typeof localStorage !== typeof undefined) {
      localStorage.setItem('syntax', syntaxType);
    }
  });
});



$(function () {
  setDefaultSyntax();
});