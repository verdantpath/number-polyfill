yepnope({
  test: Modernizr.inputtypes.number,
  nope: ['js/numPolyfill.js', 'css/numbers.css'],
  complete: function() {
    console.log('YepNope + Modernizr are done');
  }
});
