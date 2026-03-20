const logos = [
  "NovaTech", "FitPulse", "GreenLeaf", "CloudSync", "UrbanEats", "Luxe",
  "Zenith", "Apex Digital", "BlueHorizon", "Vertex", "Prism Co", "Orbit",
  "Quantum", "NexGen", "Skyline", "Ember", "Atlas Corp", "Vibe Studio"
];

const ClientLogos = () => (
  <section className="w-full py-10 overflow-hidden border-y border-border/30 bg-muted/30">
    <p className="text-center text-xs text-muted-foreground mb-5 font-medium uppercase tracking-widest">
      Trusted by leading brands worldwide
    </p>
    <div className="w-full flex whitespace-nowrap">
      <div className="marquee flex items-center gap-14 pr-14">
        {[...logos, ...logos].map((l, i) => (
          <span key={i} className="font-heading text-xl font-bold text-muted-foreground/20 select-none hover:text-primary/30 transition-colors duration-300">{l}</span>
        ))}
      </div>
    </div>
  </section>
);

export default ClientLogos;
