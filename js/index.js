
function Carrinho(props){
    const [valorTotal, setValortotal] = React.useState(0)
    const [carrinho, setCarrinho] = React.useState(0)

    React.useEffect(()=>{
        document.title = `Carrinho: ${carrinho}`
    })


    function add(){
        setCarrinho(carrinho + 1)
        setValortotal(valorTotal + 50)
    }

    function remov(){
        if(carrinho > 0){
        setCarrinho(carrinho - 1)
        }

        if(valorTotal > 0){
            setValortotal(valorTotal - 50)
        }
    }

    if(carrinho > 5){
        return <div>
            <h2>Estoque limitado</h2>
            <button disabled >Adicionar ao carrinho</button>
            <button onClick={remov}>Remover do carrinho</button>
        </div>
    }


    return(
        <div>
            <h2>Total no carrinho: {carrinho == 0 ? <span>Voce ainda nao possui nenhum item</span>: carrinho}</h2>
            <p>Valor total: {valorTotal}</p>
            <button onClick={add}>Adicionar ao carrinho</button>
            <button onClick={remov}>Remover do carrinho</button>
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Carrinho />);