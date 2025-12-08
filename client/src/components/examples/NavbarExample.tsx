import Navbar from "../layout/Navbar";

export default function NavbarExample() {
  return (
    <div className="relative min-h-[200px] bg-black">
      <Navbar />
      <div className="pt-20 p-8 text-center text-muted-foreground">
        <p>Navbar component with neon styling</p>
      </div>
    </div>
  );
}
