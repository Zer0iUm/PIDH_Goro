/**********VALIDAÇÃO CADASTRO**************/

const login = document.querySelector(".form");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const mensagem = document.querySelector(".form__erro");

login.addEventListener("submit", (e) => {
e.preventDefault();

if (!validateEmail(email.value) || email.value == "") {
    mensagem.textContent = "Confira campo e-mail";
} else if (!validatePassword(senha.value) || senha.value == "") {
    mensagem.textContent = "Confira campo senha";
} else {
    mensagem.textContent = "";
}
  // if (email.value == "" || senha.value == "") {
  //   mensagem.textContent = "Preencha campos vazios";
  // } else {
  //   mensagem.textContent = "";
  // }
});

function validateEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

function validatePassword(password) {
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
return passwordRegex.test(password);
}