import React, { useState } from 'react';
import { X, CheckCircle, Ticket, Zap, MapPin, Calendar, Clock, Lock } from 'lucide-react';
import { Language, StudioClass, PricingItem } from '../types';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';
import { IconButton, JumpButton } from './Buttons';

interface CheckoutModalProps {
  currentLang: Language;
  selectedClass: StudioClass | null;
  selectedTime: string | null;
  selectedPlan: PricingItem | null;
  onClose: () => void;
}

// Fixed 16 trampoline spots layout facing the stage
const TRAMPOLINE_SPOTS = Array.from({ length: 16 }, (_, idx) => {
  // Mock occupied spots based on ID
  const isOccupied = [2, 5, 8, 11, 14].includes(idx + 1);
  const row = idx < 4 ? 'A' : idx < 8 ? 'B' : idx < 12 ? 'C' : 'D';
  const number = (idx % 4) + 1;
  return {
    id: idx + 1,
    coordinate: `${row}${number}`,
    occupied: isOccupied
  };
});

export default function CheckoutModal({
  currentLang,
  selectedClass,
  selectedTime,
  selectedPlan,
  onClose
}: CheckoutModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2>(1); // 1: form & seat selector, 2: success receipt
  const [ticketId, setTicketId] = useState('');

  const t = translations[currentLang];
  const chrome = {
    en: {
      subheader: 'Newark Boutique Studio Checkout',
      orderSummary: 'ORDER SUMMARY',
      session: 'SESSION',
      mapHint: 'All rebounders face the instructor mirrors.',
      selectedSpot: 'SELECTED SPOT',
      stage: 'INSTRUCTOR STAGE',
      ssl: 'SSL ENCRYPTED',
      athlete: 'REBEL ATHLETE',
      ticket: 'TICKET ACCESS PASS',
      reboundClass: 'REBOUND CLASS',
      coordinates: 'COORDINATES',
      row: 'ROW',
      timeSlot: 'TIME SLOT',
      purchasePlan: 'PURCHASE PLAN',
      close: 'Close',
    },
    es: {
      subheader: 'Checkout — Jump Zone Newark',
      orderSummary: 'RESUMEN',
      session: 'SESIÓN',
      mapHint: 'Todos los trampolines miran hacia el escenario.',
      selectedSpot: 'SPOT ELEGIDO',
      stage: 'ESCENARIO',
      ssl: 'SSL SEGURO',
      athlete: 'ATLETA JUMP ZONE',
      ticket: 'PASE DE ACCESO',
      reboundClass: 'CLASE REBOUND',
      coordinates: 'UBICACIÓN',
      row: 'FILA',
      timeSlot: 'HORARIO',
      purchasePlan: 'PLAN ELEGIDO',
      close: 'Cerrar',
    },
    pt: {
      subheader: 'Checkout — Jump Zone Newark',
      orderSummary: 'RESUMO',
      session: 'SESSÃO',
      mapHint: 'Todos os trampolins ficam de frente para o palco.',
      selectedSpot: 'SPOT ESCOLHIDO',
      stage: 'PALCO DO INSTRUTOR',
      ssl: 'SSL SEGURO',
      athlete: 'ATLETA JUMP ZONE',
      ticket: 'PASSE DE ACESSO',
      reboundClass: 'AULA REBOUND',
      coordinates: 'LOCALIZAÇÃO',
      row: 'FILA',
      timeSlot: 'HORÁRIO',
      purchasePlan: 'PLANO ESCOLHIDO',
      close: 'Fechar',
    },
  }[currentLang];

  const handleSeatSelect = (coordinate: string, occupied: boolean) => {
    if (occupied) return;
    setSelectedSeat(coordinate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    if ((selectedClass && !selectedSeat)) return; // mandate seat selection for class booking

    // Generate unique mock ticket ID
    const generatedId = `JZ-${Math.floor(Math.random() * 900000) + 100000}`;
    setTicketId(generatedId);
    setStep(2);
  };

  return (
    <motion.div
      id="checkout-modal-root"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-black/80 backdrop-blur-md overflow-y-auto"
    >
      {/* Container Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        className="bg-dark-charcoal border border-white/[0.08] w-full max-w-2xl rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] my-8"
      >
        
        {/* Header Block */}
        <div className="bg-black/50 p-5 border-b border-white/[0.04] flex justify-between items-center relative">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-energy-green text-deep-black rounded-lg">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-display font-medium text-white uppercase text-lg sm:text-xl tracking-wide leading-none">
                JUMP ZONE SECURE PASS
              </h3>
              <p className="text-[9px] font-mono tracking-widest text-steel-gray uppercase mt-0.5">
                {chrome.subheader}
              </p>
            </div>
          </div>
          <IconButton
            icon={<X className="w-4 h-4" />}
            variant="dark"
            onClick={onClose}
            aria-label={chrome.close}
          />
        </div>

        {/* Modal Workspace content */}
        <div className="p-5 sm:p-7">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.form 
                key="step1"
                initial={{ opacity: 0, scale: 0.97, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Visual order summary summary banner depending on what's active */}
                <div className="bg-black/30 p-4 rounded-xl border border-white/[0.03] space-y-2">
                  <span className="text-[9px] font-mono text-[#555] uppercase tracking-widest block">{chrome.orderSummary}</span>
                  {selectedClass ? (
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div>
                        <h4 className="text-lg font-display font-medium text-white uppercase tracking-wide leading-none">
                          {selectedClass.name[currentLang]}
                        </h4>
                        <p className="text-[10px] text-energy-green font-mono uppercase mt-1 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{selectedTime} • {selectedClass.duration}m {chrome.session}</span>
                        </p>
                      </div>
                      <span className="text-base font-mono font-bold text-white">$19.00</span>
                    </div>
                  ) : selectedPlan ? (
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-lg font-display font-medium text-white uppercase tracking-wide leading-none">
                          {selectedPlan.name[currentLang]}
                        </h4>
                        <p className="text-[10px] text-energy-green font-mono uppercase mt-1">
                          {selectedPlan.subtitle[currentLang]}
                        </p>
                      </div>
                      <span className="text-base font-mono font-bold text-white">${selectedPlan.price}.00</span>
                    </div>
                  ) : null}
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-wider text-steel-gray uppercase block">{t.checkoutName}</label>
                    <input 
                      type="text" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Emma Stone"
                      className="w-full bg-black/20 border border-white/[0.06] focus:border-energy-green rounded-xl p-2.5 text-xs text-white focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-wider text-steel-gray uppercase block">{t.checkoutEmail}</label>
                    <input 
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="emma@example.com"
                      className="w-full bg-black/20 border border-white/[0.06] focus:border-energy-green rounded-xl p-2.5 text-xs text-white focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-wider text-steel-gray uppercase block">{t.checkoutPhone}</label>
                    <input 
                      type="tel" 
                      required 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 0192"
                      className="w-full bg-black/20 border border-white/[0.06] focus:border-energy-green rounded-xl p-2.5 text-xs text-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Trampoline seat selector map (Only for class slot reservation) */}
                {selectedClass && (
                  <div className="space-y-3 pt-2 border-t border-white/[0.03]">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-mono tracking-wider text-steel-gray uppercase">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          {t.checkoutSelectTrampoline}
                        </label>
                        <span className="text-[9px] text-cool-gray font-sans">
                          {chrome.mapHint}
                        </span>
                      </div>
                      
                      {selectedSeat && (
                        <div className="bg-energy-green/15 text-energy-green font-mono text-[10px] font-bold px-2.5 py-0.5 rounded border border-energy-green/10 uppercase">
                          {chrome.selectedSpot}: {selectedSeat}
                        </div>
                      )}
                    </div>

                    {/* Stage diagram */}
                    <div className="bg-black/30 p-4 rounded-xl border border-white/[0.02]">
                      <div className="w-full max-w-sm mx-auto text-center border-b border-energy-green/10 pb-1.5 mb-4">
                        <span className="flex items-center justify-center gap-1.5 text-[9px] font-mono font-bold tracking-[0.15em] text-cool-gray uppercase">
                          <Zap className="w-3 h-3 shrink-0" />
                          {chrome.stage}
                        </span>
                      </div>

                      {/* Seat selection states keys */}
                      <div className="flex justify-center items-center space-x-4 mb-4 text-[9px] font-mono text-[#555] uppercase">
                        <div className="flex items-center space-x-1">
                          <span className="w-2.5 h-2.5 rounded-md border border-white/10 bg-black/20 block" />
                          <span>{t.checkoutTrampolineAvailable}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="w-2.5 h-2.5 rounded-md bg-energy-green block" />
                          <span>{t.checkoutTrampolineSelected}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="w-2.5 h-2.5 rounded-md bg-white/5 block" />
                          <span>{t.checkoutTrampolineOccupied}</span>
                        </div>
                      </div>

                      {/* Seating Grid */}
                      <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
                        {TRAMPOLINE_SPOTS.map((seat) => {
                          const isSelected = selectedSeat === seat.coordinate;
                          
                          let bgClasses = 'bg-black/20 border-white/[0.06] text-white hover:border-white/20';
                          if (seat.occupied) {
                            bgClasses = 'bg-white/5 border-transparent text-[#444] cursor-not-allowed';
                          } else if (isSelected) {
                            bgClasses = 'bg-energy-green border-transparent text-[#111] font-bold';
                          }

                          return (
                            <button
                              key={seat.id}
                              type="button"
                              disabled={seat.occupied}
                              onClick={() => handleSeatSelect(seat.coordinate, seat.occupied)}
                              className={`aspect-square h-10 sm:h-11 flex flex-col items-center justify-center rounded-lg border text-xs font-mono transition-all cursor-pointer ${bgClasses}`}
                            >
                              <span>{seat.coordinate}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Confirm triggers */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/[0.04]">
                  <div className="hidden sm:flex items-center space-x-1.5 text-[10px] font-mono text-[#555]">
                    <Lock className="w-3.5 h-3.5 text-energy-green" />
                    <span>{chrome.ssl}</span>
                  </div>

                   <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                    <JumpButton
                      type="button"
                      onClick={onClose}
                      variant="secondary"
                      showIcon={false}
                      className="w-full sm:w-auto"
                    >
                      {t.checkoutCancel}
                    </JumpButton>
                    <JumpButton
                      type="submit"
                      disabled={selectedClass && !selectedSeat}
                      variant="primary"
                      iconType="chevron"
                      className="w-full sm:w-auto"
                    >
                      {t.checkoutConfirmBtn}
                    </JumpButton>
                  </div>
                </div>

              </motion.form>
            ) : (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                className="text-center py-4 space-y-6 relative z-10"
              >
                
                {/* Central checkcircle indicator */}
                <div className="w-14 h-14 rounded-full bg-energy-green/10 border border-energy-green flex items-center justify-center mx-auto text-energy-green">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-display font-medium text-white uppercase tracking-wide leading-none">
                    {t.checkoutSuccessTitle}
                  </h3>
                  <p className="text-xs text-steel-gray max-w-sm mx-auto leading-relaxed mt-1">
                    {t.checkoutSuccessText}
                  </p>
                </div>

                {/* Printout ticket receipt card */}
                <div className="max-w-md mx-auto bg-black p-5 rounded-xl border border-white/[0.04] relative text-left select-none shadow-inner overflow-hidden">
                  
                  {/* Details matrix row list */}
                  <div className="grid grid-cols-2 gap-y-3 gap-x-2 pt-2 text-xs font-mono">
                    <div>
                      <span className="text-[#555] block uppercase text-[9px]">{chrome.athlete}</span>
                      <span className="text-white font-bold uppercase">{name}</span>
                    </div>
                    <div>
                      <span className="text-[#555] block uppercase text-[9px]">{chrome.ticket}</span>
                      <span className="text-energy-green font-bold uppercase">{ticketId}</span>
                    </div>
                    
                    {selectedClass ? (
                      <>
                        <div>
                          <span className="text-[#555] block uppercase text-[9px]">{chrome.reboundClass}</span>
                          <span className="text-white font-bold uppercase truncate block max-w-[170px]">
                            {selectedClass.name[currentLang]}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#555] block uppercase text-[9px]">{chrome.coordinates}</span>
                          <span className="text-energy-green font-bold block uppercase">
                            {chrome.row} {selectedSeat?.substring(0, 1)} • {selectedSeat}
                          </span>
                        </div>
                        <div className="col-span-2 flex items-center gap-1.5 pt-2 border-t border-white/5">
                          <Calendar className="w-3.5 h-3.5 text-white/40" />
                          <span className="text-[#666] text-[9px] uppercase tracking-wider">{chrome.timeSlot}: <strong className="text-white font-bold">{selectedTime}</strong></span>
                        </div>
                      </>
                    ) : selectedPlan ? (
                      <div className="col-span-2">
                        <span className="text-[#555] block uppercase text-[9px]">{chrome.purchasePlan}</span>
                        <span className="text-energy-green font-black text-xs uppercase">
                          {selectedPlan.name[currentLang]} ({selectedPlan.quantityDesc})
                        </span>
                      </div>
                    ) : null}

                  </div>
                </div>

                {/* Bottom checkout close buttons */}
                <div className="flex justify-center">
                  <JumpButton
                    onClick={onClose}
                    variant="primary"
                    showIcon={true}
                    iconType="chevron"
                    className="min-w-[200px]"
                  >
                    {t.checkoutClose}
                  </JumpButton>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </motion.div>
    </motion.div>
  );
}
