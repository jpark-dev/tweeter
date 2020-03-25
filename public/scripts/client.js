/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


const createTweetElement = (tweet) => {
  const $article = $('<article>').addClass('tweet');
  
  // header
  const $header = $('<header>').addClass('tweeter');
  // header > left
  const $left = $('<div>').addClass('left');
  const $img = $('<img>').attr('src', `${tweet.user.avatars}`);
  $left.append($img);
  $left.append(`${tweet.user.name}`)
  // header > right
  const $right = $('<div>').addClass('right');
  $right.text(`${tweet.user.handle}`);

  // append all children to <header>
  $header.append($left, $right);


  // tweet-text
  const $tweetText = $('<div>').addClass('tweet-text border-bottom');

  const $text = $('<h4>').text(`${tweet.content.text}`);
  $tweetText.append($text);

  // footer
  const $footer = $('<footer>');

  // footer > div[0]
  const $divDate = $('<div>');
  const curTimeUnix = Date.now();
  const timeElapsed = curTimeUnix - `${tweet.created_at}`;
  const dateElapsed = (timeElapsed / 86400000).toFixed(0);
  $divDate.text(`${dateElapsed} days ago`);

  const $divImages = $('<div>');

  // footer > div[1] > img
  const $img1 = $('<img>').attr('src', 'images/icons8-repeat-20.png');
  $img1.attr('alt', 'repeat image');
  const $img2 = $('<img>').attr('src', 'images/icons8-heart-health-20.png');
  $img2.attr('alt', 'heart image');
  const $img3 = $('<img>').attr('src', 'images/icons8-empty-flag-20.png');
  $img3.attr('alt', 'flag image');
  $divImages.append($img1, $img2, $img3);

  // append all children to <footer>
  $footer.append($divDate, $divImages);

  // append all to <article>
  $article.append($header, $tweetText, $footer);
  return $article;
};

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like

$(() => {
  $('#tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});
$('#tweets').text('helllo');
