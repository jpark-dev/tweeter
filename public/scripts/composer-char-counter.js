$(() => {

  $('#tweet-text').on('keyup', function() {
    this.parentNode[2].value = 140 - this.value.length;
    if (this.parentNode[2].value < 0) {
      $(this.parentNode[2]).addClass("red");
      $('#error').text('You can only tweet up to 140 letters!!');
    } else {
      $(this.parentNode[2]).removeClass("red");
      $('#error').empty();
    }
  });

});