$(function(){

  $('#subscribe-btn').on('click', (event) => {
    event.preventDefault();
    let $form = $('#mailchimp-form');
    $.ajax({
      type: 'GET',
      url: $form.attr('action'),
      data: $form.serialize(),
      crossDomain: true,
      dataType:'jsonp',
      success: function(result) {
        dealtWithResult(result);
        }
      });
    });
});

const dealtWithResult = (result) => {
  let $mcSpan = $('#mc-msg');
  if(result.result == 'success') {
    $mcSpan.text('Thanks means a lot.')
  } else {
    let msg = result.msg.split('-')[1]
    $mcSpan.text(msg)
  }
}
