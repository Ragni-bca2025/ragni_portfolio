import HeroScene from "../3d/HeroScene";

export default function HeroSceneExample() {
  return (
    <div className="relative h-[400px] bg-black">
      <HeroScene />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <p className="text-neon-cyan font-mono">3D Hero Scene with particles</p>
      </div>
    </div>
  );
}
