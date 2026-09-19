
import Countdown from "./Countdown";

export default function CountdownSection() {
  return (
    <section className="countdown-section">
      <div className="container">
        <p className="section-kicker">La cuenta regresiva</p>

        <h2>Faltan solo...</h2>

        <Countdown />
      </div>
    </section>
  );
}
