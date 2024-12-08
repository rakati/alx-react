const $ = required( 'jquery' );

$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');

$('body').append('<button>Click here to get started</button>');

$('body').append('<p id=\'count\'></p>');
$('body').append('<p>Copyright - ALX</p>');
let count = 0
(function( $ ){
  $.fn.updateCounter() = function() {
    // count number of times the button element has been clicked.
    count++;
    $('#count').text(`${count} clicks on the button`)
  };
});

$('button').on('click', _debounce(updateCounter))
