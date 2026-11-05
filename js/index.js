function Contador(props){
    const [numero, setNumero] = React.useState(0)

    function add(){
        setNumero(numero + 1)
    }

    function remov(){
        setNumero(numero - 1)
    }

    if(numero == -1){
        setNumero(0)
    }

    return(
        <div>
            <p>Curtidas: {numero}</p>
            <button onClick={add}>curtir</button>
            <button onClick={remov}>Remover curtida</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Contador />);