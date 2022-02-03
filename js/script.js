function status() {
var situacao = document.getElementById('situacao')
var situacao_texto = window.document.getElementById('situacao').innerText
var data = window.document.getElementById('data').innerText
var data_final = data.slice(13,23)
var data_final = data_final.replace(' ','').replaceAll('/','')
var data_final = parseInt(data_final)
var data_atual_ = new Date();
/* var mes = String(data_atual.getMonth() + 1).padStart(2, '0');
var data_atual = parseInt(data_atual.getDate()+mes+data_atual.getFullYear())

if (data_atual > data_final) {
  situacao.classList.remove('situacao');
  situacao.classList.add('atrasado');
}else if (data_atual <= data_final) {
  situacao.classList.remove('situacao');
  situacao.classList.add('aberto');
}*/
//situacao.classList.remove('situacao');
//situacao.classList.add('encerrado');
tipo = typeof data_atual_
console.log(tipo)

}
