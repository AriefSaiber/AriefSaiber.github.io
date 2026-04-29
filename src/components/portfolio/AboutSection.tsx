import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/portfolio/common/SectionTitle";
import { aboutMessages } from "@/messages/about.messages";
import "@/components/portfolio/styles/AboutSection.css";

export function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="aboutContent">
        <div>
          <SectionTitle
            eyebrow={aboutMessages.eyebrow}
            title={aboutMessages.title}
            description={aboutMessages.description}
          />
        </div>

        <div className="aboutDetails">
          <Card className="aboutCard">
            <CardContent className="aboutCardContent">
              <p className="aboutText">{aboutMessages.paragraphs[0]}</p>
              <p className="aboutText aboutTextSpaced">
                {aboutMessages.paragraphs[1]}
              </p>
            </CardContent>
          </Card>

          <div className="aboutServices">
            {aboutMessages.services.map((service) => (
              <div key={service} className="aboutServiceItem">
                <CheckCircle2 className="aboutServiceIcon" />
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
