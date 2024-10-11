const DOMSelectors = {
  button: document.querySelector("button"),
  form: document.querySelector("form"),
  container: document.querySelector(".container"),
  card: document.querySelector(".card"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector(".artist").value);
  console.log(document.querySelector(".album").value);
  console.log(document.querySelector(".img").value);

  const button = {
    artist: document.querySelector(".artist").value,
    img: document.querySelector(".img").value,
    album: document.querySelector(".album").value,
  };

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"> 
    <h2 class="card-artist">     ${button.artist} </h2>
    <img class="card-img" src=  "${button.img}" alt="Album Cover" />
    <h2 class="card-album">      ${button.album}</h2>
    </div>`
  );
});

DOMSelectors.container.addEventListener("click", function (event) {
  const element = event.target.closest(".card");
  element.remove();
  console.log("removed!");
});

//select all buttons as nodelist (can use for each)
// const buttons = document.querySelectorAll("button");
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
