let colorBtn = document.querySelector("#color");
let placeBtn = document.querySelector("#place");
let ritualBtn = document.querySelector("#ritual");

function alertMessage(event) {
  if (event.target.id === "color") {
    alert(`my favorite color is blue`);
  } else if (event.target.id === "place") {
    alert(`my favorite place is Amsterdam`);
  } else if (event.target.id === "ritual") {
    alert(`favorite ritual: cup of tea in the morning`);
  }
}

colorBtn.addEventListener("click", alertMessage);
placeBtn.addEventListener("click", alertMessage);
ritualBtn.addEventListener("click", alertMessage);
