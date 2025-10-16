import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    // Redirigir directamente al archivo HTML sin procesarlo
    window.location.href = "/mPrincipal/index.html";
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <p>Redirigiendo...</p>
    </div>
  );
}

export default HomePage;