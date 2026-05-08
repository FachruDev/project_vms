import Icon from "./IconInternal";

const iconTone = {
  file: "text-[#153c7a] bg-[#dbe7ff]",
  users: "text-[#0e9f6e] bg-[#d5efea]",
  clock: "text-[#d99a00] bg-[#efece2]",
  "trend-up": "text-[#153c7a] bg-[#dbe7ff]",
};

function KpiCard({ card }) {
  const hasTrend = card.trendTone === "up";

  return (
    <article className="overflow-hidden rounded-2xl border border-[#c9d8f0] bg-[#edf3ff] px-6 py-6 shadow-[0_8px_15px_rgba(15,23,42,0.04)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[#5f6f87]">
            {card.title}
          </p>
          <p className="mt-3 text-3xl font-bold leading-none text-[#122434] tracking-tight">
            {card.value}
          </p>
          {hasTrend ? (
            <span className="mt-3 inline-flex items-center rounded-full bg-[#bfdbe0] px-3 py-1 text-sm font-semibold text-[#12966a]">
              {card.subtitle}
            </span>
          ) : card.subtitle ? (
            <p className="mt-2 text-xs font-medium text-[#5f6f87] opacity-90">{card.subtitle}</p>
          ) : null}
        </div>

        <div 
          className={`grid h-16 w-16 place-items-center rounded-2xl ${
            iconTone[card.icon] ?? "bg-[#dbe7ff] text-[#153c7a]"
          }`}
        >
          <Icon name={card.icon} className="h-8 w-8" />
        </div>
      </div>
    </article>
  );
}

export default KpiCard;
