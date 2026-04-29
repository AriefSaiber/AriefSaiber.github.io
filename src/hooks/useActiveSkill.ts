import { useState } from "react";
import type { SkillMessage } from "@/messages/work.messages";

export function useActiveSkill(skills: SkillMessage[]) {
  const [active, setActive] = useState(skills[0]);
  return { active, setActive };
}
