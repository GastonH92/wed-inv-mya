
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function RSVPForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSending(true);
    setError("");

    const form = event.currentTarget;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Verificamos que las variables de entorno existan
    if (!serviceId || !templateId || !publicKey) {
      console.error("===== CONFIGURACIÓN EMAILJS =====");
      console.error("Service ID:", serviceId ? "OK" : "FALTA");
      console.error("Template ID:", templateId ? "OK" : "FALTA");
      console.error("Public Key:", publicKey ? "OK" : "FALTA");
      console.error("=================================");

      setError(
        "El formulario no está configurado correctamente. Revisá las variables de EmailJS."
      );

      setSending(false);
      return;
    }

    try {
      console.log("===== EMAILJS REQUEST =====");
      console.log("Service ID:", serviceId);
      console.log("Template ID:", templateId);
      console.log("Public Key:", publicKey ? "OK" : "FALTA");
      console.log("Formulario:", form);
      console.log("===========================");

      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        form,
        {
          publicKey,
        }
      );

      console.log("===== EMAILJS SUCCESS =====");
      console.log("Status:", response?.status);
      console.log("Text:", response?.text);
      console.log("============================");

      setSent(true);
      form.reset();
    } catch (error) {
      console.error("===== ERROR RSVP =====");
      console.error("Tipo:", typeof error);
      console.error("Constructor:", error?.constructor?.name);
      console.error("Nombre:", error?.name);
      console.error("Mensaje:", error?.message);
      console.error("Status:", error?.status);
      console.error("Text:", error?.text);
      console.error("Stack:", error?.stack);
      console.error(
        "Propiedades:",
        error
          ? Object.getOwnPropertyNames(error)
          : "sin error"
      );
      console.error("Objeto completo:", error);
      console.error("======================");

      setError(
        error?.text ||
          error?.message ||
          "No pudimos enviar tu confirmación. Revisá la configuración de EmailJS."
      );
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="rsvp-success">
        <p className="section-kicker">¡Confirmado!</p>

        <h3>Gracias por acompañarnos.</h3>

        <p>
          Recibimos tu confirmación y nos hace mucha ilusión compartir este
          día contigo.
        </p>
      </div>
    );
  }

  return (
    <form className="rsvp-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="guest_name">
          Nombre y apellido
        </label>

        <input
          type="text"
          id="guest_name"
          name="guest_name"
          placeholder="Tu nombre"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="guest_count">
          Cantidad de asistentes
        </label>

        <select
          id="guest_count"
          name="guest_count"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Seleccioná una opción
          </option>

          <option value="1">
            1 persona
          </option>

          <option value="2">
            2 personas
          </option>

          <option value="3">
            3 personas
          </option>

          <option value="4">
            4 personas
          </option>

          <option value="5">
            5 personas
          </option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guest_message">
          Mensaje <span>(opcional)</span>
        </label>

        <textarea
          id="guest_message"
          name="guest_message"
          rows="4"
          placeholder="Alergias, requerimientos especiales o algún mensaje para nosotros..."
        />
      </div>

      <input
        type="hidden"
        name="wedding_couple"
        value="Mica y Alan"
      />

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="button"
        disabled={sending}
      >
        {sending
          ? "Enviando..."
          : "Confirmar asistencia"}
      </button>
    </form>
  );
}
