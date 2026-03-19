const logos = [
  "NovaTech", "FitPulse", "GreenLeaf", "CloudSync", "UrbanEats", "Luxe",
  "Zenith", "Apex Digital", "BlueHorizon", "Vertex", "Prism Co", "Orbit",
  "Quantum", "NexGen", "Skyline", "Ember", "Atlas Corp", "Vibe Studio"
];

const ClientLogos = () => (
  <section className="w-full py-12 overflow-hidden border-y border-border/40 bg-secondary/30">
    <p className="text-center text-sm text-muted-foreground mb-6 font-medium">Trusted by leading brands worldwide</p>
    <div className="w-full flex whitespace-nowrap">
      <div className="marquee flex items-center gap-16 pr-16">
        {[...logos, ...logos].map((l, i) => (
          <span key={i} className="font-heading text-2xl font-bold text-muted-foreground/25 select-none hover:text-primary/40 transition-colors">{l}</span>
        ))}
      </div>
    </div>
  </section>
);

export default ClientLogos;
