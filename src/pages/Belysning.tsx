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
    <main className="relative w-full" style={{ height: "100dvh" }}>
      <h1 className="sr-only">LCC-beräkning för allmän belysning – Bravida</h1>
      <Link
        to="/"
        aria-label="Till startsidan"
        className="fixed top-3 left-3 z-50 inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#1e4a7a] text-white text-sm font-semibold shadow-lg hover:bg-[#163d66]"
      >
        <Home className="w-4 h-4" />
        Hem
      </Link>
      <iframe
        src="/belysning-app.html"
        title="LCC-beräkning Allmän belysning"
        className="w-full h-full border-0 block"
      />
    </main>
  );
};

export default Belysning;
