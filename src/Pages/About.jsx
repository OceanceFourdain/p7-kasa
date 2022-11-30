import "./Css/About.css";
import "./Css/Accordion.css";

import background from "../img/Background.png";

//import { Link } from "react-router-dom";

function About() {
    return(
    <div className="App-about">
        <img src={ background } className="about-background" alt="Un fond de montagne"/>
    
        <section id="myAccordion">
          <div class="flex-container">
            <div class="flex-column title">
              <div class="flex-col-xs-12 text-center">
              </div>
            </div>
            <div class="why_choose_us">
                <input type="radio" id="Panel_1" name="wiki" value="Panel_1" checked />
                <input type="radio" id="Panel_2" name="wiki" value="Panel_2" />
                <input type="radio" id="Panel_3" name="wiki" value="Panel_3" />
                <input type="radio" id="Panel_4" name="wiki" value="Panel_4" />

                <ul class="accordion flex-column">
                <div class="flex-col-md-6">
                <li class="panel" data-radio="Panel_1">
                    <label for="Panel_1" class="accordion-title">
                    
                    <span class="accordion-heading">Fiabilité</span>
                    </label>
                    <div class="accordion-content">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</div>
                </li>
                <li class="panel" data-radio="Panel_2">
                    <label for="Panel_2" class="accordion-title">
                    
                    <span class="accordion-heading">Respect</span>
                    </label>
                    <div class="accordion-content">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
                </li>
                
                </div>
                <div class="flex-col-md-6">
                <li class="panel" data-radio="Panel_3">
                    <label for="Panel_3" class="accordion-title">
                    
                    <span class="accordion-heading">Service</span>
                    </label>
                    <div class="accordion-content">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
                </li>
                <li class="panel" data-radio="Panel_4">
                    <label for="Panel_4" class="accordion-title">
                    <span class="accordion-heading">Responsabilité</span>
                    </label>
                    <div class="accordion-content">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>
                </li>
                    </div>
                </ul>
            </div>
        
        </div>
    </section>
    </div>
    );
}

export default About;