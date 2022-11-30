
import "./Css/Card.css";

function Card({cover, title}) {
    return (
        <div className="App-container-cart">
            <img src={cover} alt="Visuel sur un logement" className="App-container-cart-img"/>
            <h2>{title}</h2>
        </div>
    )
}

export default Card