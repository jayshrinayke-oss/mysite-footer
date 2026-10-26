
import { useState } from "react";

function FooterLinks({ columns }) {
  const [openSection, setOpenSection] = useState("");

  return (
    <>
      {columns.map((column) => (
        <nav
          className="footer-column"
          aria-label={column.title}
          key={column.title}
        >
          <button
            className="column-heading"
            type="button"
            aria-expanded={openSection === column.title}
            onClick={() =>
              setOpenSection(
                openSection === column.title ? "" : column.title
              )
            }
          >
            {column.title}
            <span className="accordion-icon" aria-hidden="true">
              {openSection === column.title ? "−" : "+"}
            </span>
          </button>

          <ul
            className={
              openSection === column.title ? "links open" : "links"
            }
          >
            {column.links.map((link) => (
              <li key={link.label}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </>
  );
}

export default FooterLinks;
