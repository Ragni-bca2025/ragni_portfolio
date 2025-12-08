import CustomCursor from "../CustomCursor";

export default function CustomCursorExample() {
  return (
    <div className="relative min-h-[300px] bg-black p-8">
      <CustomCursor />
      <div className="text-center">
        <p className="text-muted-foreground mb-4">Move your mouse around</p>
        <button
          className="px-4 py-2 rounded border border-neon-cyan text-neon-cyan"
          data-cursor="Click"
        >
          Hover me
        </button>
      </div>
    </div>
  );
}
