import { useEffect } from "react";

const Index = () => {
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
    <main className="min-h-screen w-full">
      <h1 className="sr-only">LCC-beräkning för ventilationsaggregat – Bravida</h1>
      <iframe
        src="/lcc-app.html"
        title="LCC-beräkning Ventilationsaggregat"
        className="w-full h-screen border-0 block"
      />
    </main>
  );
};

export default Index;
