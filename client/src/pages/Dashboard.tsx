import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    // Redirect to the public portfolio — the dashboard has been removed
    window.location.replace('/');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Dashboard Removed</h1>
        <p className="text-slate-600 mt-2">Redirecting to public portfolio...</p>
      </div>
    </div>
  );
}
