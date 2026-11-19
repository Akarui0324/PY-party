const form = document.querySelector("#payment-form");
const result = document.querySelector("#result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

if (isEmpty(cardInput.value)) {

  showFieldError(
    cardInput,
    "請輸入測試卡號"
  );

  return false;

}




  result.textContent = "submit 事件已觸發";
});

function isEmpty(value) {

  return value.trim() === "";

}
function showFieldError(input, text) {

  const field = input.closest(".field");
  const error = field.querySelector(".error");

  field.classList.add("invalid");
  error.textContent = text;

}

function clearErrors() {
  document.querySelectorAll(".field")
    .forEach(function (field) {
      field.classList.remove("invalid");
      field.querySelector(".error")
        .textContent = "";
    });
}
