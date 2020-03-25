/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

$(() => {
  const $tweetsContainer = $('#tweets');

  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $tweetsContainer.append($tweet);
    }
  };


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

  renderTweets(data);

  // AJAX calls
  $('#form-button').click((event) => {
    event.preventDefault();

    const $data = $('#tweet-form').serialize();
    $.post('/tweets', $data)
      .done(data => {
        console.log('data: ', data);
      })

  });

});

