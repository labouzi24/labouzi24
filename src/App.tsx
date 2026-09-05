import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { I18nProvider } from "./i18n/I18nContext";
import DeckPage from "./pages/DeckPage";
import ChooseBrandPage from "./pages/ChooseBrandPage";
import OffersPage from "./pages/OffersPage";

export default function App() {
  return (
    <AuthProvider>
      <I18nProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DeckPage />} />
            <Route path="/choisir" element={<ChooseBrandPage />} />
            <Route path="/offres" element={<OffersPage />} />
          </Routes>
        </BrowserRouter>
      </I18nProvider>
    </AuthProvider>
  );
}
