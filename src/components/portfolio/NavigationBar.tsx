import { Menu, X } from "lucide-react";
import { useNavbarMenu } from "@/hooks/useNavbarMenu";
import { navMessages } from "@/messages/home.messages";
import "@/components/portfolio/styles/NavigationBar.css";

export function NavigationBar() {
  const { isOpen, toggle, close } = useNavbarMenu();

  return (
    <header className="nav">
      <nav className="navWrap">
        <a href="#home" className="navBrand">
          <div>
            <p className="navEyebrow">{navMessages.brandEyebrow}</p>
            <p className="navTitle">{navMessages.brandTitle}</p>
          </div>
        </a>

        <div className="navDesktopLinks">
          {navMessages.links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="navLink">
              {link}
            </a>
          ))}
        </div>

        <button
          onClick={toggle}
          className="navMenuToggle"
          aria-label={navMessages.toggleMenuLabel}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
        <div className="navMobilePanel">
          <div className="navMobileLinks">
            {navMessages.links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={close}
                className="navMobileLink"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
