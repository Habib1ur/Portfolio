export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface">
      <div className="relative flex items-center gap-4">
        <span className="h-3 w-3 animate-pulse rounded-full bg-glow" />
        <span className="font-display text-sm uppercase tracking-[0.5em] text-white/70">
          Initializing Experience
        </span>
      </div>
    </div>
  );
}
