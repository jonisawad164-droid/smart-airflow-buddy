import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Logga in | Bravida LCC";
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/", { replace: true });
    });
  }, [navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error(error.message === "Invalid login credentials" ? "Fel e-post eller lösenord" : error.message);
      return;
    }
    navigate("/", { replace: true });
  };

  return (
    <main className="min-h-screen w-full bg-[#f0f4f8] flex flex-col">
      <header className="bg-[#1e4a7a] text-white px-4 py-4">
        <h1 className="text-lg font-bold">Bravida LCC-verktyg</h1>
        <p className="text-xs text-[#a8c8e0]">Logga in för att fortsätta</p>
      </header>

      <section className="flex-1 px-4 py-10 max-w-md w-full mx-auto">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-base font-bold text-[#1e4a7a] mb-4 uppercase tracking-wide">Logga in</h2>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-post</Label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Lösenord</Label>
              <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-[#1e4a7a] hover:bg-[#163961]">
              {loading ? "Loggar in..." : "Logga in"}
            </Button>
          </form>
          <p className="text-xs text-[#666] mt-4">
            Konto skapas av administratören. Kontakta din administratör om du behöver tillgång.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Auth;
