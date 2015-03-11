$(document).ready(function() {

  var iterations = 1000;
  var size = 10;
  var startColor = '#BB262F';

  var input = $('input');
  var button = $('button');
  var lastColor = startColor;

  var pad = function(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  var createBoxes = function() {
    var hex = lastColor.replace('#', '');
    var decimal = Math.ceil(parseInt(hex, 16));

    jQuery('<div/>')
    .css('background-color', lastColor)
    .css('width', size)
    .css('height', size)
    .css('display', 'inline-block')
    .appendTo('.content');

    var halfColor = Math.ceil(decimal/2);
    lastColor = '#' + pad(halfColor.toString(16), 6);

    if(halfColor > 1) createBoxes();
  }

  button.click(function() {
    // If we have input
    if(input.val().length > 0) {
      lastColor = input.val();
    }

    // Create the boxes
    createBoxes();
  });

  for(i=0; i<=iterations; i++) {
    createBoxes();
    lastColor = startColor;
  }
});
