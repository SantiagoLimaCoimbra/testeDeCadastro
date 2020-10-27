var jogadores = new Array();

function cadastrarDados(){
	
	jogadores = JSON.parse(localStorage.getItem("Jogadores"))
	if(jogadores == null)
		jogadores = new Array()
	
	var usuario = {
		nome:document.getElementById('nome').value,
		turma:document.getElementById('turma').value,
		pontuacao:document.getElementById('pontuacao').value
	}
  
	jogadores.push(usuario)
	alert("Cadastro ralizado com sucesso!");
	
	localStorage.setItem("Jogadores", JSON.stringify(jogadores))


}

