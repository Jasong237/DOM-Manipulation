const DOMSelectors = {
  header: document.querySelector("h1"),
  cardHeader: document.querySelector(".card-header"),
  cardImg: document.querySelector(".card-img"),
  cardAuthor: document.querySelector(".card-author"),
  button: document.querySelector(".btn"),
  form: document.querySelector("form"),
  container: document.querySelector(".container"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  document.querySelector("input").value;
  const answer = event.inputElement.value;
  console.log(answer);
});

/* DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.style.backgroundColor = "red";
}); */

//select all buttons as nodelist (can use for each)
const buttons = document.querySelectorAll("button");
// make array from buttons if i wanna use filter
/* const newButtons = Array.from(buttons);
console.log(newButtons);
//iterate (for each) through array and change each buttons color
newButtons.forEach((button) => (button.style.backgroundColor = "blue"));

newButtons.forEach((button) =>
  button.addEventListener("click", function (event) {
    button.style.backgroundColor = "green";
  })
);
 */

let button = {
  artist: "t",
  releast: 1977,
};
DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class="card"> <h2 class="card-header">${button.artist} Text </h2></div>`
);

//create the html for inputs, cards, and container
//select/query the HTML form and get values from inputs
//turn values into object (movie, game, user, etc)
//insert card with object onto HTML
//add event listener for remove button in JS
