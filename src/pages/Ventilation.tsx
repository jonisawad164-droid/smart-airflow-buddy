import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Ventilation = () => {
  useEffect(() => {
    document.title = "LCC-beräkning – Ventilationsaggregat | Bravida";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute(
      "content",
      "LCC-beräkning för ventilationsaggregat – jämför befintligt mot nytt. SMHI-klimatdata för Södra Norrland & Dalarna."
    );
  }, []);

  return (
    <main className="relative w-full" style={{ height: "100dvh" }}>
      <h1 className="sr-only">LCC-beräkning för ventilationsaggregat – Bravida</h1>
      <Link
        to="/"
        aria-label="Till startsidan"
        className="fixed top-3 left-3 z-50 inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#1e4a7a] text-white text-sm font-semibold shadow-lg hover:bg-[#163d66]"
      >
        <Home className="w-4 h-4" />
        Hem
      </Link>
      <iframe
        src="/lcc-app.html"
        title="LCC-beräkning Ventilationsaggregat"
        className="w-full h-full border-0 block"
      />
    </main>
  );
};

export default Ventilation;
