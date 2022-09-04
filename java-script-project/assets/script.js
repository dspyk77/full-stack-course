function textToPage() {
  var input = document.querySelector("#postIt").value
  console.log(input)
  var post = document.querySelector("#change")
  post.innerHTML = "Hello, " + input + " welcome home! "
}