import React from 'react';
import { Check, User, Users, Star, AlertTriangle } from 'lucide-react';
import { Language, PricingItem } from '../types';
import { JumpButton } from './Buttons';

interface MembershipProps {
  currentLang: Language;
  onSelectPlan: (plan: PricingItem) => void;
}

export default function Membership({ currentLang, onSelectPlan }: MembershipProps) {
  // Localized section info matching the visual request in three languages
  const sectionContent = {
    en: {
      tag: "MEMBERSHIPS",
      titlePre: "CHOOSE YOUR PLAN.",
      titleHighlight: "COMMIT TO YOU.",
      subtitleLine1: "Simple memberships. Big results.",
      subtitleLine2: "Find the plan that fits your lifestyle.",
      perMonth: "/MONTH",
      limitedSpots: "LIMITED FOUNDERS DISCOUNT PASSES STILL ACTIVE",
      guaranteeTitle: "NO CONTRACTS, SECURE BOOKING",
      guaranteeDesc: "Cancel or adjust your recurring subscription tier anytime. Seamless online spot reservation for every workout.",
      badgePopular: "MOST POPULAR",
      secureLabel: "SECURE SSL",
      flexibleLabel: "FLEXIBLE",
    },
    es: {
      tag: "MEMBRESÍAS",
      titlePre: "ELIGE TU PLAN.",
      titleHighlight: "COMPROMÉTETE CONTIGO.",
      subtitleLine1: "Membresías simples. Grandes resultados.",
      subtitleLine2: "Encuentra el plan para tu estilo de vida.",
      perMonth: "/MES",
      limitedSpots: "PASES CON DESCUENTO DE FUNDADOR AÚN ACTIVOS",
      guaranteeTitle: "SIN CONTRATOS, RESERVA SEGURA",
      guaranteeDesc: "Cancela o ajusta tu suscripción recurrente en cualquier momento. Reserva inmediata de tu trampolín individual.",
      badgePopular: "MÁS POPULAR",
      secureLabel: "SSL SEGURO",
      flexibleLabel: "FLEXIBLE",
    },
    pt: {
      tag: "PLANOS",
      titlePre: "ESCOLHA SEU PLANO.",
      titleHighlight: "COMPROMISSO COM VOCÊ.",
      subtitleLine1: "Planos simples. Resultados gigantescos.",
      subtitleLine2: "Encontre o plano ideal para seu estilo de vida.",
      perMonth: "/MÊS",
      limitedSpots: "DESCONTOS DE FUNDADOR ATIVOS POR TEMPO LIMITADO",
      guaranteeTitle: "SEM FIDELIDADE, AGENDAMENTO SEGURO",
      guaranteeDesc: "Cancele ou gerencie seu plano quando quiser. Reserve seu trampolim online para cada aula.",
      badgePopular: "MAIS POPULAR",
      secureLabel: "SSL SEGURO",
      flexibleLabel: "FLEXÍVEL",
    }
  };

  const t = sectionContent[currentLang] || sectionContent.en;

  // Localized precise plan copy from the mock design
  const pricingPlans: PricingItem[] = [
    {
      id: "price-starter",
      name: {
        en: "STARTER",
        es: "STARTER",
        pt: "STARTER"
      },
      price: 79,
      subtitle: {
        en: "8 CLASSES / MONTH",
        es: "8 CLASES / MES",
        pt: "8 AULAS / MÊS"
      },
      features: {
        en: ["Access to all class types", "Flexible scheduling", "Jump Zone community"],
        es: ["Acceso a todos los tipos de clases", "Horarios flexibles", "Comunidad Jump Zone"],
        pt: ["Acesso a todos os tipos de aulas", "Agendamento flexível", "Comunidade Jump Zone"]
      },
      popular: false,
      tag: "STARTER",
      type: "membership"
    },
    {
      id: "price-unlimited",
      name: {
        en: "UNLIMITED",
        es: "UNLIMITED",
        pt: "UNLIMITED"
      },
      price: 129,
      subtitle: {
        en: "UNLIMITED CLASSES",
        es: "CLASES ILIMITADAS",
        pt: "AULAS ILIMITADAS"
      },
      features: {
        en: ["Unlimited classes", "Priority booking", "Bring a friend (2x / month)", "Jump Zone community"],
        es: ["Clases ilimitadas", "Reserva prioritaria", "Trae un amigo (2x / mes)", "Comunidad Jump Zone"],
        pt: ["Aulas ilimitadas", "Agendamento prioritário", "Traga um amigo (2x / mês)", "Comunidade Jump Zone"]
      },
      popular: true,
      tag: "MOST POPULAR",
      type: "membership"
    },
    {
      id: "price-elite",
      name: {
        en: "ELITE",
        es: "ELITE",
        pt: "ELITE"
      },
      price: 159,
      subtitle: {
        en: "UNLIMITED + MORE",
        es: "UNLIMITED + MÁS",
        pt: "UNLIMITED + MAIS"
      },
      features: {
        en: ["Unlimited classes", "Priority booking", "Bring a friend (4x / month)", "Merch discount (20%)", "Exclusive events"],
        es: ["Clases ilimitadas", "Reserva prioritaria", "Trae un amigo (4x / mes)", "Descuento en ropa (20%)", "Eventos exclusivos"],
        pt: ["Aulas ilimitadas", "Agendamento prioritário", "Traga um amigo (4x / mês)", "Desconto em produtos (20%)", "Eventos exclusivos"]
      },
      popular: false,
      tag: "ELITE",
      type: "membership"
    }
  ];

  const getPlanIcon = (id: string) => {
    const iconClass = "w-7 h-7 text-energy-green stroke-[1.5]";
    if (id === "price-starter") return <User className={iconClass} />;
    if (id === "price-unlimited") return <Users className={iconClass} />;
    return <Star className={iconClass} />;
  };

  const getButtonText = (id: string) => {
    if (currentLang === 'pt') {
      if (id === "price-starter") return "ESCOLHER STARTER";
      if (id === "price-unlimited") return "ESCOLHER ILIMITADO";
      return "ESCOLHER ELITE";
    }
    if (currentLang === 'es') {
      if (id === "price-starter") return "ELEGIR STARTER";
      if (id === "price-unlimited") return "ELEGIR ILIMITADO";
      return "ELEGIR ELITE";
    }
    if (id === "price-starter") return "CHOOSE STARTER";
    if (id === "price-unlimited") return "CHOOSE UNLIMITED";
    return "CHOOSE ELITE";
  };

  return (
    <section 
      id="pricing" 
      className="relative bg-black py-24 sm:py-32 overflow-hidden border-t border-white/[0.04]"
    >
      {/* Radial lighting effects behind the section */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-energy-green/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-energy-green/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* CENTERED HEADER BLOCK */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <p className="text-energy-green font-mono uppercase text-xs sm:text-sm tracking-[0.25em] font-bold select-none mb-3">
            /// {t.tag}
          </p>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black leading-none tracking-normal text-white uppercase italic -skew-x-6">
            {t.titlePre}
            <span className="text-energy-green font-black block sm:inline">
              {" "}{t.titleHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans font-medium mt-4">
            {t.subtitleLine1}
            <br />
            <span className="text-cool-gray">
              {t.subtitleLine2}
            </span>
          </p>
        </div>

        {/* PRICE CARDS DECK WITH BRANDING ALIGNED TO THE REQUESTED SPECIFICATION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 items-center justify-center mb-20 max-w-[1200px] mx-auto">
          {pricingPlans.map((plan) => {
            const isPopular = plan.popular;
            const planName = plan.name[currentLang] || plan.name.en;
            const planSubtitle = plan.subtitle[currentLang] || plan.subtitle.en;
            const planFeatures = plan.features[currentLang] || plan.features.en;
            
            return (
              <div 
                key={plan.id}
                className={`relative group flex flex-col w-full ${
                  isPopular 
                    ? 'min-h-[595px] z-20 shadow-[0_0_50px_rgba(168,255,0,0.12)]' 
                    : 'min-h-[530px]'
                }`}
              >
                {/* 1. Styled Outer Border following asymmetrical cut shape system */}
                <div 
                  className={`absolute inset-0 transition-colors duration-200 ${
                    isPopular 
                      ? 'bg-energy-green shadow-[0_0_40px_rgba(168,255,0,0.12)]' 
                      : 'bg-white/10 group-hover:bg-energy-green'
                  }`}
                  style={{
                    clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)"
                  }}
                />

                {/* 2. Inner background block offset by 1px to render the border */}
                <div 
                  className="absolute inset-[1px] bg-deep-black group-hover:bg-dark-charcoal transition-colors duration-200 p-8 sm:p-10 flex flex-col justify-between overflow-hidden"
                  style={{
                    clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)"
                  }}
                >
                  {/* Popular green tab on the middle card inside clip boundary */}
                  {isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 select-none">
                      <div className="bg-energy-green text-black font-sans font-black text-[9px] tracking-[0.14em] uppercase py-1 px-4 text-center rounded-b-md shadow-md">
                        {t.badgePopular}
                      </div>
                    </div>
                  )}

                  {/* Header Element info */}
                  <div className="flex flex-col items-center text-center space-y-4 pt-3">
                    {/* Raw backgroundless Icon element matching outline system */}
                    <div className="flex items-center justify-center p-2 mb-1">
                      {getPlanIcon(plan.id)}
                    </div>
                    
                    {/* Plan name */}
                    <h3 className="font-mono font-bold text-xs tracking-[0.2em] text-cool-gray uppercase leading-none">
                      {planName}
                    </h3>

                    {/* Numeric Big display price */}
                    <div className="flex items-baseline justify-center">
                      <span className="text-5.5xl sm:text-6xl font-display font-black text-white italic tracking-tighter -skew-x-6 leading-none">
                        ${plan.price}
                      </span>
                      <span className="text-xs sm:text-xs text-energy-green font-mono font-bold uppercase ml-1">
                        {t.perMonth}
                      </span>
                    </div>

                    {/* Classes Subtitle */}
                    <div className="font-sans font-black text-sm tracking-widest text-white uppercase pt-1">
                      {planSubtitle}
                    </div>
                  </div>

                  {/* Visual Divider system line */}
                  <div className="w-10 h-[1.5px] bg-energy-green/20 my-4 self-center rounded-full" />

                  {/* Features listing block */}
                  <div className="flex-1 flex flex-col justify-start max-w-[240px] mx-auto w-full">
                    <ul className="space-y-3.5">
                      {planFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start text-left space-x-3">
                          <Check className="w-4 h-4 text-energy-green shrink-0 mt-0.5 stroke-[2.5px]" />
                          <span className="text-xs sm:text-[13px] text-steel-gray font-sans font-medium leading-tight">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Proper design-approved JumpButton actions trigger positioned elegantly at the bottom */}
                  <div className="w-full pt-4">
                    <JumpButton
                      variant={isPopular ? "primary" : "secondary"}
                      fullWidth
                      onClick={() => onSelectPlan(plan)}
                    >
                      {getButtonText(plan.id)}
                    </JumpButton>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM REGULAR PROTECTION BANNER — chamfered card matching brand shape */}
        <div className="relative max-w-5xl mx-auto">
          <div
            className="absolute inset-0 bg-white/[0.06]"
            style={{
              clipPath: "polygon(18px 0%, 100% 0%, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0% 100%, 0% 18px)"
            }}
          />
          <div
            className="relative m-px bg-deep-black grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 text-left"
            style={{
              clipPath: "polygon(18px 0%, 100% 0%, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0% 100%, 0% 18px)"
            }}
          >
            <div className="lg:col-span-8 space-y-2">
              <span className="flex items-center gap-2 text-[10px] font-mono font-black text-energy-green tracking-widest uppercase">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                {t.limitedSpots}
              </span>
              <h4 className="font-display font-black text-white text-lg sm:text-xl uppercase italic leading-none tracking-wide">
                {t.guaranteeTitle}
              </h4>
              <p className="text-xs sm:text-sm text-cool-gray font-sans font-medium leading-relaxed">
                {t.guaranteeDesc}
              </p>
            </div>
            
            <div className="lg:col-span-4 flex justify-start lg:justify-end text-xs font-mono font-semibold text-cool-gray space-x-4">
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 bg-energy-green rounded-full animate-pulse" />
                <span>{t.secureLabel}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 bg-energy-green rounded-full animate-pulse" />
                <span>{t.flexibleLabel}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
