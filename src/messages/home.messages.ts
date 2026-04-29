import pwcLogo from "../assets/pwc_logo.png";
import nuvendingLogo from "../assets/nuvending_logo.png";

export const navMessages = {
  brandEyebrow: "Arief's Portfolio",
  brandTitle: "React / Flutter",
  links: ["Projects", "Skills", "About", "Build", "Contact"],
  hireMe: "Hire Me",
  toggleMenuLabel: "Toggle menu",
};

export const heroMessages = {
  badge: "Experienced Software Engineer",
  heading: "Arief Shamsuddin",
  description:
    "I build production-ready applications across web and mobile, from client-facing IoT vending machine apps to enterprise insurance web applications.",
  primaryCta: "View My Projects",
  secondaryCta: "Contact Me",
  card: {
    label: "Present and past",
    title: "Company Experience",
    items: [
      {
        label: "PwC ACKL Delivery Center",
        logo: pwcLogo,
        url: "https://www.pwc.com/my/en.html",
      },
      {
        label: "Nu Vending Sdn Bhd",
        logo: nuvendingLogo,
        url: "https://www.nuvendingtech.com/",
      },
    ],
    platformCards: [
      { label: "Mobile", title: "Flutter" },
      { label: "Web", title: "React" },
    ],
  },
};
