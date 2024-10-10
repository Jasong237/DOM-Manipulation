const DOMSelectors = {
  button: document.querySelector(".btn"),
  form: document.querySelector("form"),
  container: document.querySelector(".container"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector(".artist").value);
  console.log(document.querySelector(".album").value);
  console.log(document.querySelector(".link").value);

  let button = {
    artist: document.querySelector(".artist").value,
    album: document.querySelector(".album").value,
    image: document.querySelector(".link").value,
  };

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"> <h2 class="card-artist">${button.artist} </h2>
    <h2 class="card-album">${button.album}</h2></div>
    <h2 class="card-link">${button.link}</h2></div>`
  );
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

//create the html for inputs, cards, and container
//select/query the HTML form and get values from inputs
//turn values into object (movie, game, user, etc)
//insert card with object onto HTML
//add event listener for remove button in JS
