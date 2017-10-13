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
