import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { I18nProvider } from "./i18n/I18nContext";
import DeckPage from "./pages/DeckPage";

export default function App() {
  return (
    <AuthProvider>
      <I18nProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DeckPage />} />
            {/* TODO: add the brand/model/part selection page here once it's built,
                e.g. <Route path="/choose-brand" element={<ChooseBrandPage />} /> */}
          </Routes>
        </BrowserRouter>
      </I18nProvider>
    </AuthProvider>
  );
}
