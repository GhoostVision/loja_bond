function  App(params) {
    const jogos = [
    {id: 1, nome: "Resident Evil 4", preco: 120, categoria: "Terror"},
    {id: 2, nome: "Minecraft", preco: 90, categoria: "Sobrevivência"},
    {id: 3, nome: "The Forest", preco: 45, categoria: "Terror"},
    {id: 4, nome: "Cyberpunk 2077", preco: 100, categoria: "RPG"},
    {id: 5, nome: "Frostpunk", preco: 35, categoria: "Estratégia"}
    ]

    const ExibirJogos = jogos.map((jogo)=>
    <div key={jogo.id.toString()}>
        <h2>{jogo.nome}</h2>
        <p>{jogo.preco}</p>
        <p>{jogos.categoria}</p>
        <button>Comprar</button>
    </div>)

    return <>
     <h1>Game Hub</h1>
     <p>Melhores jgos aqui</p>
     {ExibirJogos}
    </>
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< App/>);