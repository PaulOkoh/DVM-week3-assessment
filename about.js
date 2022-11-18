console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("the form has been submitted");
}

function mouseOverDuck(ev) {
  if (ev.target.id === "rubber-duck") {
    alert("rubber duck says awesome job");
  }
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

let rubberDuck = document.querySelector("#rubber-duck");

rubberDuck.addEventListener("mouseover", mouseOverDuck);
