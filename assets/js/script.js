var nome = document.querySelector('h1')
var texto = nome.innerHTML
var index = 0

const escrever = () => {
    nome.innerHTML = nome.innerHTML.replace('|', '')

    if (texto.length > index) {
        if (index == 0) {
            nome.innerHTML = texto.charAt(index)
        } else {
            nome.innerHTML += texto.charAt(index)
        }

        nome.innerHTML += '|'

        index++
        setTimeout(escrever, 50)
    }
}

escrever()