const DOMSelectors = {
  header: document.querySelector("h1"),
  item: document.querySelectorAll("li"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  form: document.querySelector("form"),
};
let student = {
  name: "Ryan",
  age: 15,
  girlfriend: true,
};
console.log(DOMSelectors.item);
console.log(student.name);

DOMSelectors.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.style.backgroundColor = "red";
});

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});
