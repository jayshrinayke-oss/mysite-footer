
function SocialIcons({ socials }) {
  return (
    <nav className="social-links" aria-label="Social media">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit MySite on ${social.name}`}
        >
          {social.label}
        </a>
      ))}
    </nav>
  );
}

export default SocialIcons;
