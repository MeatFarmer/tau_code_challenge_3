console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  var getJokes = function(){
    console.log( 'in getData' );
    $.ajax({
      type: 'GET',
      url: '/testGet',
      success: function( response ){
        console.log( 'back from get call:', response );
        $('#outputDiv').text(response);
      },
  });
};

  // make sure to add back in ajax function for add joke send
  $( '#addJokeButton' ).on( 'click', function(){
    console.log( 'addJokeButton on click');
    function clickedJoke() {
      var objectToSend = {
          jokeIn: $('#whoseJokeIn').val(),
          questionIn: $('#questionIn').val(),
          punchlineIn: $('#punchlineIn').val()
        };
        console.log('object to send', objectToSend);
      } // end clickedJoke function
    }); // end joke button on click
    getJokes();
  }); // end document.ready
