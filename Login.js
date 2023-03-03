/**********VALIDAÇÃO LOGIN**************/

const login = document.querySelector(".form__login");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const mensagem = document.querySelector(".form__erro");

login.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value == "" || senha.value == "") {
    mensagem.textContent = "Preencha campos vazios";
  } else {
    mensagem.textContent = "";
  }
});
