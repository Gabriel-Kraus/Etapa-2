function saudarUsuario() {
    var nome = document.getElementById("nome").value;
    var saudacao = document.getElementById("saudacao");
  
    if(nome.trim() !== "") {
      saudacao.textContent = "Olá, " + nome + "! Seja bem-vindo ao meu site!";
    } else {
      saudacao.textContent = "Por favor, digite seu nome para ser saudado.";
    }
  }
  
