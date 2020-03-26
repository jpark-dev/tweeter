/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.


$(() => {
  const $tweetsContainer = $('#tweets');

  // loop through tweets and append to #tweets
  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $tweetsContainer.append($tweet);
    }
  };

  // create html element for each tweet in <article> tag
  const createTweetElement = (tweet) => {
    const $article = $('<article>').addClass('tweet');

    // header
    const $header = $('<header>').addClass('tweeter');

    // header > left
    const $headerLeft = $('<div>').addClass('left');
    const $img = $('<img>').attr('src', tweet.user.avatars);
    $headerLeft.append($img, tweet.user.name);

    // header > right
    const $headerRight = $('<div>').addClass('right');
    $headerRight.text(tweet.user.handle);

    // append all children to <header>
    $header.append($headerLeft, $headerRight);


    // tweet-text
    const $tweetText = $('<div>').addClass('tweet-text border-bottom');
    const $text = $('<h4>').text(tweet.content.text);
    $tweetText.append($text);

    // footer
    const $footer = $('<footer>');

    // footer > div[0] > date
    const $footerDate = $('<div>');
    const curTimeUnix = Date.now();
    const dateElapsed = ((curTimeUnix - tweet.created_at) / 86400000).toFixed(0);
    $footerDate.text(`${dateElapsed} days ago`);

    // moment.js as date js libary :)
    // fontAwesome :)

    // footer > div[1] > img
    const $footerImages = $('<div>');

    const $img1 = $('<img>').attr({
      src: 'images/icons8-repeat-20.png',
      alt: 'repeat image'
    });
    const $img2 = $('<img>').attr({
      src: 'images/icons8-heart-health-20.png',
      alt: 'heart image'
    });
    const $img3 = $('<img>').attr({
      src: 'images/icons8-empty-flag-20.png',
      alt: 'flag image'
    });
    $footerImages.append($img1, $img2, $img3);

    // append all children to <footer>
    $footer.append($footerDate, $footerImages);

    // append all to <article>
    $article.append($header, $tweetText, $footer);
    return $article;
  };

  // AJAX calls
  
  // get Ajax to load tweets and execute renderTweets()
  const loadTweets = () => {
    $.getJSON('/tweets')
      .done(data => {
        renderTweets(data);
      });
  };
  
  // post Ajax call to send tweet to server with validation
  $('#form-button').click((event) => {
    event.preventDefault();

    if ($('#counter')[0].value < 0 ) {
      $('#error').text('You can only tweet up to 140 letters!!');

    } else if ($('#tweet-text')[0].value === '' || $('#tweet-text')[0].value === null) {
      $('#error').text('You must share something to tweet!');

    } else {
      const $data = $('#tweet-form').serialize();
      $('#error').empty();
      $.post('/tweets', $data)
        .done(() => {
          loadTweets();
          resetForm();
        });
    }
  });

  const resetForm = () => {
    $('#tweet-text')[0].value = '';
    $('#counter')[0].value = 140;
  }

  // load Tweets when the document is ready
  loadTweets();

});

