import { footerMessages } from "@/messages/contact.messages";
import "@/components/portfolio/styles/FooterSection.css";

export function FooterSection() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <p>{footerMessages.copyright}</p>
        <div className="footerLinks">
          {footerMessages.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footerLink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
