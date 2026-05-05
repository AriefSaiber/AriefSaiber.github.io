import { GitGraph } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionTitle } from "@/components/portfolio/common/SectionTitle";
import { howItsMadeMessages as buildMessages } from "@/messages/build.messages";
import "@/components/portfolio/styles/BuildSection.css";
import shadcnLogo from "@/assets/shadcn_logo.png";
import lucideLogo from "@/assets/lucide_logo.png";
import gitActionsLogo from "@/assets/gitactions_logo.png";
import dockerLogo from "@/assets/docker_logo.png";
import githubLogo from "@/assets/github_logo.png";

const logoMap = {
  shadcn: shadcnLogo,
  lucide: lucideLogo,
  docker: dockerLogo,
  gitactions: gitActionsLogo,
  github: githubLogo,
} as const;

export function BuildSection() {
  return (
    <section id="build" className="build">
      <div className="buildBg" />
      <div className="buildContainer">
        <SectionTitle
          eyebrow={buildMessages.eyebrow}
          title={buildMessages.title}
          description={buildMessages.description}
        />

        <div className="buildGrid">
          <Card className="buildHeroCard">
            <CardHeader className="buildHeroHeader">
              <div className="buildHeroBadge">
                <GitGraph className="buildHeroBadgeIcon" />
              </div>
              <div>
                <CardTitle className="buildHeroTitle">
                  {buildMessages.hero.title}
                </CardTitle>
                <CardDescription className="buildHeroDescription">
                  {buildMessages.hero.description}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="buildHeroContent">
              <div className="buildSteps">
                {buildMessages.hero.steps.map((step) => (
                  <div key={step.title} className="buildStep">
                    <span
                      className={`buildStepDot ${
                        step.tone === "blue"
                          ? "buildStepDotBlue"
                          : step.tone === "red"
                            ? "buildStepDotRed"
                            : "buildStepDotNeutral"
                      }`}
                    />
                    <div>
                      <p className="buildStepTitle">{step.title}</p>
                      <p className="buildStepText">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="buildPillars">
            {buildMessages.pillars.map((pillar) => {
              const logoSrc = logoMap[pillar.logoKey];
              return (
                <Card key={pillar.title} className="buildPillarCard">
                  <CardHeader className="buildPillarHeader">
                    <div
                      className={`buildPillarIconWrap ${
                        pillar.tint === "blue"
                          ? "buildPillarIconWrapBlue"
                          : "buildPillarIconWrapRed"
                      }`}
                    >
                      <img
                        src={logoSrc}
                        alt={`${pillar.highlight} logo`}
                        className="buildPillarIcon"
                      />
                    </div>
                    <div>
                      <CardTitle className="buildPillarTitle">
                        {pillar.title}
                      </CardTitle>
                      <p className="buildPillarHighlight">{pillar.highlight}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="buildPillarContent">
                    <p className="buildPillarDescription">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
