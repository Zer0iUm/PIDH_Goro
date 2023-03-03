const form = document.getElementById("form")
const nome = document.getElementById("nome--cartao")
const numero = document.getElementById("numero--cartao")
const validade = document.getElementById("validade--cartao")
const codigo = document.getElementById("cod--cartao")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    checkInputs()
  })

function checkInputs() {
    const usernameValue = nome.value
    const numeroValue = numero.value
    const validadeValue = validade.value
    const codigoValue = codigo.value

    let formIsValid = true

    if (usernameValue === ""){
        formIsValid = false
        setErrorFor(usernameValue, "Formato invalido, digite novamente.")
    } 
    else if (!checkForm(usernameValue)) {
        formIsValid = false
        setErrorFor(usernameValue, "Por favor, insira um nome válido.")
      }    
    else {
        setSucessFor(usernameValue)
    }

    if (numeroValue === "") {
        formIsValid = false
        setErrorFor(numero, "Formato invalido, digite novamente.")
    } else { 
        setSucessFor(numero)
    }

    if (validadeValue === "") {
        formIsValid = false
        setErrorFor(validade, "Formato invalido, digite novamente.")
    } else {
        setSucessFor(validade)
    }

    if (codigoValue === "") {
        formIsValid = false
        setErrorFor(codigo, "Formato invalido, digite novamente.")
    } else {
        setSucessFor(codigo)
    }

    if (formIsValid) {
        console.log("O formulário está 100%")
    } else {
        console.log("Verifique todas as informações novamente.")
    }
}

function checkForm(str) {
    return /^(([^a-zA-Z' ']))$/.test(
        str
      )
  }

  function setSuccessFor(input) {
    const divform = input.parentElement
  
    // Adicionar a classe de sucesso
    formControl.className = "form-control success"
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")
  
    // Adiciona a mensagem de erro
    small.innerText = message
  
    // Adiciona a classe de erro
    formControl.className = "form-control error"
  }

  document.getElementById('texto').addEventListener( 'keyup', function() {

    this.value = this.value.replace( /[0-9]*/g, '' );

});
<input type="text" id="texto" />