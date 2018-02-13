// Alignment

$( window ).ready(function() {
  console.log("Ready: "+window.innerHeight);
  $( '#Product-image-1' ).css( "padding-top", ((window.innerHeight-689)/2)+"px" );
  $( '.Desktop-product-image-block' ).css( "visibility", "visible" );
  $( '.Desktop-product-image-block' ).css( "display", "inline" );
  if (window.innerHeight > 649) {
    $( '.adaptMargin' ).css( "margin-top", (window.innerHeight-690)+"px");
  } else {
    $( '.col-md-6 h1' ).css( "margin-top", "90px");
    $( '.adaptMargin' ).css( "margin-top", "0px");
  }
  // $( '.content-footer' ).css( "margin-top", (window.innerHeight-526)+"px" );
});

$( window ).resize(function() {
  console.log(window.innerHeight);
  $( '#Product-image-1' ).css( "padding-top", ((window.innerHeight-689)/2)+"px" );
  $( '.content-footer' ).css( "margin-top", (window.innerHeight-526)+"px" );
  $( '.adaptMargin' ).css( "margin-top", (window.innerHeight-690)+"px");
  if (window.innerHeight > 649) {
    $( '.col-md-6 h1' ).css( "margin-top", "120px");
    $( '.adaptMargin' ).css( "margin-top", (window.innerHeight-690)+"px");
  } else {
    $( '.col-md-6 h1' ).css( "margin-top", "90px");
    $( '.adaptMargin' ).css( "margin-top", "0px");
  }
});

// Signup Form
$(window).ready(function() {
  $('form#signup-form').on('submit', function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    var $form = $(this),
        email = $form.find('#signup-form-email').val();

    // track mixpanel event
    mixpanel.track('Input signup email');

    // set super properties
    var d = new Date();
    mixpanel.register({
      "Last Input signup email": d.toISOString(),
      "email": email,
    });

    $.ajax({
      url: 'https://api.helloliquid.com/users',
      data: JSON.stringify({
        email: $(this).find('#signup-form-email').val(),
      }),
      contentType: 'application/json; charset=UTF-8',
      dataType: 'json',
      type: 'POST',
      success: function(data) {
        var dd = new Date();
        mixpanel.alias(email);
        mixpanel.people.set({ "$email": email, "$created": dd.toISOString() });
        window.location = 'https://app.helloliquid.com/signup/success';
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
