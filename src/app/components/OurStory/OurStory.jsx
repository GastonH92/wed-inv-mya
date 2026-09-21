
import Reveal from "@/app/components/animations/Reveal";

export default function OurStory() {
  return (
    <section className="intro section container" id="historia">
      <Reveal>
        <p className="section-kicker">Nuestra historia</p>
      </Reveal>

      <div className="intro-grid">
        <Reveal>
          <h2>
            Un amor que
            <br />
            <em>abrazó muchas vidas.</em>
          </h2>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <p className="lead">
              Hay amores que comienzan entre dos personas, pero que con el
              tiempo terminan abrazando muchas más.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p>
              Nuestra historia nació de una pandemia, y fue escribiéndose a
              través de momentos, aprendizajes, sueños y decisiones que nos
              fueron llevando hasta este día.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <p>
              Y hoy, después de todo lo vivido, sentimos que no hay mejor
              manera de comenzar esta nueva etapa que celebrando el amor que
              nos trajo hasta acá.
            </p>
          </Reveal>

          <Reveal delay={0.34}>
            <p>
              <em>
                “[…] además de todo esto, vístanse de amor, porque es un lazo
                de unión perfecto.”
              </em>
              <br />
              — Colosenses 3:14
            </p>
          </Reveal>

          <Reveal delay={0.42}>
            <p>
              Por eso queremos compartir este día con ustedes. Porque si están
              leyendo esto, es porque de alguna manera también son parte de
              este amor que elegimos seguir construyendo juntos.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="signature">
              Con cariño,
              <br />
              <strong>Mica & Alan</strong>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

