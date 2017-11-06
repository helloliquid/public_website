// Alignment

$( window ).ready(function() {
  console.log("Ready: "+window.innerHeight);
  $( '#Product-image-1' ).css( "padding-top", ((window.innerHeight-689)/2)+"px" );
  $( '.Desktop-product-image-block' ).css( "visibility", "visible" );
  $( '.Desktop-product-image-block' ).css( "display", "inline" );
  $( '.content-footer' ).css( "margin-top", (window.innerHeight-526)+"px" );
});

$( window ).resize(function() {
  console.log(window.innerHeight);
  $( '#Product-image-1' ).css( "padding-top", ((window.innerHeight-689)/2)+"px" );
  $( '.content-footer' ).css( "margin-top", (window.innerHeight-526)+"px" );
});

// Signup Form
$(window).ready(function() {
  $('form#signup-form').on('submit', function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    var $form = $(this);

    $.ajax({
      url: 'https://api.helloliquid.com/users',
      data: JSON.stringify({
        email: $(this).find('#signup-form-email').val(),
      }),
      contentType: 'application/json; charset=UTF-8',
      dataType: 'json',
      type: 'POST',
      success: function(data) {
        window.location.href('https://app.helloliquid.com/signup/success');
      },
      error: function(data) {
        var errors,
            htmlText = "";

        if (data.status === 422) {
          errors = data.responseJSON.errors;
        } else {
          errors = ["There was a problem"];
        }
        errors.forEach(function(error) {
          htmlText += "<div>"+error+"</div>";
        });

        $form.tooltip({
          trigger: 'manual',
          html: true,
          title: htmlText,
        });
        $form.tooltip('show');
        $form.one('keydown', function() {
          $form.tooltip('destroy');
        });
      }
    });
  });
})
