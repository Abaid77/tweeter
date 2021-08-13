/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // Puts focus onto text area upon load

  $(".new-tweet").find("textarea").focus();

  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: (tweets) => {
        renderTweets(tweets);
      },
      error: (err) => {
        console.err(err);
      }
    });
  };
  loadTweets();

  const renderTweets = function(tweets) {

    const $tweetContainer = $('.tweets');
    $tweetContainer.empty();
    
    // loops through tweets
    for (const tweet of tweets) {
      
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(tweet);
      
      // takes return value and appends it to the tweets container
      $(".tweets").prepend($tweet);
    }
  };

  const createTweetElement = (tweet) => {
    
    // function for escaping text
    const escape = function(str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    const tweetCreated = timeago.format(tweet.created_at);
    const $tweet = (`
      <article>
        <header>
          <h2>
            <img src="${escape(tweet.user.avatars)}" alt="Icon face"> ${escape(tweet.user.name)}
          </h2>
          <span>${escape(tweet.user.handle)}</span>
        </header>
        <p>${escape(tweet.content.text)}</p>
        <hr size="8" width="90%" color="black">
        <footer>
          <span>${tweetCreated}</span>
          <span class="icons"><i class="fas fa-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i></span>
        </footer>
      </article>`);
    return $tweet;
  };

  // Event Handler for Form Submit

  const $form = $('#tweet-composer');
  $form.on('submit', function(event) {
    
    //remove browser defualt behaviour
    event.preventDefault();

    // serialize the data
    const serializedData = $(this).serialize();

    //Get data from textarea
    const $text = $(this).closest("form").find("textarea");
    const $textLength = $text.val().length;

    // Data for reseting the counter

    const $counter = $(this).closest("form").find(".counter");
    
    //Get data for error message

    const $errorMessage = $(this).closest("form").find(".error-message-off");

    // Reset error message text if needed

    $errorMessage.text("").slideUp("slow");

    // Checks for blanks or to many characters if none serialize data and submit
    
    if ($text.val() === "" || $text.val() === null) {
      $errorMessage.text("Your message is empty!").slideDown("slow");
      $text.focus();
    } else if ($textLength > 140) {
      $errorMessage.text(`Your message is to long!`).slideDown("slow");
      $text.focus();
    } else {
      //Post data and loadTweets
      $.post('/tweets', serializedData).then(loadTweets);

      // clear textarea, reset counter
      
      $text.val("").focus();
      $counter.text("140");
    }

    
  });

  //Have the comepose button make the new-tweet toggle between hidden and shown. Reset focus to textarea

  const $compose = $('#composeButton');
  
  $compose.on('click', function() {
    $(".new-tweet").slideToggle("slow");
    $(".new-tweet").find("textarea").focus();
  });

  // Function to check for scrolling and show button to allow user to go back to top

  
});

$(function() {
  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() - 200 > 0) {
        $('#to-top').stop().slideDown('fast'); // show the button
      } else {
        $('#to-top').stop().slideUp('fast'); // hide the button
      }
    });

    $("#to-top").on("click", function () {
      $("html, body").animate({
        scrollTop: 0
      }, 200);
    });
  });

});
