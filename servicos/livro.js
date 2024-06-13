
const fs = require('fs')


function getTodosLivros() {
    return JSON.parse( fs.readFileSync("livros.json"))
}

function getLivroPorId() {
    const livros = JSON.parse(fs.readFileSync("livros.json"))


    const livroFiltrado = livros.filter( element => element.id === id)[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaLivros = [...livros, livroNovo]
    fs.writeFileSync('livros.json',JSON.stringify(novaListaLivros))
}

function modificaLivro(modificacoes, id) {
   let livros = JSON.parse(fs.readFileSync("livros.json"))
   const indiceModificado = livros.findIndex(element => element.id === id)
   const conteudoMudado = { ...livros[indiceModificado], ...modificacoes }

   console.log(conteudoMudado)
   livros[indiceModificado] = conteudoMudado

   fs.writeFileSync('livros.json', JSON.stringify(livros))
}

function deletaLivro (id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    
    const livrosFiltrados = livros.filter( element => element.id !== id)
    fs.writeFileSync('livros.json', JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivro
}