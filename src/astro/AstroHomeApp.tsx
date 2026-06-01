import { useState } from 'react';
import Benefits from '../components/Benefits';
import ClassSchedule from '../components/ClassSchedule';
import CheckoutModal from '../components/CheckoutModal';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Membership from '../components/Membership';
import MoreThanWorkout from '../components/MoreThanWorkout';
import Navbar from '../components/Navbar';
import StudioOverview from '../components/StudioOverview';
import { saveLanguage } from '../lib/language';
import { sampleClasses } from '../translations';
import { Language, PricingItem, StudioClass } from '../types';
import type { CSSProperties } from 'react';

const belowFoldSectionStyle = {
  contentVisibility: 'auto',
  containIntrinsicSize: '900px',
} satisfies CSSProperties;

export default function AstroHomeApp({ initialLanguage = 'en' }: { initialLanguage?: Language }) {
  const [currentLang, setCurrentLang] = useState<Language>(initialLanguage);
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
      <div style={belowFoldSectionStyle}>
        <MoreThanWorkout currentLang={currentLang} />
      </div>
      <div style={belowFoldSectionStyle}>
        <HowItWorks currentLang={currentLang} />
      </div>
      <div style={belowFoldSectionStyle}>
        <Benefits currentLang={currentLang} />
      </div>
      <div style={belowFoldSectionStyle}>
        <ClassSchedule currentLang={currentLang} onBookClass={handleBookClass} />
      </div>
      <div style={belowFoldSectionStyle}>
        <StudioOverview currentLang={currentLang} />
      </div>
      <div style={belowFoldSectionStyle}>
        <Membership currentLang={currentLang} onSelectPlan={handleSelectPlan} />
      </div>
      <div style={belowFoldSectionStyle}>
        <FAQ currentLang={currentLang} />
      </div>
      <div style={belowFoldSectionStyle}>
        <CTASection currentLang={currentLang} />
      </div>
      <div style={belowFoldSectionStyle}>
        <Footer currentLang={currentLang} />
      </div>
      {isCheckoutOpen && (
        <CheckoutModal
          currentLang={currentLang}
          selectedClass={selectedClass}
          selectedTime={selectedTime}
          selectedPlan={selectedPlan}
          onClose={handleCloseCheckout}
        />
      )}
    </div>
  );
}
