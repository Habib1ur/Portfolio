"use client";

const particles = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  size: 4 + ((index * 5) % 10),
  left: `${(index * 7) % 100}%`,
  top: `${(index * 13) % 100}%`,
  delay: `${(index % 7) * 0.6}s`,
  duration: `${8 + (index % 5)}s`
}));

export function FloatingParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full bg-white/10 blur-[2px]"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            animation: `float ${particle.duration} ease-in-out ${particle.delay} infinite`
          }}
        />
      ))}
    </div>
  );
}
