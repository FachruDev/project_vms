import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

function TopNavbar({ notificationCount }) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const delta = currentY - lastScrollYRef.current;

        if (currentY <= 10) {
          setIsVisible(true);
        } else if (Math.abs(delta) > 6) {
          setIsVisible(delta < 0);
        }

        lastScrollYRef.current = currentY;
        tickingRef.current = false;
      });
    };

    lastScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#d7dbe2] bg-[#f4f6f8] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex w-full max-w-full items-center gap-3 px-2 py-2.5 md:px-4">
        
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-xl bg-[#153c7a] text-xl font-bold text-white shadow-sm">T</div>
          <div className="hidden sm:block">
            <p className="text-md leading-none font-bold tracking-tight text-[#0f1c34]">TenderPro</p>
            <p className="text-[10px] font-medium text-[#657785]">Vendor Portal</p>
          </div>
        </div>

        <div className="hidden flex-1 justify-center lg:flex">
          <label className="flex w-full max-w-2xl items-center gap-3 rounded-xl bg-[#eceff3] px-4 py-2 border-2 border-transparent transition-all focus-within:border-[#153c7a] focus-within:bg-white focus-within:shadow-sm">
            <Icon name="search" className="h-4 w-4 text-[#71808c]" />
            <input
              type="search"
              placeholder="Cari tender, vendor..."
              className="w-full bg-transparent text-sm font-medium outline-none text-[#0f1c34] placeholder:text-[#71808c]"
            />
          </label>
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          
          <button 
            type="button" 
            className="group relative grid h-10 w-10 place-items-center rounded-xl text-[#4b5563] transition-all hover:bg-[#153c7a] hover:shadow-md active:scale-95"
          >
            <Icon 
              name="bell" 
              className="h-5 w-5 transition-colors group-hover:text-white" 
            />
            
            {notificationCount > 0 && (
              <span className="absolute right-2 top-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#ef4444] px-1 text-[10px] font-bold text-white ring-2 ring-[#f4f6f8] group-hover:ring-[#153c7a]">
                {notificationCount}
              </span>
            )}
          </button>

          <div className="h-8 w-8 rounded-full bg-[#d1d5db] border-2 border-white shadow-sm overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=User&background=random" alt="profile" />
          </div>

        </div>
      </div>
    </header>
  );
}

export default TopNavbar;
