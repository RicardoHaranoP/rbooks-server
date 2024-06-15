const fs = require('fs')


function getTodosFavoritos() {
    return JSON.parse( fs.readFileSync("favoritos.json"))
}


function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse( fs.readFileSync("favoritos.json"))
    const livroInserido = livros.find(element => element.id === id)
    const novaListaFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync('favoritos.json',JSON.stringify(novaListaFavoritos))
}


function deletaFavorito (id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))

    
    const livrosFiltrados = livros.filter( element => element.id !== id)
    fs.writeFileSync('livros.json', JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosFavoritos,
    insereFavorito,
    deletaFavorito
}