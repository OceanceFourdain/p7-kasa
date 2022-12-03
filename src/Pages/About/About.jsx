import "../Css/About.css";
import "../Css/Accordion.css";
import React from "react";
import background from "../../img/Background.png";

//import { Link } from "react-router-dom";

function About() {
    return(
    <div className="App-about">
        <img src={ background } className="about-background" alt="Un fond de montagne"/>
        <section id="myAccordion">
          <div className="flex-container">
            <div className="flex-column title">
              <div className="flex-col-xs-12 text-center">
              </div>
            </div>
            <details>
                <summary className="summary">
                    <span>Fiabilité</span><i className="fa-solid fa-chevron-down"></i>
                </summary>
                <p className="details-p">
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </p>
            </details>
            <details>
                <summary className="summary">
                    <span>Respect</span><i className="fa-solid fa-chevron-down"></i>
                </summary>
                <p className="details-p">
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
               </p>
            </details>
            <details>
                <summary className="summary">
                    <span>Service</span><i className="fa-solid fa-chevron-down"></i>
                </summary>
                <p className="details-p">
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
               </p>
            </details>
            <details>
                <summary className="summary">
                    <span>Responsabilité</span><i className="fa-solid fa-chevron-down"></i>
                </summary>
                <p className="details-p">
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
               </p>
            </details>
        </div>
    </section>
    </div>
    );
}

export default About;