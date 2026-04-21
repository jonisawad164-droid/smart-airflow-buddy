import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Belysning = () => {
  useEffect(() => {
    document.title = "LCC-beräkning – Allmän belysning | Bravida";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute(
      "content",
      "LCC-beräkning för allmän belysning – jämför befintligt mot LED. Hotell business case med payoff och CO₂-besparing."
    );
  }, []);

  return (
    <main className="flex flex-col w-full" style={{ height: "100dvh" }}>
      <h1 className="sr-only">LCC-beräkning för allmän belysning – Bravida</h1>
      <div className="flex items-center gap-2 px-3 py-2 bg-[#163d66] text-white shrink-0">
        <Link
          to="/"
          aria-label="Till startsidan"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/15 hover:bg-white/25 text-sm font-medium"
        >
          <Home className="w-4 h-4" />
          Hem
        </Link>
        <span className="text-xs text-[#a8c8e0]">LCC – Allmän belysning</span>
      </div>
      <iframe
        src="/belysning-app.html"
        title="LCC-beräkning Allmän belysning"
        className="w-full flex-1 border-0 block"
      />
    </main>
  );
};

export default Belysning;
