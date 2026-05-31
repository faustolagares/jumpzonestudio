export type Language = 'en' | 'es' | 'pt';

export interface TranslationSet {
  navLogo: string;
  navClasses: string;
  navSchedule: string;
  navPricing: string;
  navBeatSimulator: string;
  navAbout: string;
  navContact: string;
  navBookNow: string;
  
  heroBadge: string;
  heroTitleFocus: string;
  heroTitleNormal: string;
  heroSubtitle: string;
  heroCtaBook: string;
  heroCtaLearn: string;
  
  statsBpm: string;
  statsBpmSub: string;
  statsImpact: string;
  statsImpactSub: string;
  statsLocation: string;
  statsLocationSub: string;
  
  classesTitle: string;
  classesSubtitle: string;
  filterAll: string;
  filterCardio: string;
  filterStrength: string;
  filterCombo: string;
  durationLabel: string;
  noClassesFound: string;
  spotsLeft: string;
  spotBooked: string;
  bookClassBtn: string;
  
  intensityLevel: string;
  levelBeginner: string;
  levelIntermediate: string;
  levelAdvanced: string;
  
  simulatorTitle: string;
  simulatorSubtitle: string;
  selectGenre: string;
  targetBpm: string;
  workoutGoal: string;
  goalFatBurn: string;
  goalCardio: string;
  goalStressRelief: string;
  goalEndurance: string;
  calcResult: string;
  estCalories: string;
  suggestedChoreography: string;
  tempoName: string;
  generateBtn: string;
  
  pricingTitle: string;
  pricingSubtitle: string;
  pricingDropIn: string;
  pricingPack: string;
  pricingMonthly: string;
  tabSingleClass: string;
  tabClassPacks: string;
  tabMemberships: string;
  perMonth: string;
  perClass: string;
  buyNow: string;
  popularBadge: string;
  limitedSpots: string;
  
  studioTitle: string;
  studioSubtitle: string;
  facilityInside: string;
  facilitySound: string;
  facilityStage: string;
  facilityMerch: string;
  
  faqTitle: string;
  faqSubtitle: string;
  
  checkoutTitle: string;
  checkoutSubtitle: string;
  checkoutName: string;
  checkoutEmail: string;
  checkoutPhone: string;
  checkoutSelectTrampoline: string;
  checkoutTrampolineOccupied: string;
  checkoutTrampolineSelected: string;
  checkoutTrampolineAvailable: string;
  checkoutConfirmBtn: string;
  checkoutCancel: string;
  checkoutSuccessTitle: string;
  checkoutSuccessText: string;
  checkoutSuccessTicket: string;
  checkoutClose: string;
}

export interface StudioClass {
  id: string;
  name: { en: string; es: string; pt: string };
  description: { en: string; es: string; pt: string };
  category: 'cardio' | 'strength' | 'combo';
  duration: number; // in minutes
  level: 'beginner' | 'intermediate' | 'advanced';
  intensity: number; // 1 to 5 stars or score
  bpmRange: string;
  instructor: string;
  timeSlots: string[];
}

export interface PricingItem {
  id: string;
  name: { en: string; es: string; pt: string };
  price: number;
  subtitle: { en: string; es: string; pt: string };
  features: { en: string[]; es: string[]; pt: string[] };
  popular?: boolean;
  tag?: string;
  type: 'drop_in' | 'pack' | 'membership';
  quantityDesc?: string;
}

export interface ChoreographyMove {
  id: string;
  name: { en: string; es: string; pt: string };
  difficulty: { en: string; es: string; pt: string };
  repCount: string;
  gifPlaceholderEmoji: string;
  benefit: { en: string; es: string; pt: string };
}
