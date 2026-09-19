
export default function Gallery() {
  return (
    <section className="gallery section" id="fotos">
      <div className="container">
        <p className="section-kicker">Momentos nuestros</p>

        <div className="gallery-heading">
          <h2>
            Un poco de
            <br />
            <em>nuestra historia.</em>
          </h2>

          <p>Algunas memorias que nos han traído hasta aquí.</p>
        </div>

        <div className="gallery-grid">
          <img
            className="gallery-tall"
            src="/wedding-couple.png"
            alt="Mica y Alan en un paseo"
          />

          <img
            src="/wedding-ceremony.png"
            alt="Decoración de la ceremonia"
          />

          <img
            className="gallery-tall gallery-offset"
            src="/wedding-celebration.png"
            alt="Mica y Alan celebrando juntos"
          />
        </div>
      </div>
    </section>
  );
}

