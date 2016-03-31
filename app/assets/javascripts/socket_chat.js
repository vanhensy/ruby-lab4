// file: app/assets/javascripts/socket_chat.js
  // please type it yourself, do NOT copy & paste
  window.ws = new WebSocket("ws://" + window.document.location.host)
  ws.onmessage = function(message) {
  	console.log(message.data)
  	var data = JSON.parse(message.data)
  	var messageHtml = data.content
  	$(".messages").append("<p>" + messageHtml + "</p>")
    console.log("received: ", messageHtml)
  };

  function setupForm() {
    $("form#new_message").on("submit", function(event) {
      event.preventDefault();
      var content = $("#message_content").val();
      var user    = "fix later";
      ws.send(JSON.stringify({ content: content, user: user }));
      $("#message_content").val('')
  }) };

  $(document).on("page:change", function(){
    setupForm();
  });