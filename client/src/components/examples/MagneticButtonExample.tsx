import MagneticButton from "../ui/MagneticButton";

export default function MagneticButtonExample() {
  return (
    <div className="p-8 bg-black flex gap-4 justify-center">
      <MagneticButton className="bg-neon-cyan text-black">
        Primary Action
      </MagneticButton>
      <MagneticButton variant="outline" className="border-neon-magenta text-neon-magenta">
        Secondary
      </MagneticButton>
    </div>
  );
}
