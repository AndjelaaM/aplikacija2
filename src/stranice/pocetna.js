import React from 'react';
import { Button } from './Button';
import './Pocetna.css';
import {Row, Col} from 'react-bootstrap';
import slika1 from './slika1.jpg'


function Home() {
    return (<div>
        
   <div id="home-sec">

    <div class="container"  >
        <div class="row text-center">
            <div  class="col-md-12" >
                <span class="head-main" >Letovanje iz snova</span>
                <h3 class="head-last col-md-4 ">Izaberi svoju destinaciju za savršen odmor.Vaši sovi mogu postati stvarnost,
                        potrebno se samo da poželite!
                </h3>
            </div>
        </div>
    </div>
         </div>
    
    <section  id="services-sec">
    <div class="container">
            <div class="row ">
                <Row>
                    <Col>
                        <p>
                                Već dugi niz godina možete birati najlepše letnje destinacije i hotele koje vam nudimo. 
                                Antalijska i Egejska regija predstavljaju idealna letovališta za porodice, zahvaljujući hotelima koji nude posebne pogodnosti.
                                Osim u Tursku, sa nama možete putovati u zemlju Crvenog mora, Egipat, i zaroniti u bistre vode ove egzotične destinacije. 
                                Popularni su i
                                 aranžmani za prekrasni Kipar, Tunis, Maltu, Istanbul, Jordan, Australiju.
                                
                        </p>
                    </Col>
                    <Col>
                        <img src ={slika1}>
                            </img>
                            <Button onClick= {()=> {alert('Napravili ste rezervaciju') }} buttonStyle= 'btn--primery'>Rezervisi</Button> 
                    </Col>
                    <Col>
                     <p>
                      Palazzo Versace Gold Coast je prvi hotel modne marke na zlatnoj obali Australije:
                      ekskluzivni ambijent na obali, spektakularna arhitektura, raskošan smeštaj, dizajn koji se odlikuje Versaceovim nameštajem po meri i
                      italijanskom zanatskom radošću, izvanrednom uslugom i ambijentom čistog glamura. U njemu se nalaze nagrađivani restorani, 
                      čuvena banja, centar za fitnes i velnes, privatna marina, prostori za sastanke i događaje i svecani saloni.
                    </p>
                    </Col>

                </Row>
          </div>
        </div>
    </section>
      
    </div>
    );
}

export default Home;
