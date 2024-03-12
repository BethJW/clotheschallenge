let submit = document.querySelector("#submit");
let nameInput = document.querySelector("#name-input");
let thoughts = document.querySelector("#input-box");
let form = document.querySelector("#form");

function onSubmit(event) {
  event.preventDefault();
  let nameInput = document.querySelector("#name-input").value;
  if (nameInput) {
    return (form.innerHTML = ` Hi, ${nameInput}! Thank you for sharing your thoughts on C.P. Company! Please visit C.P. Company by clicking <a href="https://www.cpcompany.com/en-us/" target="_blank"> here </a>`);
  }
}

form.addEventListener("submit", onSubmit);
