import { ArrowUpRight, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingBlob } from "@/components/portfolio/common/FloatingBlob";
import { heroMessages } from "@/messages/home.messages";
import "@/components/portfolio/styles/HeroSection.css";
import reactLogo from "@/assets/react.svg";
import flutterLogo from "@/assets/flutter_logo.png";

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="heroBgRadial" />
      <div className="heroBgGrid" />
      <FloatingBlob className="heroBlobLeft" />
      <FloatingBlob className="heroBlobRight" />

      <div className="heroContent">
        <div>
          <div className="heroBadge">
            <span className="heroBadgeDot" /> {heroMessages.badge}
          </div>
          <h1 className="heroHeading">{heroMessages.heading}</h1>
          <p className="heroDescription">{heroMessages.description}</p>
          <div className="heroActions">
            <a href="#projects">
              <Button className="heroPrimaryBtn">
                {heroMessages.primaryCta}
                <ArrowUpRight className="iconGap iconMd" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="heroSecondaryBtn">
                {heroMessages.secondaryCta}
                <Mail className="iconGap iconMd" />
              </Button>
            </a>
          </div>
        </div>

        <div className="heroPreviewWrap">
          <div className="heroPreviewGlow" />
          <Card className="heroCard">
            <CardContent className="heroCardContentReset">
              <div className="heroWindowBar">
                <div className="heroWindowDots">
                  <span className="heroWindowDot heroWindowDotRed" />
                  <span className="heroWindowDot heroWindowDotBlue" />
                  <span className="heroWindowDot heroWindowDotMuted" />
                </div>
              </div>
              <div className="heroCardBody">
                <div className="heroHighlightWrap">
                  <div className="heroHighlightInner">
                    <p className="heroMetaText">{heroMessages.card.label}</p>
                    <h3 className="heroCardTitle">{heroMessages.card.title}</h3>
                    <div className="heroItemList">
                      {heroMessages.card.items.map((item) => (
                        <div key={item.label} className="heroItem">
                          <span className="heroItemLabel">
                            <img
                              src={item.logo}
                              alt={item.label.replaceAll(" ", "")}
                              className="heroItemLogo"
                            />
                            {item.label}
                          </span>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="heroItemLinkIcon" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="heroPlatformGrid">
                  <div className="heroPlatformCard heroPlatformCardBlue">
                    <img
                      src={flutterLogo}
                      alt="Flutter logo"
                      className="heroPlatformLogo"
                    />
                    <p className="heroPlatformLabel">
                      {heroMessages.card.platformCards[0]?.label}
                    </p>
                    <p className="heroPlatformTitle">
                      {heroMessages.card.platformCards[0]?.title}
                    </p>
                  </div>
                  <div className="heroPlatformCard heroPlatformCardRed">
                    <img
                      src={reactLogo}
                      alt="React logo"
                      className="heroPlatformLogo"
                    />
                    <p className="heroPlatformLabel">
                      {heroMessages.card.platformCards[1]?.label}
                    </p>
                    <p className="heroPlatformTitle">
                      {heroMessages.card.platformCards[1]?.title}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
