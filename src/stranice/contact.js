import React from 'react';
import KontaktF from '../components/KontaktF';
 
function Contact(){
    const kontakt={
        telefon: "061/4513323"
    }
    return(
        <div className="container" style={{marginTop: 4 + 'em'}}>
            <h4>Za dodatne informacije, pisite na:</h4>
            <KontaktF/>
            <p>Kontaktirajte nas na: {kontakt.telefon} </p>
            <br></br>
        </div>
    )
}
 
export default Contact;