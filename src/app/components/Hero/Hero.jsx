
export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-image">
        <img
          src="/wedding-couple.png"
          alt="Mica y Alan caminando juntos"
        />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Una celebración de amor</p>

        <h1>
          Mica <em>&</em>
          <br />
          Alan
        </h1>

        <p className="hero-date">
          27 · noviembre · 2026
        </p>

        <a href="#rsvp" className="button button-light">
          Acompáñanos
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
