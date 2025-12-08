import { useState } from "react";
import Preloader from "../Preloader";
import { Button } from "@/components/ui/button";

export default function PreloaderExample() {
  const [showPreloader, setShowPreloader] = useState(true);

  if (!showPreloader) {
    return (
      <div className="p-8 text-center bg-black min-h-[300px] flex items-center justify-center">
        <Button onClick={() => setShowPreloader(true)}>Show Preloader Again</Button>
      </div>
    );
  }

  return (
    <div className="relative min-h-[400px] bg-black">
      <Preloader onComplete={() => setShowPreloader(false)} />
    </div>
  );
}
