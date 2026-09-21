
import Image from "next/image";

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
          {/* 01 */}
          <Image
            className="gallery-tall"
            src="https://res.cloudinary.com/dk7uzygr4/image/upload/f_auto,q_auto,c_limit,w_1200/v1790010446/DSC_0015.jpg"
            alt="Mica y Alan"
            width={1200}
            height={1600}
          />

          {/* 02 */}
          <Image
            src="https://res.cloudinary.com/dk7uzygr4/image/upload/f_auto,q_auto,c_limit,w_1200/v1790010445/DSC_0005.jpg"
            alt="Mica y Alan"
            width={1200}
            height={900}
          />

          {/* 03 */}
          <Image
            className="gallery-tall gallery-offset"
            src="https://res.cloudinary.com/dk7uzygr4/image/upload/f_auto,q_auto,c_limit,w_1200/v1790010445/DSC_0190.jpg"
            alt="Mica y Alan"
            width={1200}
            height={1600}
          />

          {/* 04 */}
          <Image
            src="https://res.cloudinary.com/dk7uzygr4/image/upload/f_auto,q_auto,c_limit,w_1200/v1790010444/DSC_0176.jpg"
            alt="Mica y Alan"
            width={1200}
            height={900}
          />

          {/* 05 */}
          <Image
            className="gallery-tall"
            src="https://res.cloudinary.com/dk7uzygr4/image/upload/f_auto,q_auto,c_limit,w_1200/v1790010443/DSC_0039.jpg"
            alt="Mica y Alan"
            width={1200}
            height={1600}
          />

          {/* 06 */}
          <Image
            src="https://res.cloudinary.com/dk7uzygr4/image/upload/f_auto,q_auto,c_limit,w_1200/v1790013408/DSC_0191.jpg"
            alt="Mica y Alan"
            width={1200}
            height={900}
          />
        </div>
      </div>
    </section>
  );
}

