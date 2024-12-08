const $ = require( 'jquery' );
var _ = require('lodash');

$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');

$('body').append('<button>Click here to get started</button>');

$('body').append('<p id=\'count\'></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0

$.fn.updateCounter = function() {
  // count number of times the button element has been clicked.
  count++;
  $('#count').text(`${count} clicks on the button`)
};

$('button').on('click', _.debounce($.fn.updateCounter, 500))
