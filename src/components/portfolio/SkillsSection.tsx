import {
  Brush,
  Database,
  Globe2,
  Layers3,
  Smartphone,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/portfolio/common/SectionTitle";
import { useActiveSkill } from "@/hooks/useActiveSkill";
import { skillSectionMessages, skillsMessages } from "@/messages/work.messages";
import "@/components/portfolio/styles/SkillsSection.css";

const skillIconMap: Record<string, LucideIcon> = {
  globe: Globe2,
  smartphone: Smartphone,
  zap: Zap,
  layers: Layers3,
  database: Database,
  brush: Brush,
};

export function SkillsSection() {
  const { active, setActive } = useActiveSkill(skillsMessages);
  const ActiveIcon = skillIconMap[active.iconKey] ?? Globe2;

  return (
    <section id="skills" className="skills">
      <div className="skillsBg" />
      <div className="skillsContainer">
        <SectionTitle
          eyebrow={skillSectionMessages.eyebrow}
          title={skillSectionMessages.title}
          description={skillSectionMessages.description}
        />

        <div className="skillsGrid">
          <Card className="skillsPanel">
            <CardContent className="skillsPanelContent">
              <div className="skillsPanelHeader">
                <div className="skillsIconWrap">
                  <ActiveIcon className="skillsActiveIcon" />
                </div>
                <div>
                  <p className="skillsSelectedLabel">
                    {skillSectionMessages.selectedSkillLabel}
                  </p>
                  <h3 className="skillsSelectedName">{active.name}</h3>
                </div>
              </div>
              <div className="skillsConfidence">
                <div className="skillsConfidenceHead">
                  <span>{skillSectionMessages.confidenceLabel}</span>
                  <span>{active.level}%</span>
                </div>
                <div className="skillsConfidenceBar">
                  <div
                    key={active.name}
                    style={{ width: `${active.level}%` }}
                    className="skillsConfidenceLevel"
                  />
                </div>
              </div>
              <p className="skillsDescription">
                {skillSectionMessages.panelDescription}
              </p>
            </CardContent>
          </Card>

          <div className="skillsCards">
            {skillsMessages.map((skill) => {
              const Icon = skillIconMap[skill.iconKey] ?? Globe2;
              const selected = active.name === skill.name;
              return (
                <button
                  key={skill.name}
                  onClick={() => setActive(skill)}
                  className={`skillsSkillBtn ${
                    selected ? "skillsSkillBtnActive" : "skillsSkillBtnInactive"
                  }`}
                >
                  <Icon
                    className={`${
                      selected
                        ? "skillsSkillIconActive"
                        : "skillsSkillIconInactive"
                    } skillsSkillIcon`}
                  />
                  <p className="skillsSkillName">{skill.name}</p>
                  <p className="skillsSkillHelper">
                    {skillSectionMessages.skillHelperText}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
