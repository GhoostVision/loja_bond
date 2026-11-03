const jogo = [
    {nome:`Cyberpunk`, preco: 200},
    {nome:`Gta5`, preco: 60}
]

const tela_jogo = document.getElementById(`mostrar_jogos`)

const map_jogos = jogo.map((jogo) =>{
    return`
    <div>
        <p>${jogo.nome}</p>
        <p>${jogo.preco}</p>
    </div>
    `
});

tela_jogo.innerHTML = map_jogos.join("")