const DOMSelectors = {
  header: document.querySelector("h1"),
  cardHeader: document.querySelector(".card-header"),
  cardImg: document.querySelector(".card-img"),
  cardAuthor: document.querySelector(".card-author"),
  button: document.querySelector(".btn"),
  form: document.querySelector("form"),
};

DOMSelectors.form.addEventListener("Submit", function (event) {
  event.preventDefault();
  event.target.cardHeader = "input";
});

/* DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.style.backgroundColor = "red";
}); */
