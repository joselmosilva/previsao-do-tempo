

const chaveApi = "9cf88c672369df89a469167c4e3b3b2c"


function colocarDadosNaTela(dados) {
    console.log(dados)

    document.querySelector(".Cidade").innerHTML = "tempo em " + dados.name
    document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".Previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity  + "%"
    document.querySelector(".informação-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`


}



async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveApi}&lang=pt_br&units=metric `).then(resposta => resposta.json())

    colocarDadosNaTela(dados)





}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".city-time").value



    buscarCidade(cidade)
}







