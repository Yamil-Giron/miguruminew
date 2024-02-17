import React from "react";

function Amigurumi(){
  return(
    <div className="contenedor-amigurumi">
      <img
        className="imagen-amigurumi"
        src={require("../imagenes/Logo.jpg")}
        alt="imagen del amigurumi"/>
      <div className="contenedor-texto-amigurumi">
        <p className="nombre-amigurumi">Duky</p>
        <p className="dificultad-amigurumi">Facil</p>
        <p className="descripcion-amigurumi">Duky es un patito amarillo con muy buen humor, sabe muy bien como</p>
        <p className="precio-amigurumi">$10000</p>
      </div> 
    </div>
  );
}

export default Amigurumi;