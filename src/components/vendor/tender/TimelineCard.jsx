function TimelineCard({ timeline }) {
  return (
    <article className="rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-5 shadow-[0_8px_18px_rgba(10,18,35,0.06)]">
      <h3 className="text-lg font-semibold text-[#08253a]">Timeline</h3>

      <div className="mt-4 space-y-4">
        {timeline.map((item, index) => (
          <div key={item.id} className="relative pl-6">
            {index !== timeline.length - 1 ? <span className="absolute left-[5px] top-4 h-10 w-[2px] bg-[#d4dce4]" /> : null}
            <span className={`absolute left-0 top-1.5 h-3 w-3 rounded-full ${item.tone === "yellow" ? "bg-[#f0b429]" : "bg-[#153c7a]"}`} />
            <p className="font-semibold text-sm text-[#0f2431]">{item.title}</p>
            <p className="text-xs text-[#60717e]">{item.date}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default TimelineCard;
