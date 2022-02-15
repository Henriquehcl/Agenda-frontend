function status() {
  var situacao = document.getElementById('situacao')
  var situacao_texto = window.document.getElementById('situacao').innerText
  var data = window.document.getElementById('data').innerText
  var data_final = data.slice(13,23)
  var data_final = data_final.replace(' ','').replaceAll('/','')
  var data_final = parseInt(data_final)
  var data_atual = new Date();
  var mes = String(data_atual.getMonth() + 1).padStart(2, '0');
  var data_atual = parseInt(data_atual.getDate()+mes+data_atual.getFullYear())

  if (data_atual > data_final) {
    situacao.classList.remove('situacao');
    situacao.classList.add('atrasado');
  }else if (data_atual <= data_final) {
    situacao.classList.remove('situacao');
    situacao.classList.add('aberto');
  }
  situacao.classList.remove('situacao');
  situacao.classList.add('encerrado');
  //tipo = typeof data_atual_
  //console.log(data_atual_)

}

function preenche_data(){
  var myField = document.getElementById("data");
  var now = new Date();
  myField.valueAsNumber = now.getTime() - now.getTimezoneOffset() * 60000;
  /*
  ////capturando a data atual
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, '0');
  var mes = String(data.getMonth() + 1).padStart(2, '0');
  var ano = data.getFullYear();
  var hora = String(data.getHours()).padStart(2,'0');
  var minutos = data.getMinutes()
  var data_atual = dia + mes + ano + hora + minutos;
  ///exibindo a data atual
  var data = window.document.getElementById('data').innerHTML= data_atual
  console.log(data_atual);
  */
}

function valida_campo(){
var assunto = document.getElementById('assunto');
var data = document.getElementById('data');

if (assunto.value == ""){
  alert("Assunto não informado!");
  assunto.focus();
  return;
}

if(data.value == ""){
  alert("Data não informada!");
  data.focus();
  return;
}
alert("Compromisso Cadastrado com sucesso!")
formulario.submit()
}
