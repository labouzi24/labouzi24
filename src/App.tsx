import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { I18nProvider } from "./i18n/I18nContext";
import DeckPage from "./pages/DeckPage";
import ChooseBrandPage from "./pages/ChooseBrandPage";
import OffersPage from "./pages/OffersPage";
import VendorPage from "./pages/VendorPage";
import LegalPage from "./pages/LegalPage";
import AboutPage from "./pages/AboutPage";
import ScrollToHash from "./components/ScrollToHash";
import BetaBanner from "./components/BetaBanner";

export default function App() {
  return (
    <AuthProvider>
      <I18nProvider>
        <BetaBanner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<DeckPage />} />
            <Route path="/choisir" element={<ChooseBrandPage />} />
            <Route path="/offres" element={<OffersPage />} />
            <Route path="/devenir-vendeur" element={<VendorPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </I18nProvider>
    </AuthProvider>
  );
}
