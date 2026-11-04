

function Card(props){
    return(
        <div>
            <img src={props.imgJogo}></img>
            <h2>{props.nomeJogo}</h2>
            <p>{props.precoJogo}</p>
            <button>Comprar</button>
        </div>
    )
    
}

function App(){
    return(
        <div>
            <Card
            imgJogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOXAQFE6SWdIZy6b4OpXDWYJUjkIbnYx7gQLCRunJ3w&s=10"
            nomeJogo="Resident Evil 4 Remake" 
            precoJogo="R$ 300,00"
            />
            <Card 
            imgJogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLwc_PvfaJ8fh9ZI9j9m3qhz0QOmx8ztGpRdMLDvsSAw&s=10"
            nomeJogo="Resident Evil 5" 
            precoJogo="R$ 90,00"
            />
            <Card 
            imgJogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SVOheQdlgUAZLkXmscXCD-m6gclSYy_An33yZAzk-w&s=10"
            nomeJogo="Resident Evil 6" 
            precoJogo="R$ 130,00"
            />
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById(`root`)
)