import { useState, useEffect } from 'react';
import { Activity, Flame, Timer, Music, Play, Sparkles, ListChecks } from 'lucide-react';
import { Language, ChoreographyMove } from '../types';
import { sampleChoreographies, translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';
import { JumpButton } from './JumpButton';

interface WorkoutSimulatorProps {
  currentLang: Language;
}

const GENRES = [
  { id: 'techno', name: 'Techno Core Beats', bpmDefault: 145 },
  { id: 'house', name: 'Deep Tech & Progressive House', bpmDefault: 128 },
  { id: 'dnb', name: 'Drum & Bass Extreme', bpmDefault: 160 },
  { id: 'reggaeton', name: 'Reggaeton Fusion Groove', bpmDefault: 130 },
  { id: 'synthwave', name: 'Outrun Synthwave Retrojump', bpmDefault: 120 }
];

export default function WorkoutSimulator({ currentLang }: WorkoutSimulatorProps) {
  const [selectedGenre, setSelectedGenre] = useState(GENRES[0].id);
  const [bpm, setBpm] = useState(145);
  const [goal, setGoal] = useState<'fat_burn' | 'cardio' | 'stress' | 'stamina'>('fat_burn');
  const [isSimulating, setIsSimulating] = useState(false);
  const [strobeActive, setStrobeActive] = useState(false);
  const [report, setReport] = useState<{
    calories: number;
    recommendedMoves: ChoreographyMove[];
    aerobicIndex: string;
    strainingLevel: string;
  } | null>(null);

  const t = translations[currentLang];

  // Sync strobe pulse with the calculated BPM frequency
  useEffect(() => {
    // 60 seconds / BPM = delay of 1 beat (ms)
    const beatDelay = (60 / bpm) * 1000;
    
    const interval = setInterval(() => {
      setStrobeActive(true);
      const timeout = setTimeout(() => {
        setStrobeActive(false);
      }, 100); // quick flash duration

      return () => clearTimeout(timeout);
    }, beatDelay);

    return () => clearInterval(interval);
  }, [bpm]);

  // Adjust default BPM when genre changes
  const handleGenreChange = (genreId: string) => {
    setSelectedGenre(genreId);
    const genreObj = GENRES.find(g => g.id === genreId);
    if (genreObj) {
      setBpm(genreObj.bpmDefault);
    }
  };

  // Perform calculation algorithm on click
  const handleCalculate = () => {
    setIsSimulating(true);
    
    setTimeout(() => {
      // Calorie burn base metric
      let multiplier = 5.2;
      if (goal === 'fat_burn') multiplier = 6.4;
      if (goal === 'cardio') multiplier = 5.9;
      if (goal === 'stamina') multiplier = 6.8;

      // add extra multiplier for faster BPM
      const speedFactor = bpm / 110;
      const calculatedCalories = Math.round(45 * multiplier * speedFactor); // 45 minute estimate

      // filter or sort routines depending on BPM speed
      // High BPM (>140) gets Advanced/Intermediate moves, lower gets Beginner friendly
      let selectionMoves: ChoreographyMove[] = [];
      if (bpm < 130) {
        // focus beginner
        selectionMoves = [sampleChoreographies[1], sampleChoreographies[0]];
      } else if (bpm <= 145) {
        selectionMoves = [sampleChoreographies[0], sampleChoreographies[1], sampleChoreographies[2]];
      } else {
        // High Speed rave
        selectionMoves = [sampleChoreographies[2], sampleChoreographies[3], sampleChoreographies[0]];
      }

      // Aerobic indexes
      let index = "GRL-1 (FAT LIPOLYSIS ZONE)";
      if (bpm > 140) index = "GRL-3 (MAX STROKE VO2 MAX)";
      else if (bpm > 130) index = "GRL-2 (AEROBIC THRESHOLD ENGINE)";

      let straining = "Gentle Joint Flex (Gravity absorption 82%)";
      if (bpm > 150) straining = "High Adrenaline Pumping (Gravity absorption 80%)";

      setReport({
        calories: calculatedCalories,
        recommendedMoves: selectionMoves,
        aerobicIndex: index,
        strainingLevel: straining
      });
      setIsSimulating(false);
    }, 700);
  };

  return (
    <section id="simulator" className="py-24 bg-deep-black relative">
      {/* Visual neon circles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 left-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-energy-green/[0.04] blur-[130px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white uppercase">
            {t.simulatorTitle}
          </h2>
          <div className="w-12 h-[2px] mx-auto bg-energy-green rounded-full" />
          <p className="text-cool-gray max-w-xl mx-auto text-sm sm:text-base font-normal">
            {t.simulatorSubtitle}
          </p>
        </div>

        {/* Dynamic simulator workspace split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column Left: Input modifiers */}
          <div className="lg:col-span-6 bg-dark-charcoal/40 border border-white/[0.04] p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6">
            
            {/* 1. Genre selection option */}
            <div className="space-y-3">
              <label className="text-[10px] font-mono tracking-wider text-cool-gray/60 uppercase block">
                {t.selectGenre}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {GENRES.map(g => (
                  <button
                    key={g.id}
                    onClick={() => handleGenreChange(g.id)}
                    style={{ clipPath: "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)" }}
                    className={`p-3 text-left transition-[background-color,color] duration-150 border-0 flex flex-col justify-center cursor-pointer ${
                      selectedGenre === g.id
                        ? 'bg-energy-green text-deep-black font-bold'
                        : 'bg-black/25 hover:bg-black/45 text-cool-gray hover:text-white'
                    }`}
                  >
                    <span className="font-sans font-black uppercase text-[11px] tracking-wide">{g.name}</span>
                    <span className={`text-[9px] font-mono mt-1 ${selectedGenre === g.id ? 'text-black/75' : 'text-cool-gray/60'}`}>{g.bpmDefault} BPM</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. BPM Fine Slider */}
            <div className="space-y-3 bg-black/25 p-4 rounded-xl border border-white/[0.02]">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono tracking-wider text-cool-gray/60 uppercase">
                  {t.targetBpm}
                </span>
                <span className="text-base font-mono text-energy-green font-bold">
                  {bpm} BPM
                </span>
              </div>
              
              <input 
                type="range" 
                min="120" 
                max="165" 
                value={bpm}
                onChange={(e) => setBpm(Number(e.target.value))}
                className="w-full h-1 bg-black rounded cursor-pointer accent-energy-green"
              />
              
              <div className="flex justify-between items-center text-[9px] font-mono text-white/30 uppercase tracking-wider">
                <span>120 BPM</span>
                <span>165 BPM</span>
              </div>
            </div>

            {/* 3. Workout primary athletic goal */}
            <div className="space-y-3">
              <label className="text-[10px] font-mono tracking-wider text-cool-gray/60 uppercase block">
                {t.workoutGoal}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'fat_burn' as const, label: t.goalFatBurn },
                  { id: 'cardio' as const, label: t.goalCardio },
                  { id: 'stress' as const, label: t.goalStressRelief },
                  { id: 'stamina' as const, label: t.goalEndurance }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setGoal(item.id)}
                    style={{ clipPath: "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)" }}
                    className={`p-2.5 text-center font-sans font-black italic uppercase text-[10px] tracking-wider transition-[background-color,color] duration-150 cursor-pointer border-0 ${
                      goal === item.id
                        ? 'bg-energy-green text-deep-black font-black'
                        : 'bg-black/25 hover:bg-black/35 text-cool-gray hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculate Button */}
            <JumpButton
              onClick={handleCalculate}
              disabled={isSimulating}
              variant="primary"
              fullWidth={true}
              iconType="chevron"
            >
              {isSimulating ? "COMPILING PROFILE..." : t.generateBtn}
            </JumpButton>

          </div>

          {/* Column Right: Live simulated metabolic metrics report */}
          <div className="lg:col-span-6 bg-dark-charcoal/20 border border-white/[0.04] p-6 sm:p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {report ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                  className="space-y-5 relative z-10 h-full flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Header bar */}
                    <div className="flex justify-between items-center border-b border-white/[0.04] pb-3">
                      <div>
                        <h4 className="text-[10px] font-mono font-bold text-cool-gray/60 tracking-wider uppercase">
                          {t.calcResult}
                        </h4>
                      </div>
                      <Flame className="w-5 h-5 text-energy-green" />
                    </div>

                    {/* Calories counter banner */}
                    <div className="bg-black/30 p-4 rounded-xl border border-white/[0.02] text-center space-y-1">
                      <span className="text-[9px] font-mono text-cool-gray/60 uppercase tracking-widest block">{t.estCalories}</span>
                      <h3 className="text-5xl font-display font-medium text-white uppercase tracking-wider">
                        ~{report.calories} <span className="text-sm text-energy-green font-mono uppercase">kcal</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-cool-gray font-sans font-normal leading-relaxed mt-1">
                        Melt impact by rebounding. Over 80% of gravitational shocks are absorbed to protect spine joints.
                      </p>
                    </div>

                    {/* Meta Stats list */}
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono uppercase tracking-wider text-cool-gray">
                      <div className="bg-black/20 p-3 rounded-lg border border-white/[0.02]">
                        <span className="text-cool-gray/50 block">AEROBIC THRESHOLD</span>
                        <span className="text-white font-bold block mt-1">{report.aerobicIndex.split(' ')[0]}</span>
                      </div>
                      <div className="bg-black/20 p-3 rounded-lg border border-white/[0.02]">
                        <span className="text-cool-gray/50 block">JOINT ENGAGEMENT</span>
                        <span className="text-energy-green font-bold block mt-1">OPTIMAL ABSORPTION</span>
                      </div>
                    </div>

                    {/* Generated core actions Move routine list */}
                    <div className="space-y-2">
                      <span className="flex items-center gap-1.5 text-[10px] font-mono text-cool-gray/60 uppercase tracking-wider">
                        <ListChecks className="w-3.5 h-3.5 shrink-0" />
                        {t.suggestedChoreography}
                      </span>
                      <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                        {report.recommendedMoves.map((mov) => (
                          <div 
                            key={mov.id} 
                            className="flex items-center justify-between p-2.5 bg-black/25 rounded-lg border border-white/[0.02] text-xs font-sans"
                          >
                            <div className="flex items-center space-x-2">
                              <Activity className="w-4 h-4 text-energy-green shrink-0" />
                              <div>
                                <h5 className="font-bold text-white uppercase text-[11px]">{mov.name[currentLang]}</h5>
                                <span className="text-[9px] font-mono text-cool-gray/50 uppercase">Level: {mov.difficulty[currentLang]}</span>
                              </div>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-energy-green">{mov.repCount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-[9px] text-cool-gray/40 text-center uppercase tracking-widest pt-3 border-t border-white/[0.02] font-mono">
                    *Derived by MET standards for trampoline rebound tasking.
                  </p>
                </motion.div>
              ) : (
                <div key="placeholder" className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-energy-green/5 border border-energy-green/20 flex items-center justify-center mx-auto text-energy-green shadow-[0_0_15px_rgba(168,255,0,0.1)]">
                    <Activity className="w-8 h-8 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-medium text-xl text-white uppercase tracking-wider">AWAITING SIMULATION PROFILE</h4>
                    <p className="text-xs text-cool-gray max-w-sm mx-auto leading-relaxed">
                      Select your tracks genre, adjust the speed metric, and tap &quot;{t.generateBtn}&quot; to view live choreographed workout intensity and calories burnt statistics.
                    </p>
                  </div>
                </div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
