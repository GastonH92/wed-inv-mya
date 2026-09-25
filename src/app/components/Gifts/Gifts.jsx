
"use client";

import CopyButton from "./ui/CopyButton";

export default function Gifts() {
  const cvu = "0000003100094206984442";
  const alias = "alanymicu";

  return (
    <section className="gifts section container">
      <div className="gift-box">
        <p className="section-kicker">Datos para regalos</p>

        <h3>Si desean enviarnos un detalle</h3>

        <p>
          Lo más importante para nosotros es poder compartir este día tan
          especial con ustedes.
          <br />
          <br />
          Si desean hacernos un regalo, nos ayudará mucho que sea mediante una
          transferencia, para seguir construyendo juntos nuestro hogar y
          nuestros sueños.
          <br />
          <br />
          ¡Gracias por acompañarnos y ser parte de este momento tan
          importante! ✨
        </p>

        <div className="gift-data">
          <div className="gift-data-row">
            <strong>Alias:</strong>

            <span>{alias}</span>

            <CopyButton
              value={alias}
              ariaLabel="Copiar alias"
            />
          </div>

          <div className="gift-data-row">
            <strong>CVU:</strong>

            <span>{cvu}</span>

            <CopyButton
              value={cvu}
              ariaLabel="Copiar CVU"
            />
          </div>

          <div className="gift-data-row">
            <strong>Nombre:</strong>

            <span>Micaela Ailen Villalba</span>
          </div>
        </div>
      </div>
    </section>
  );
}
