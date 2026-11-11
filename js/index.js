
function Post(){
    const [curtidas,setCurtidas] = React.useState(0)
    const [comentarios,setComentarios] = React.useState(0)

    React.useEffect(()=>{
        document.title = `Publicacao| ${curtidas}`
    }, [curtir])

    function curtir(){
        setCurtidas(curtidas + 1)
    }

    function removCurtir(){
        setCurtidas(curtidas - 1)
    }

    if(curtidas == -1){
        setCurtidas(0)
    }

    function comentar(){
        setComentarios(comentarios + 1)
    }

    function removComentar(){
        setComentarios(comentarios - 1)
    }

    if(comentarios == -1){
        setComentarios(0)
    }


    return <div>
        <h3>Maria Sousa</h3>
        <p>Olha meu bolinho de hj pessoal</p>
        <span> Curtidas:{curtidas == 0 ? `Ainda nao possui curtidas`: curtidas} </span>
        <span> Comentarios: {comentarios == 0 ? `ainda nao pussi comenatrios` : comentarios} </span>
        <button onClick={curtir}>+ Coracao</button>
        <button onClick={removCurtir}>- Coracao</button>
        <button onClick={comentar}>+ Comentar</button>
        <button onClick={removComentar}>- Comentar</button>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Post />);