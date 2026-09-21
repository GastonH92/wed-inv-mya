
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-image">
        <Image
          src="https://res.cloudinary.com/dk7uzygr4/image/upload/f_auto,q_auto,c_limit,w_1600/v1790010410/DSC_0137.jpg"
          alt="Mica y Alan bailando"
          width={800}
          height={1200}
          priority
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
