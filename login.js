var nomeregister, emailregister, senharegister, confsenharegister, cpfregister;
var emaillogin, senhalogin;
var nome, email, senha, cpf;

window.onload = function () {
    if (localStorage.getItem('logado')) {
        var dados = localStorage.getItem('logado').split(',');
        nome = dados[0];
        email = dados[1];
        senha = dados[2];
        cpf = dados[3];
        document.getElementById("register").innerHTML =
            '<a href="usuario.html">Olá, ' + nome + '</a>';
        document.getElementById("navbarra").innerHTML =
            `<a href="cursos.html" style="text-decoration: none">Cursos</a>
        &nbsp;&nbsp;&nbsp;
        <a href="comofunciona.html" style="text-decoration: none">Como Funciona</a>
        &nbsp;&nbsp;&nbsp;
        <a href="atendimento.html" style="text-decoration: none">Atendimento</a>
        &nbsp;&nbsp;&nbsp;
        <a href="sobre.html" style="text-decoration: none">Sobre Nos</a>`
    } else {
        document.getElementById("register").innerHTML =
            '<div><a href="login.html" style="text-decoration: none">&nbsp; Entrar &nbsp;&nbsp; Cadastre-se </a></div>';
        document.getElementById("navbarra").innerHTML =
            `<a href="login.html" style="text-decoration: none">Cursos</a>
        &nbsp;&nbsp;&nbsp;
        <a href="comofunciona.html" style="text-decoration: none">Como Funciona</a>
        &nbsp;&nbsp;&nbsp;
        <a href="atendimento.html" style="text-decoration: none">Atendimento</a>
        &nbsp;&nbsp;&nbsp;
        <a href="sobre.html" style="text-decoration: none">Sobre Nos</a>`;
    }

    if (document.getElementById("conta")) {
        if (nome) {
            document.getElementById("conta").innerHTML =
                `<div> <img src="img/logoead.png" id="logob" </div>
            <br></br>
            <h1>DETALHES DA CONTA: </h1>
            <div> <strong> Nome: </strong> ${nome}</div>
            <div> <strong> Email: </strong> ${email}</div>
            <div> <strong> Senha: </strong> ${senha}</div>
            <div> <strong> CPF: </strong> ${cpf}</div>
            <button type="button" id="b" onclick="deslogar()"> <strong> DESLOGAR </strong> </button>`;
        } else {
            window.location.href = "login.html";
        }
    }
}

function register() {
    nomeregister = document.getElementById("nomeregister").value;
    emailregister = document.getElementById("emailregister").value;
    senharegister = document.getElementById("senharegister").value;
    confsenharegister = document.getElementById("confsenharegister").value != senharegister;
    cpfregister = document.getElementById("cpfregister").value;
    var all = [nomeregister, senharegister, cpfregister];
    var box_erro = document.getElementById("erroregister");

    if (nomeregister == "" || emailregister == "" || senharegister == "" || cpfregister == "") {
        box_erro.textContent = " ☢ Existem campos vazios";
        return false;
    }

    if (confsenharegister) {
        box_erro.textContent = "Senhas não conferem!";
        return false;
    } else {
        if (!(localStorage.getItem(emailregister))) {
            localStorage.setItem(emailregister, all);
            localStorage.setItem('logado', nomeregister + "," + emailregister + "," + senharegister + "," + cpfregister);
            window.location.href = "home.html";
            return true;
        } else {
            box_erro.textContent = "Email já cadastrado!";
        }
    }
}

function logar() {
    emaillogin = document.getElementById("emaillogin").value;
    senhalogin = String(document.getElementById("senhalogin").value);
    var box_erro = document.getElementById("errorlogin");
    if (localStorage.getItem(emaillogin)) {
        var nome_ = String(localStorage.getItem(emaillogin).split(',')[0]);
        var senha_ = String(localStorage.getItem(emaillogin).split(',')[1]);
        var cpf_ = String(localStorage.getItem(emaillogin).split(',')[2]);
    }
    if (emaillogin == "" || senhalogin == "") {
        box_erro.textContent = " ☢ Existem campos vazios";
        return false;
    }

    if (localStorage.getItem(emaillogin)) {
        if (senha_ == senhalogin) {
            localStorage.setItem('logado', nome_ + "," + emaillogin + "," + senha_ + "," + cpf_);
            window.location.href = "home.html"
            // alert("Logado!!");
            return true;
        }
    }
    box_erro.textContent = "Usuário ou senha incorretos!";
    return false;
}

function deslogar() {
    localStorage.removeItem('logado');
    window.location.href = "home.html"
}