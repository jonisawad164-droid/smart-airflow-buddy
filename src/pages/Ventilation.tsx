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
    <main className="flex flex-col w-full" style={{ height: "100dvh" }}>
      <h1 className="sr-only">LCC-beräkning för ventilationsaggregat – Bravida</h1>
      <div className="flex items-center gap-2 px-3 py-2 bg-[#163d66] text-white shrink-0">
        <Link
          to="/"
          aria-label="Till startsidan"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/15 hover:bg-white/25 text-sm font-medium"
        >
          <Home className="w-4 h-4" />
          Hem
        </Link>
        <span className="text-xs text-[#a8c8e0]">LCC – Ventilation</span>
      </div>
      <iframe
        src="/lcc-app.html"
        title="LCC-beräkning Ventilationsaggregat"
        className="w-full flex-1 border-0 block"
      />
    </main>
  );
};

export default Ventilation;
