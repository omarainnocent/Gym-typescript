import Navbar from "@/scenes/navbar";
import OurClasses from "@/scenes/ourClasses";
import Home from "@/scenes/Home/index";
import Benefits from "@/scenes/benefits";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import ContactUs from "@/scenes/contactus/ContactUs";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-200"> {/* Change to bg-gray-200 */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedpage={setSelectedPage} /> {/* Corrected prop name */}
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
