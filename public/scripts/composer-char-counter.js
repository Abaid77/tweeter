$(document).ready(function() {
  $(".new-tweet").on("input", "textarea", function(event) {
    //get the value of textarea and calculate the remaining characters.
    const $text = $(this).val();
    const $charsRemaining = 140 - $text.length;

    //go back up the dom to change the text on the counter
    
    const $counter = $(this).closest("form").find(".counter");
    $counter.text($charsRemaining);

    //turn the counter red when negative number
    if ($charsRemaining < 0) {
      $counter.addClass("fontRed");
    } else {
      $counter.removeClass("fontRed");
    }
  });
  
});
