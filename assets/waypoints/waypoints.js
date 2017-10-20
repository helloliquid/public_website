var waypoint1 = new Waypoint({
  element: document.getElementById('waypoint1'),
  handler: function(direction) {
    if (direction=="down") {
    document.getElementById('Product-image-1').src='assets/img/Desktop-img-2.png';
  } else if (direction=="up") {
    document.getElementById('Product-image-1').src='assets/img/Desktop-img-1.png';
  }
    console.log("waypoint1: "+direction);
  }
});

var waypoint2 = new Waypoint({
  element: document.getElementById('waypoint2'),
  handler: function(direction) {
    if (direction=="down") {
    document.getElementById('Product-image-1').src='assets/img/Desktop-img-3.png';
  } else if (direction=="up") {
    document.getElementById('Product-image-1').src='assets/img/Desktop-img-2.png';
  }
    console.log("waypoint2: "+direction);
  }
});

var waypoint3 = new Waypoint({
  element: document.getElementById('waypoint3'),
  handler: function(direction) {
    if (direction=="down") {
    document.getElementById('Product-image-1').src='assets/img/Desktop-img-4.png';
  } else if (direction=="up") {
    document.getElementById('Product-image-1').src='assets/img/Desktop-img-3.png';
  }
    console.log("waypoint3: "+direction);
  }
});
