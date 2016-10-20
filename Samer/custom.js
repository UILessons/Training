// console.log($ == jQuery);
$(document).ready(function() {
  // $('#box');
  // $('.empty');
  // $('div').html('My jquery');

  // function abc() {
  //   console.log('Read');
  // }
  // abc();

  // var getHrefText = $('a').text();
  // console.log(getHrefText);
  //
  // $('a').text('Go to Yahoo');
  // var newText = $('a').text();
  // console.log(newText);

  // function calc() {
  //   //document.getElementById('goto').innerHTML = 'Go to Yahoo';
  //   $('#goto').html('Go to Yahoo');
  // }
  // $('button').click(function() {
  //   calc();
  // })

  //Dom document object model
  var hyperLink = $('a');

  hyperLink.click(function(e) {
    e.preventDefault();
    var c = 2 + 1;
    console.log(c);

    var x = 2;
    function mySquare(x) {
      return x * x;
    }
    console.log(mySquare(x)); // See this returned value in console
    var collectTheReturnedValue = mySquare(x); // store the collected value in a variable and x value is coming from the above variable on line #32
    $('#returnValue').html(collectTheReturnedValue); // Printing this collected value using html tag in jquery
  });


  // Positioning the html element by using the window click

  // hyperLink.click(function(e) {
  //   hyperLink.css({
  //     top: e.clientY,
  //     left: e.clientX
  //   });
  //   e.preventDefault();
  // });











});
