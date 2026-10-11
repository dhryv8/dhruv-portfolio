const METEORS = [
  { left: "18%", top: "-8%", delay: "-3s", duration: "14s" },
  { left: "42%", top: "8%", delay: "-11s", duration: "18s" },
  { left: "68%", top: "-12%", delay: "-7s", duration: "16s" },
  { left: "92%", top: "12%", delay: "-15s", duration: "20s" },
]

export function MeteorBackground() {
  return (
    <div className="meteor-background" aria-hidden="true">
      {METEORS.map((meteor) => (
        <span
          key={meteor.left}
          className="meteor-streak"
          style={{
            left: meteor.left,
            top: meteor.top,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        />
      ))}
    </div>
  )
}
