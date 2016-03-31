// file: app/assets/javascripts/socket_chat.js
  // please type it yourself, do NOT copy & paste
  window.ws = new WebSocket("ws://" + window.document.location.host)
  ws.onmessage = function(message) {
  	// console.log(message.data)
  	var data = JSON.parse(message.data)
  	var messageHtml = data.content
    var contentMesssage = '<div class=\"talk-bubble tri-right left-top slideInUp\"><div class=\"talktext\"><p>' + messageHtml + '</p></div></div> <br>';
  	$(".messages").append(contentMesssage)
    // console.log("received: ", contentMesssage)
    $('.message-box').animate({scrollTop: $('.message-box').get(0).scrollHeight}, 1000);
  };

  function setupForm() {
    $("form#new_message").on("submit", function(event) {
      var content = $("#message_content").val();
      var user    = "fix later";
      ws.send(JSON.stringify({ content: content, user: user }));
      $("#message_content").val(null)

  }) };

  $(document).on("page:change", function(){
    setupForm();
  });