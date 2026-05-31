import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MoreThanWorkout from './components/MoreThanWorkout';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import ClassSchedule from './components/ClassSchedule';
import StudioOverview from './components/StudioOverview';
import Membership from './components/Membership';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { Language, StudioClass, PricingItem } from './types';
import { sampleClasses } from './translations';

const CheckoutModal = lazy(() => import('./components/CheckoutModal'));
const ButtonsPage = lazy(() => import('./pages/ButtonsPage'));

function MainSite() {
  const [currentLang, setCurrentLang] = useState<Language>('pt');
  const [selectedClass, setSelectedClass] = useState<StudioClass | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PricingItem | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleBookClass = (cl: StudioClass, time: string) => {
    setSelectedClass(cl);
    setSelectedTime(time);
    setSelectedPlan(null);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    setTimeout(() => {
      setSelectedClass(null);
      setSelectedTime(null);
      setSelectedPlan(null);
    }, 200);
  };

  const handleSelectPlan = (plan: PricingItem) => {
    setSelectedClass(null);
    setSelectedTime(null);
    setSelectedPlan(plan);
    setIsCheckoutOpen(true);
  };

  const handleClassesLearnClick = () => {
    const el = document.getElementById('classes');
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#050505] text-white selection:bg-energy-green selection:text-deep-black font-sans relative antialiased">
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onBookClick={() => handleBookClass(sampleClasses[0], sampleClasses[0].timeSlots[0])}
      />
      <HeroSection
        currentLang={currentLang}
        onBookClick={() => handleBookClass(sampleClasses[0], sampleClasses[0].timeSlots[0])}
        onClassesClick={handleClassesLearnClick}
      />
      <MoreThanWorkout currentLang={currentLang} />
      <HowItWorks currentLang={currentLang} />
      <Benefits currentLang={currentLang} />
      <ClassSchedule currentLang={currentLang} onBookClass={handleBookClass} />
      <StudioOverview currentLang={currentLang} />
      <Membership currentLang={currentLang} onSelectPlan={handleSelectPlan} />
      <FAQ currentLang={currentLang} />
      <CTASection currentLang={currentLang} />
      <Footer currentLang={currentLang} />
      {isCheckoutOpen && (
        <Suspense fallback={null}>
          <CheckoutModal
            currentLang={currentLang}
            selectedClass={selectedClass}
            selectedTime={selectedTime}
            selectedPlan={selectedPlan}
            onClose={handleCloseCheckout}
          />
        </Suspense>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-[#050505]" />}>
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/buttons" element={<ButtonsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
