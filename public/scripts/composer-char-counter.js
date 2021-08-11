$(document).ready(function() {
  $(".new-tweet").on( "input", "textarea" , function(event) {
    //get the value of textarea and calculate the remaining characters.
    let $text = $(this).val();
    let $charsRemaining = 140 - $text.length;
    console.log("test")

    //go back up the dom to change the text on the counter
    
    $counter = $(this).closest("form").find(".counter")
    $counter.text($charsRemaining);

    //turn the counter red when negative number
    if ($charsRemaining < 0) {
      $counter.addClass("fontRed");
    } else {
      $counter.removeClass("fontRed");
    }
  })
  
});
