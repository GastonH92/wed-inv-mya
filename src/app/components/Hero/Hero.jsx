
import Image from "next/image";
import Reveal from "@/app/components/animations/Reveal";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <Reveal className="hero-image" y={15}>
        <Image
          src="https://res.cloudinary.com/dk7uzygr4/image/upload/f_auto,q_auto,c_limit,w_1600/v1790010410/DSC_0137.jpg"
          alt="Mica y Alan caminando juntos"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Reveal>

      <Reveal className="hero-copy" delay={0.15} y={18}>
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
      </Reveal>
    </section>
  );
}

