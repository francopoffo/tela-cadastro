let frm = document.querySelector("#formulario");

let botaoEnvio = document.querySelector("#botaoEnvio");

botaoEnvio.addEventListener('click', (e) => {
    let nome1 = document.querySelector("#primeiroNome");
    let primeiroNome = document.querySelector("#primeiroNome").value;
    let erroPrimeiroNome = document.querySelector("#primeiroNomeErro");
    
    if (primeiroNome === '') {
        nome1.classList.add("cadastro__formulario-erro");
        erroPrimeiroNome.classList.remove("cadastro__erro");

        e.preventDefault();
    }
    else{
        nome1.classList.remove("cadastro__formulario-erro");
        erroPrimeiroNome.classList.add("cadastro__erro");
    }

    let nome2 = document.querySelector("#segundoNome");
    let segundoNome = document.querySelector("#segundoNome").value;
    let erroSegundoNome = document.querySelector("#segundoNomeErro");
    
    if (segundoNome === '') {
        nome2.classList.add("cadastro__formulario-erro");
        erroSegundoNome.classList.remove("cadastro__erro");

        e.preventDefault();
    }
    else{
        nome2.classList.remove("cadastro__formulario-erro");
        erroSegundoNome.classList.add("cadastro__erro");
    }

    let email = document.querySelector("#email");
    let emailValue = document.querySelector("#email").value;
    let erroEmail = document.querySelector("#emailErro");

    console.log(emailValue);
    
    if (emailValue === '') {
        email.classList.add("cadastro__formulario-erro");
        erroEmail.classList.remove("cadastro__erro");

        e.preventDefault();
    }
    else{
        email.classList.remove("cadastro__formulario-erro");
        erroEmail.classList.add("cadastro__erro");
    }

    let senha = document.querySelector("#senha");
    let senhaValue = document.querySelector("#senha").value;
    let erroSenha = document.querySelector("#senhaErro");

    console.log(senhaValue);
    
    if (senhaValue === '') {
        email.classList.add("cadastro__formulario-erro");
        erroSenha.classList.remove("cadastro__erro");

        e.preventDefault();
    }
    else{
        senha.classList.remove("cadastro__formulario-erro");
        erroSenha.classList.add("cadastro__erro");
    }

    
    
})

