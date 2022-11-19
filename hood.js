let randomBtn = document.querySelector("#picker");

let places = document.querySelectorAll(".places");

let h3 = document.querySelector("h3");

const pickRandomSpot = () => {
  let choiceIndex = Math.floor(Math.random() * places.length);
  return (h3.textContent = `You chose ${places[choiceIndex].textContent}, enjoy it!`);
};

randomBtn.addEventListener("click", pickRandomSpot);
