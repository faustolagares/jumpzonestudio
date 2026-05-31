import { useState } from 'react';
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
import CheckoutModal from './components/CheckoutModal';
import { Language, StudioClass, PricingItem } from './types';
import { sampleClasses } from './translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('pt');
  
  // Checkout context states
  const [selectedClass, setSelectedClass] = useState<StudioClass | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PricingItem | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Trigger modal when an individual class hour is selected
  const handleBookClass = (cl: StudioClass, time: string) => {
    setSelectedClass(cl);
    setSelectedTime(time);
    setSelectedPlan(null);
    setIsCheckoutOpen(true);
  };

  // Close secure checkout and clean cache variables
  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    setTimeout(() => {
      setSelectedClass(null);
      setSelectedTime(null);
      setSelectedPlan(null);
    }, 200); // fade duration offset
  };

  // Trigger modal for direct membership tier selection
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
      
      {/* 1. Header bar with Language switcher */}
      <Navbar 
        currentLang={currentLang} 
        onLanguageChange={setCurrentLang} 
        onBookClick={() => handleBookClass(sampleClasses[0], sampleClasses[0].timeSlots[0])}
      />

      {/* 2. Hero banner with Sound check beats frequency regulator */}
      <HeroSection 
        currentLang={currentLang}
        onBookClick={() => handleBookClass(sampleClasses[0], sampleClasses[0].timeSlots[0])}
        onClassesClick={handleClassesLearnClick}
      />

      {/* 2.5 More than a workout inspirational section */}
      <MoreThanWorkout currentLang={currentLang} />

      {/* 2.6 How It Works style and classes catalog highlight */}
      <HowItWorks currentLang={currentLang} />

      {/* 2.7 Real benefits list section */}
      <Benefits currentLang={currentLang} />

      {/* 3. Interactive Class Schedules with Spot visual trackers */}
      <ClassSchedule 
        currentLang={currentLang}
        onBookClass={handleBookClass}
      />

      {/* 4. Beautiful Interactive Studio Showcase */}
      <StudioOverview currentLang={currentLang} />

      {/* 5. Comprehensive Responsive Membership Plans */}
      <Membership 
        currentLang={currentLang} 
        onSelectPlan={handleSelectPlan} 
      />

      {/* 6. Frequently Asked Questions Section */}
      <FAQ currentLang={currentLang} />

      {/* 7. Call To Action High Intensity Section */}
      <CTASection currentLang={currentLang} />

      {/* 8. Signature operations Footer */}
      <Footer 
        currentLang={currentLang}
      />

      {/* 9. Conditionally render Secure Trampoline spot allocation modal */}
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
