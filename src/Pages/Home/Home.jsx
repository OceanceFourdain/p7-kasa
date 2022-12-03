import "../Css/Home.css";
import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../AppContext";

import Card from "../../Components/Card/Card";

const Home = () => {

  const data = useContext(AppContext);
    return(
    <div className="App">
        <div className="App-container-image">
            <p>Chez vous, partout et ailleurs</p>
        </div>
        <div className="App-container-card">
            {
                <div id="logements">
                    {data.map((logement, index) => (
                        <Link key={index} to={`/logement/${logement.id}`}>
                            <Card
                                key={logement.id}
                                cover={logement.cover}
                                title={logement.title}
                            />
                        </Link>
                    ))}
                </div>
            }
        </div>
    </div>
    
    );

}

export default Home;