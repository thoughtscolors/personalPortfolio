document.addEventListener("DOMContentLoaded", function () {
  started()
})

var started = function () {
  let photos = document.getElementsByClassName("photos")
  console.log(photos);
  console.log("started OK");
  let left = photos[0];
  let right = photos[1];
  left.addEventListener("onmouseover", textOverlay);
  right.addEventListener("onmouseover", textOverlay);
}

var textOverlay = function (event) {
  let insert = document.getElementsByClassName("main-container")[0]
  console.log(insert);
  let div = document.createElement("div")
  div.classList.add("test")
  console.log(div);
  insert.appendChild(div);
}
