function OfferProgress({ done, total }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 h-4">
        {Array.from({ length: total }).map((_, idx) => {
          const isDone = idx < done - 1;       
          const isCurrent = idx === done - 1;  
          
          return (
            <span
              key={idx}
              className={`rounded-full transition-all duration-500 ease-out ${
                isCurrent 
                  ? "h-3 w-3 bg-[#153c7a] ring-4 ring-[#153c7a]/10 shadow-[0_0_8px_rgba(21,60,122,0.3)]"  
                  : isDone 
                  ? "h-2 w-2 bg-[#153c7a]/60"      
                  : "h-2 w-2 bg-[#d1d9e6]"       
              }`}
            />
          );
        })}
      </div>

      <span className="text-[11px] font-bold text-[#153c7a] bg-[#153c7a]/5 px-2 py-0.5 rounded-md">
        {done} <span className="text-[#6d817b] font-medium">/ {total}</span>
      </span>
    </div>
  );
}

function OfferStatusCard({ offers }) {
  return (
    <article className="rounded-2xl border border-[#d9dde4] bg-[#f6f7f9] p-5 shadow-[0_8px_20px_rgba(10,18,35,0.04)]">
      <h3 className="text-[15px] font-bold text-[#202838] tracking-tight">Status Penawaran Saya</h3>

      <div className="mt-4 space-y-3">
        {offers.map((offer) => (
          <div 
            key={offer.id} 
            className="group rounded-xl border border-transparent bg-[#eceef2] p-4 transition-all duration-300 hover:border-[#153c7a]/20 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
          >
            <p className="text-sm font-semibold leading-tight text-[#222b3a] transition-colors duration-300 group-hover:text-[#153c7a]">
              {offer.title}
            </p>
            <div className="mt-3">
              <OfferProgress done={offer.done} total={offer.total} />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default OfferStatusCard;