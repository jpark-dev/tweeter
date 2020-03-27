# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

From the starter for the code, I have built upon it to practice my HTML, CSS, JS, jQuery and AJAX front-end skills, along with my Node, Express and back-end JS skills.

## Final Product

Tweeter starts with clicking the tweet button on the top right side of the navigation bar.

!["Tweeter starts with clicking new tweet button to reveal new tweet form"](https://github.com/zeipar/tweeter/blob/master/docs/01_Click.png)

With the newly appeared tweeter input form, you can tweet up to 140 characters.
!["With the newly appeared tweeter input form, you can tweet up to 140 characters."](https://github.com/zeipar/tweeter/blob/master/docs/02_NewTweet.png)

The character counter simultaneously reflects the remaining number of characters you can tweet.
!["The character counter simultaneously reflects the remaining number of characters you can tweet."](https://github.com/zeipar/tweeter/blob/master/docs/03_Counter.png)

If you tweet more than 140 characters, you'll see an error message and your valuable message won't be shared.
!["If you tweet more than 140 characters, you'll see an error message and your valuable message won't be shared."](https://github.com/zeipar/tweeter/blob/master/docs/04_OverLimit.png)

Deleting a few characters will let you safely share your winsdom, words... all the fun stuff!
!["Deleting a few characters will let you safely share your winsdom, words... all the fun stuff!"](https://github.com/zeipar/tweeter/blob/master/docs/05_Only140.png)

Once successfully submited, your tweet will appear on the top of tweets without being redirected... AJAX!
!["Once successfully submited, your tweet will appear on the top of tweets without being redirected... AJAX!"](https://github.com/zeipar/tweeter/blob/master/docs/06_Ajax.png)

...and built as a responsive app that will change its appearance as it shrinks or grows!
!["...and built as a responsive app that will change its appearance as it shrinks or grows!"](https://github.com/zeipar/tweeter/blob/master/docs/07_Responsive.png)

Unfortunately, trying to tweet something like  <script>alert('haha')</script>, or leaving it empty is strictly forbidden!
!["Unfortunately, trying to tweet something like  <script>alert('haha')</script>, or leaving it empty is strictly forbidden!"](https://github.com/zeipar/tweeter/blob/master/docs/08_Validations.png)

## Dependencies

- Express 4.13.4 or above
- Node 5.10.x or above
- body-parser 1.15.2 or above
- chance 1.0.2 or above
- md5 2.1.0 or above

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Known Issues

- N/A at this moment


