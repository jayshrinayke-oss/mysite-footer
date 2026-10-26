
import { useState } from "react";

function Newsletter({ config }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!validEmail) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you for subscribing!");
      setEmail("");
    }, 800);
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <h2 id="newsletter-title">{config.title}</h2>
      <p>{config.description}</p>

      <form onSubmit={handleSubmit} noValidate>
        <label
          className="newsletter-label"
          htmlFor="newsletter-email"
        >
          Email address
        </label>

        <input
          id="newsletter-email"
          type="email"
          value={email}
          placeholder={config.placeholder}
          onChange={(event) => {
            setEmail(event.target.value);
            setStatus("idle");
            setMessage("");
          }}
          aria-invalid={status === "error"}
          aria-describedby="newsletter-message"
          required
        />

        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : config.buttonText}
        </button>
      </form>

      <p
        id="newsletter-message"
        className={`form-message ${status}`}
        aria-live="polite"
        role={status === "error" ? "alert" : "status"}
      >
        {message}
      </p>
    </section>
  );
}

export default Newsletter;
