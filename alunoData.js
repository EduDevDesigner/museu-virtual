// alunoData.js

function salvarDadosAluno(nome, ano) {
  const dadosAluno = {
    nome: nome,
    ano: ano
  };
  localStorage.setItem("dadosAluno", JSON.stringify(dadosAluno));
}

function obterDadosAluno() {
  const dados = localStorage.getItem("dadosAluno");
  return dados ? JSON.parse(dados) : { nome: "", ano: "" };
}

function limparDadosAluno() {
  localStorage.removeItem("dadosAluno");
}