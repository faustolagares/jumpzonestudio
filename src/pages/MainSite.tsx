import { lazy, Suspense, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import LazySection from '../components/LazySection';
import SeoManager from '../components/SeoManager';
import { getInitialLanguage, saveLanguage } from '../lib/language';
import { sampleClasses } from '../translations';
import { Language, PricingItem, StudioClass } from '../types';

const MoreThanWorkout = lazy(() => import('../components/MoreThanWorkout'));
const HowItWorks = lazy(() => import('../components/HowItWorks'));
const Benefits = lazy(() => import('../components/Benefits'));
const ClassSchedule = lazy(() => import('../components/ClassSchedule'));
const StudioOverview = lazy(() => import('../components/StudioOverview'));
const Membership = lazy(() => import('../components/Membership'));
const FAQ = lazy(() => import('../components/FAQ'));
const CTASection = lazy(() => import('../components/CTASection'));
const Footer = lazy(() => import('../components/Footer'));
const CheckoutModal = lazy(() => import('../components/CheckoutModal'));

export default function MainSite({ initialLanguage }: { initialLanguage?: Language }) {
  const [currentLang, setCurrentLang] = useState<Language>(() => getInitialLanguage(initialLanguage));
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

  const handleLanguageChange = (language: Language) => {
    saveLanguage(language);
    setCurrentLang(language);
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
      <SeoManager language={currentLang} page="home" />
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onBookClick={() => handleBookClass(sampleClasses[0], sampleClasses[0].timeSlots[0])}
      />
      <HeroSection
        currentLang={currentLang}
        onBookClick={() => handleBookClass(sampleClasses[0], sampleClasses[0].timeSlots[0])}
        onClassesClick={handleClassesLearnClick}
      />
      <LazySection minHeight={760}>
        <Suspense fallback={null}>
          <MoreThanWorkout currentLang={currentLang} />
        </Suspense>
      </LazySection>
      <LazySection minHeight={900}>
        <Suspense fallback={null}>
          <HowItWorks currentLang={currentLang} />
        </Suspense>
      </LazySection>
      <LazySection minHeight={700}>
        <Suspense fallback={null}>
          <Benefits currentLang={currentLang} />
        </Suspense>
      </LazySection>
      <LazySection minHeight={920}>
        <Suspense fallback={null}>
          <ClassSchedule currentLang={currentLang} onBookClass={handleBookClass} />
        </Suspense>
      </LazySection>
      <LazySection minHeight={900}>
        <Suspense fallback={null}>
          <StudioOverview currentLang={currentLang} />
        </Suspense>
      </LazySection>
      <LazySection minHeight={920}>
        <Suspense fallback={null}>
          <Membership currentLang={currentLang} onSelectPlan={handleSelectPlan} />
        </Suspense>
      </LazySection>
      <LazySection minHeight={620}>
        <Suspense fallback={null}>
          <FAQ currentLang={currentLang} />
        </Suspense>
      </LazySection>
      <LazySection minHeight={520}>
        <Suspense fallback={null}>
          <CTASection currentLang={currentLang} />
        </Suspense>
      </LazySection>
      <LazySection minHeight={480}>
        <Suspense fallback={null}>
          <Footer currentLang={currentLang} />
        </Suspense>
      </LazySection>
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
