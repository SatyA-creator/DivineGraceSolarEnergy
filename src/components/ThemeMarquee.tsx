const DEFAULT_ITEMS = [
  "HEAL THE WORLD",
  "EFFICIENCY & POWER",
  "SOLAR FOR TOMORROW",
];

type ThemeMarqueeProps = {
  items?: string[];
};

export default function ThemeMarquee({ items = DEFAULT_ITEMS }: ThemeMarqueeProps) {
  const renderGroup = (groupKey: string) => (
    <div className="solar-marquee-group" aria-hidden="true">
      {items.map((item, index) => (
        <span key={`${groupKey}-${item}-${index}`} className="solar-marquee-item">
          <span className="solar-marquee-text">{item}</span>
          <span className="solar-marquee-sep" aria-hidden="true">
            /
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="solar-marquee" aria-label="Solar value marquee">
      <div className="solar-marquee-strip">
        <div className="solar-marquee-track">
          {renderGroup("left")}
          {renderGroup("right")}
        </div>
      </div>
      <div className="solar-marquee-bar" aria-hidden="true" />
    </section>
  );
}