let catalogo = require('./database/catalogo.json');

//listar todos os filmes em cartaz (listarTodosOsFilmesEmCartaz)

console.log("Lista de filmes em cartaz")

const listarTodosEmCartaz = () => {
    catalogo.forEach((filme) => console.log(filme.titulo))
}

console.log(listarTodosEmCartaz())

// buscar pelo código parametro: codigo

const buscarFilme = (codigo) => catalogo.find((filme) => filme.codigo == codigo)


// trocar emCartaz alterarStatusEmcartaz - parametro: codigo

/console.log("Alterar cartaz")

const alterarStatusEmcartaz = (codigo, callback) => {
    let filme = callback(codigo)

    if(!filme) {
        console.log("Filme não encontrado!")
        return null;
    }

    filme.emCartaz == true ? filme.emCartaz = false : filme.emCartaz = true;

    return filme
}

console.log(alterarStatusEmcartaz(1, buscarFilme))


//adicionar novo filme ao catalogo (adicionarFilme) parametro : filme

const adicionarFilme = (filme) => {
    const { codigo, titulo, atores, duracao, anoDeLancamento } = filme;

    const filmeParaAdicionar ={
        ...filme,
        emCartaz: true
    }
    catalogo.push(filmeParaAdicionar);  
    return filmeParaAdicionar;
}  

adicionarFilme({ 
    codigo: 6, 
    titulo: "O Poderoso Chefão",
    atores: ["Marlon Brando", "Al Pacino", "James Caan"],
    duracao: 3.5,
    anoDeLancamento: 1972
})

//listar os filmes com duracao maior que duas horas -> filter

console.log("Lista de filmes longos")

const filmesMaiores = () => {
    return catalogo.filter((filme) => filme.duracao > 2)
}

console.log(filmesMaiores)
