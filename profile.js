let btnsList = document.querySelector("#place");

function alertMessage(event) {
  console.log(event.target.id);
}

btnsList.addEventListener("click", alertMessage);
