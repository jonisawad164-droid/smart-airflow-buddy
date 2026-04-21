import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Wind, Lightbulb } from "lucide-react";

const Home = () => {
  useEffect(() => {
    document.title = "LCC-beräkningar | Bravida";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute(
      "content",
      "Bravida LCC-verktyg – välj mellan LCC för ventilationsaggregat eller allmän belysning."
    );
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#f0f4f8] flex flex-col">
      <header className="bg-[#1e4a7a] text-white px-4 py-4">
        <h1 className="text-lg font-bold">Bravida LCC-verktyg</h1>
        <p className="text-xs text-[#a8c8e0]">Livscykelkostnadsberäkning</p>
      </header>

      <section className="flex-1 px-4 py-6 max-w-3xl w-full mx-auto">
        <h2 className="text-base font-bold text-[#1e4a7a] mb-3 uppercase tracking-wide">Välj kalkyl</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            to="/ventilation"
            className="bg-white rounded-2xl p-5 shadow-sm border border-transparent hover:border-[#1e4a7a] transition-colors flex flex-col items-start gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-[#e8f0f8] text-[#1e4a7a] flex items-center justify-center">
              <Wind className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1a1a1a]">Ventilationsaggregat</h3>
              <p className="text-sm text-[#666] mt-1">
                Jämför befintligt mot nytt aggregat. SMHI-klimatdata för Södra Norrland & Dalarna.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#1e4a7a] mt-auto">Öppna →</span>
          </Link>

          <Link
            to="/belysning"
            className="bg-white rounded-2xl p-5 shadow-sm border border-transparent hover:border-[#1e4a7a] transition-colors flex flex-col items-start gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-[#fff8e1] text-[#b8860b] flex items-center justify-center">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1a1a1a]">Allmän belysning</h3>
              <p className="text-sm text-[#666] mt-1">
                Jämför befintlig belysning mot LED. Räkna armaturer eller direkt i kW. Hotell business case.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#1e4a7a] mt-auto">Öppna →</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
