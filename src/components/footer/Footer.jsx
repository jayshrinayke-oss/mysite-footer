
import footerConfig from "../../data/footerConfig";
import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsletter";
import SocialIcons from "./SocialIcons";
import BackToTop from "./BackToTop";

function Footer() {
  const { brand, socials, columns, contact, newsletter, trustBadges, paymentMethods, legalLinks, copyright } = footerConfig;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    logo: brand.logo,
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    sameAs: socials.map((social) => social.url),
  };

  return (
    <>
      <footer className="site-footer">
        <div className="footer-container">
          <section className="footer-brand">
            <a className="logo" href="#home">{brand.name}<span>.</span></a>
            <p>{brand.description}</p>
            <SocialIcons socials={socials} />
          </section>

          <FooterLinks columns={columns} />

          <section className="footer-contact">
            <h2>Contact Us</h2>
            <p>{contact.address}</p>
            <p>
              Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p>
              Phone: <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
            </p>
          </section>

          <Newsletter config={newsletter} />

          <section className="trust-section" aria-label="Customer benefits">
            {trustBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </section>

          <section className="payment-section" aria-label="Accepted payment methods">
            <span>Accepted payments:</span>
            {paymentMethods.map((method) => (
              <span className="payment-badge" key={method}>{method}</span>
            ))}
          </section>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} {brand.name}. {copyright}</p>
            <nav className="legal-links" aria-label="Legal links">
              {legalLinks.map((link) => (
                <a key={link.label} href={link.url}>{link.label}</a>
              ))}
            </nav>
          </div>
        </div>
      </footer>

      <BackToTop />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
}

export default Footer;
