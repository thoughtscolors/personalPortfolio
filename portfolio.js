document.addEventListener("DOMContentLoaded", function (event) {
  started()
})

var started = function (event) {
  let photos = document.getElementsByClassName("photos")
  console.log(photos);
  console.log("started OK");
  let left = photos[0];
  let right = photos[1];
  left.addEventListener("mouseover", textOverlay);
  right.addEventListener("mouseover", textOverlay);
}

var textOverlay = function (event) {
  let insert = document.getElementsByClassName("photos")[0]
  console.log(insert);
  let div = document.createElement("div")
  div.classList.add("test")
  console.log(div);
  insert.append(div);
}
