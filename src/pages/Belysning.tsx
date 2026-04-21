import { useEffect } from "react";

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
    <main className="min-h-screen w-full">
      <h1 className="sr-only">LCC-beräkning för allmän belysning – Bravida</h1>
      <iframe
        src="/belysning-app.html"
        title="LCC-beräkning Allmän belysning"
        className="w-full h-screen border-0 block"
      />
    </main>
  );
};

export default Belysning;
