function textToPage() {
  var input = document.querySelector("#postIt").value
  console.log(input)
  var post = document.querySelector("#change")
  post.innerHTML = "Hello, " + input + " welcome home! "
}
// contact me pop up
function contactMe() {
  alert("Well hello! I see you want to talk!\nSend me a message on discord and let me know whats on your mind.")
}