import { useState } from 'react';
import { Check, ShieldAlert, Sparkles, AlertTriangle } from 'lucide-react';
import { Language, PricingItem } from '../types';
import { samplePricing, translations } from '../translations';
import { motion } from 'motion/react';
import { JumpButton } from './JumpButton';

interface StoreCardsProps {
  currentLang: Language;
  onSelectPlan: (item: PricingItem) => void;
}

export default function StoreCards({ currentLang, onSelectPlan }: StoreCardsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'drop_in' | 'pack' | 'membership'>('all');
  const t = translations[currentLang];

  const tabs = [
    { label: t.filterAll, id: 'all' as const },
    { label: t.tabSingleClass, id: 'drop_in' as const },
    { label: t.tabClassPacks, id: 'pack' as const },
    { label: t.tabMemberships, id: 'membership' as const }
  ];

  // Filter plans based on categories
  const filteredPlans = samplePricing.filter(p => activeTab === 'all' || p.type === activeTab);

  return (
    <section id="pricing" className="py-24 bg-black relative">
      
      {/* Background decoration elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-energy-green/5 blur-[120px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white uppercase">
            {t.pricingTitle}
          </h2>
          <div className="w-12 h-[2px] mx-auto bg-energy-green rounded-full" />
          <p className="text-cool-gray max-w-xl mx-auto text-sm sm:text-base font-normal">
            {t.pricingSubtitle}
          </p>
        </div>

        {/* Founding Discount Banner */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="bg-energy-green/5 p-3 rounded-xl border border-energy-green/10 text-center flex items-center justify-center gap-2">
            <AlertTriangle className="w-3.5 h-3.5 text-energy-green shrink-0" />
            <span className="text-[10px] font-mono font-bold text-energy-green tracking-wider uppercase">
              {t.limitedSpots}
            </span>
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center items-center mb-10">
          <div className="bg-dark-charcoal/60 p-1 rounded-full border border-white/[0.04] flex flex-wrap gap-1 justify-center max-w-md w-full sm:w-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-[11px] font-mono font-bold uppercase tracking-wider px-4 py-2 hover:text-white rounded-full transition-[background-color,color] duration-150 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-energy-green text-deep-black font-semibold'
                    : 'text-cool-gray hover:bg-white/[0.02]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-2"
        >
          {filteredPlans.map((item) => {
            const isFeatured = item.popular;
            
            return (
              <motion.div
                key={item.id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.23, 1, 0.32, 1] } } }}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-colors duration-200 relative overflow-hidden ${
                  isFeatured 
                    ? 'bg-dark-charcoal border-white/20' 
                    : 'bg-dark-charcoal/40 hover:bg-dark-charcoal border-white/[0.04]'
                }`}
              >
                {/* Visual badge top accents for most popular card */}
                {isFeatured && (
                  <div className="absolute top-0 right-0 bg-energy-green text-deep-black text-[9px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}

                {/* Card Top Block */}
                <div>
                  {/* Category Type Name tag */}
                  <span className="text-[9px] font-mono tracking-wider text-steel-gray bg-white/5 px-2 py-0.5 rounded border border-white/5 inline-block uppercase">
                    {item.quantityDesc}
                  </span>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-display font-medium text-white uppercase mt-4 mb-1 tracking-wide">
                    {item.name[currentLang]}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-xs text-cool-gray leading-snug font-sans font-normal pb-4 border-b border-white/[0.04]">
                    {item.subtitle[currentLang]}
                  </p>

                  {/* Pricing cost amount ticker */}
                  <div className="py-5 flex items-baseline select-none">
                    <span className="text-lg font-mono text-cool-gray">$</span>
                    <span className="text-5xl sm:text-6xl font-display font-medium text-white tracking-widest ml-1 leading-none">
                      {item.price}
                    </span>
                    <span className="text-[10px] text-cool-gray font-mono font-medium ml-2">
                      {item.type === 'membership' ? t.perMonth : t.perClass}
                    </span>
                  </div>

                  {/* Feature checklist lists */}
                  <div className="space-y-3 pt-1 pb-6 text-xs text-cool-gray">
                    {item.features[currentLang].map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-energy-green flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 font-sans leading-tight font-normal">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer actions */}
                <JumpButton
                  onClick={() => onSelectPlan(item)}
                  variant={isFeatured ? "primary" : "secondary"}
                  fullWidth={true}
                  iconType="chevron"
                >
                  {t.buyNow}
                </JumpButton>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
