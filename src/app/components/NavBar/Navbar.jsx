export default function Navbar() 
{ return ( 
    <nav className="nav container" aria-label="Navegación principal"> 
        <a className="monogram" href="#inicio" aria-label="Inicio">
             M<span>&</span>A 
             </a>

    <div className="nav-links"> 
        <a href="#historia">Nuestra historia</a> 
         <a href="#detalles">Detalles</a> 
         <a href="#fotos">Fotos</a> 
        <a href="#rsvp">Confirmar asistencia</a> 
    </div>
    
     <a className="nav-date" href="#rsvp"> 27.11.26 
        </a> 
        </nav> 
        
    ); 
        }