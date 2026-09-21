
import Reveal from "@/app/components/animations/Reveal";

export default function EventInfo() {
  return (
    <section className="details section container" id="detalles">
      <Reveal>
        <p className="section-kicker">El gran día</p>
      </Reveal>

      <div className="details-grid">
        <Reveal className="detail-card" delay={0.05} y={18}>
          <span className="detail-number">01</span>

          <h3>Civil</h3>

          <p>
            Ntra. Sra. del Buen Viaje 470
            <br />
            Morón, Buenos Aires
            <br />
            26 de noviembre · 10:30 hs
          </p>

          <a
            href="https://maps.google.com/?q=Ntra+Sra+del+Buen+Viaje+470+Moron"
            target="_blank"
            rel="noreferrer"
          >
            Ver en mapa <span>↗</span>
          </a>
        </Reveal>

        <Reveal className="detail-card" delay={0.15} y={18}>
          <span className="detail-number">02</span>

          <h3>Conferencia</h3>

          <p>
            Salón del Reino de los Testigos de Jehová
            <br />
            Barcelona 1638, Banfield
            <br />
            27 de noviembre · 19:00 hs
          </p>

          <a
            href="https://maps.google.com/?q=Barcelona+1638+Banfield"
            target="_blank"
            rel="noreferrer"
          >
            Cómo llegar <span>↗</span>
          </a>
        </Reveal>

        <Reveal className="detail-card featured" delay={0.25} y={18}>
          <span className="detail-number">03</span>

          <h3>Celebración</h3>

          <p>
            Walkar Recepciones
            <br />
            Alberto Larroque 1488
            <br />
            27 de noviembre · 21:00 hs
          </p>

          <a
            href="https://maps.google.com/?q=Alberto+Larroque+1488"
            target="_blank"
            rel="noreferrer"
          >
            Cómo llegar <span>↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

