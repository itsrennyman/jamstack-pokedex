import Navbar from "../components/Navbar";

import "../utils/capitalize";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
