import Icon from "./IconInternal";

const iconTone = {
  file: "text-[#153c7a] bg-[#dbe7ff] group-hover:bg-[#153c7a] group-hover:text-white",
  clock: "text-[#8a6d0a] bg-[#fef3c7] group-hover:bg-[#8a6d0a] group-hover:text-white", 
  award: "text-[#153c7a] bg-[#dbe7ff] group-hover:bg-[#153c7a] group-hover:text-white",
  check: "text-[#153c7a] bg-[#dbe7ff] group-hover:bg-[#153c7a] group-hover:text-white",
};

function KpiCard({ card }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[#c9d8f0] bg-[#edf3ff] px-6 py-6 shadow-[0_8px_15px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#153c7a]/30 hover:bg-white hover:shadow-[0_20px_25px_-5px_rgba(15,23,42,0.1),0_10px_10px_-5px_rgba(15,23,42,0.04)]">
      
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#153c7a]/5 transition-transform duration-500 group-hover:scale-[2.5]" />
      <div className="relative z-10 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[#55776f] transition-colors group-hover:text-[#153c7a]">
            {card.title}
          </p>
          <p className="mt-3 text-3xl font-bold leading-none text-[#122434] tracking-tight">
            {card.value}
          </p>
          <p className="mt-2 text-xs font-medium text-[#55776f] opacity-80">
            {card.subtitle}
          </p>
        </div>

        <div 
          className={`grid h-12 w-12 place-items-center rounded-xl transition-all duration-500 transform group-hover:rotate-[10deg] group-hover:scale-110 ${
            iconTone[card.icon] ?? "bg-[#b7d9d0] text-[#153c7a]"
          }`}
        >
          <Icon name={card.icon} className="h-6 w-6 transition-transform duration-500 group-hover:scale-90" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#153c7a] transition-all duration-500 group-hover:w-full" />
    </article>
  );
}

export default KpiCard;