const logos = [
  "NovaTech", "FitPulse", "GreenLeaf", "CloudSync", "UrbanEats", "Luxe",
  "Zenith", "Apex Digital", "BlueHorizon", "Vertex", "Prism Co", "Orbit"
];

const ClientLogos = () => (
  <section className="py-16 overflow-hidden border-y border-border/20">
    <div className="flex whitespace-nowrap">
      <div className="marquee flex items-center gap-16 pr-16">
        {[...logos, ...logos].map((l, i) => (
          <span key={i} className="font-heading text-2xl font-bold text-muted-foreground/30 select-none">{l}</span>
        ))}
      </div>
    </div>
  </section>
);

export default ClientLogos;
