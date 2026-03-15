export function SectionBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-glow/10 blur-3xl" />
      <div className="absolute right-[-8%] top-[35%] h-80 w-80 rounded-full bg-glowAlt/10 blur-3xl" />
      <div className="absolute bottom-[8%] left-[30%] h-72 w-72 rounded-full bg-glowSoft/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:110px_110px] opacity-[0.18]" />
    </div>
  );
}
