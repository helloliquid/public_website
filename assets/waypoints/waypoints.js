var waypoint = new Waypoint({
  element: document.getElementById('waypointtest'),
  handler: function(direction) {
    if (direction=="down") {
    $( ".Desktop-product-image-block" ).css( "visibility", "hidden");
  } else if (direction=="up") {
    $( ".Desktop-product-image-block" ).css( "visibility", "visible");
  }
    console.log(direction);
  }
})
