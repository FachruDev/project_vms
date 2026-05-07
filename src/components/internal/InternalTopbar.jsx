import React from "react";

function InternalTopbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d8e0ef] bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-3 md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5b6f95]">Internal Workspace</p>
          <h1 className="text-lg font-bold text-[#153c7a] md:text-xl">Tender Internal Dashboard</h1>
        </div>

        <span className="rounded-full bg-[#eaf0ff] px-3 py-1 text-xs font-semibold text-[#153c7a]">
          Prototype
        </span>
      </div>
    </header>
  );
}

export default InternalTopbar;