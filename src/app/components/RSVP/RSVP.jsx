import RSVPForm from "./RSVPForm"; 

export default function RSVP() {
    
    return ( 
    <section className="rsvp section" id="rsvp">
         <div className="container rsvp-grid"> <div> 
            <p className="section-kicker">Nos encantará verte</p>
             <h2> ¿Vienes a <br /> <em>celebrar?</em> </h2>

              <p className="rsvp-copy"> Por favor confirma tu asistencia antes del{" "} <strong>1 de noviembre de 2026</strong>. </p>
               <p className="rsvp-copy"> Si tienes alguna alergia o requerimiento especial, cuéntanoslo en el mensaje. </p>
                </div> <div className="rsvp-card"> <RSVPForm /> 
                </div> 
                </div> 
                </section>
                
            ); 
        }