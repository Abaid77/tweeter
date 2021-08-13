# Tweeter Project

Tweeter is a simple, single-page Twitter clone completed by Amit Baid.

This repository was created using starter code from Lighthouse Labs. I have cloned there starter repository and used it to practice HTML, CSS, jQuery and AJAX front end skills, and my Node, Express and MongoDB back-end skills.

## Changes Made

From the starter repository I have added the following display functionality:
- Ensured that the app is a client-side Single Page App (SPA)
- Communicates with the server via AJAX
- Nav Bar:
  - is fixed to the top
  - has padding on both side
  - contains the write new tweet button
- New Tweet Box:
  - is displayed above the list of tweets
  - contains a form for submitting tweets, which itself contains:
    - a textarea for new tweet content
    - a left aligned button for submitting tweets
  - contains a Character Counter, right-aligned, which by default shows 140
- List of Tweets:
  - displays tweets in reverse-chronological order (that is, by creation time descending)
- Individual Tweets have a:
  - header, which contains the user's:
    - avatar, on the left
    - name, on the left and after the avatar
    - handle, on the right
  -  body, which contains the tweet text
  - footer, which displays:
    - how long ago the tweet was created, on the left
    - "Flag", "Re-tweet" and "Like" action icons on the right
- Responsive Design that:
  - scales for mobile/tablet/desktop using CSS and media query

I have also added the following behaviour:
- Individual Tweets
  - When the user hovers over a tweet, that tweet should display a box shadow.
- Action Icons
  - When the user hovers over an icon ("Flag", "Re-tweet" and "Like") the icon should change colour.
- Character Counter
  - When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)
  - The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)
- Compose Tweet
  - When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed
  - When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140).

  Lastly I was able to complete all the stretch goals as follow:
  - Navigation Bar
    - When a user clicks the Compose button in the Navigation Bar:
      - if the Compose Tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused
      - if the Compose Tweet box is currently showing, then it is hidden
      - in either case, transitions between 'shown' and 'hidden' states are animated
  - Second Toggle Button
    - When a user scrolls a second button appears in the lower right hand corner:
      - if the user clicks this button they are brought back up to the top of the page

    


## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
