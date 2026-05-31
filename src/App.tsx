import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Routes, Route, useParams } from 'react-router-dom';
import SeoManager from './components/SeoManager';
import { Language } from './types';
import { isLanguage } from './lib/language';

const MainSite = lazy(() => import('./pages/MainSite'));
const FastHomePage = lazy(() => import('./pages/FastHomePage'));
const ButtonsPage = lazy(() => import('./pages/ButtonsPage'));
const BioPage = lazy(() => import('./pages/BioPage'));

function LocalizedHome() {
  const { lang } = useParams();

  if (!isLanguage(lang)) {
    return <Navigate to="/" replace />;
  }

  return <MainSite initialLanguage={lang} />;
}

function BioRoute({ initialLanguage }: { initialLanguage?: Language }) {
  return <BioPage initialLanguage={initialLanguage} />;
}

function LocalizedBio() {
  const { lang } = useParams();

  if (!isLanguage(lang)) {
    return <Navigate to="/bio" replace />;
  }

  return <BioRoute initialLanguage={lang} />;
}

function ButtonsRoute() {
  return (
    <>
      <SeoManager language="en" page="buttons" />
      <ButtonsPage />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-[#050505]" />}>
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/home" element={<FastHomePage />} />
          <Route path="/:lang" element={<LocalizedHome />} />
          <Route path="/bio" element={<BioRoute />} />
          <Route path="/:lang/bio" element={<LocalizedBio />} />
          <Route path="/buttons" element={<ButtonsRoute />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
