import SkillChip from "../ui/SkillChip";

const skills = ["React", "TypeScript", "Three.js", "GSAP", "Node.js"];

export default function SkillChipExample() {
  return (
    <div className="flex flex-wrap gap-3 p-8 bg-black justify-center">
      {skills.map((skill, index) => (
        <SkillChip key={skill} skill={skill} index={index} />
      ))}
    </div>
  );
}
