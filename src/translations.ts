import { Language, TranslationSet, StudioClass, PricingItem, ChoreographyMove } from './types';

export const translations: Record<Language, TranslationSet> = {
  en: {
    navLogo: "JUMP ZONE",
    navClasses: "Classes",
    navSchedule: "Schedule",
    navPricing: "Pricing",
    navBeatSimulator: "BPM Simulator",
    navAbout: "The Studio",
    navContact: "Contact",
    navBookNow: "BOOK NOW",
    
    heroBadge: "JUMP ZONE STUDIO",
    heroTitleFocus: "WE DON'T JUST JUMP",
    heroTitleNormal: "WE LEVEL UP.",
    heroSubtitle: "New fitness experience in Newark, NJ.",
    heroCtaBook: "BOOK YOUR JUMP",
    heroCtaLearn: "VIEW CLASSES",
    
    statsBpm: "135-155 BPM",
    statsBpmSub: "Choreographed EDM, House & Pop Beats",
    statsImpact: "80% Less Joint Impact",
    statsImpactSub: "High intensity, gentle rebound action",
    statsLocation: "Newark, NJ",
    statsLocationSub: "Boutique concert-style fitness temple",
    
    classesTitle: "CHOOSE YOUR VIBE",
    classesSubtitle: "Each individual trampoline is your dancefloor. Find the workout that pushes your limits and fires up your energy levels.",
    filterAll: "All Sessions",
    filterCardio: "Cardio Focus",
    filterStrength: "Strength & Core",
    filterCombo: "Full Combo",
    durationLabel: "Filter by duration",
    noClassesFound: "No classes match your specific criteria. Try resetting filters!",
    spotsLeft: "spots left!",
    spotBooked: "Spot Booked",
    bookClassBtn: "Book My Trampoline",
    
    intensityLevel: "Intensity",
    levelBeginner: "Beginner Friendly",
    levelIntermediate: "Intermediate Power",
    levelAdvanced: "Advanced Athlete",
    
    simulatorTitle: "BEAT & SPEED SIMULATOR",
    simulatorSubtitle: "Simulate a class segment by syncing a electronic music genre to a target tempo and see your customized choreography move-list and metabolic result.",
    selectGenre: "Select Beats Genre",
    targetBpm: "Target Tempo (BPM)",
    workoutGoal: "Main Workout Goal",
    goalFatBurn: "Calorie Shredder",
    goalCardio: "Aerobic Engine",
    goalStressRelief: "Endorphin High",
    goalEndurance: "Stamina Builder",
    calcResult: "SIMULATION REPORT",
    estCalories: "Est. Calories Burned",
    suggestedChoreography: "Live-Set Choreography Flow",
    tempoName: "Tempo Feel",
    generateBtn: "CALCULATE WORKOUT IMPACT",
    
    pricingTitle: "THE PRICING ZONE",
    pricingSubtitle: "Pick your entry ticket. No long-term contracts, total flexibility, high reward.",
    pricingDropIn: "Drop-ins",
    pricingPack: "Class Packs",
    pricingMonthly: "Monthly Memberships",
    tabSingleClass: "Single Passes",
    tabClassPacks: "Multi-Session Packs",
    tabMemberships: "Monthly Unlimiteds",
    perMonth: "/month",
    perClass: "/session",
    buyNow: "JOIN THE ZONE NOW",
    popularBadge: "MOST POPULAR",
    limitedSpots: "LIMITED FOUNDING DISCOUNTS AVAILABLE",
    
    studioTitle: "THE CONCERT FACILITY",
    studioSubtitle: "No fluorescent lights. No boring treadmills. We created a dark, immersive athletic club equipped with premium sound systems and reactive neon lighting.",
    facilityInside: "Dark Premium Interiors",
    facilitySound: "High-Fidelity Audio Setup",
    facilityStage: "Elevated Instructor Concert Stage",
    facilityMerch: "Limiter Apparel Corner",
    
    faqTitle: "FREQUENTLY ASKED QUESTIONS",
    faqSubtitle: "We are beginner-friendly, joint-friendly, and here to clear all doubts.",
    
    checkoutTitle: "SECURE YOUR BI-LEVEL ZONE TRAMPOLINE",
    checkoutSubtitle: "Choose your professional rebound spot. The layout faces the main stage mirrors.",
    checkoutName: "Your Full Name",
    checkoutEmail: "Email Address",
    checkoutPhone: "Phone Number",
    checkoutSelectTrampoline: "Select your rebound trampoline placement on the map:",
    checkoutTrampolineOccupied: "Booked",
    checkoutTrampolineSelected: "Your Spot",
    checkoutTrampolineAvailable: "Ready",
    checkoutConfirmBtn: "CONFIRM RESERVATION & ACCESS PASS",
    checkoutCancel: "Cancel",
    checkoutSuccessTitle: "YOU ARE LOCKED IN!",
    checkoutSuccessText: "Your registration has been successfully validated. A secure digital ticket has been issued to your email and phone.",
    checkoutSuccessTicket: "TRAMPOLINE TICKET #",
    checkoutClose: "Close Ticket"
  },
  es: {
    navLogo: "JUMP ZONE",
    navClasses: "Clases",
    navSchedule: "Horarios",
    navPricing: "Precios",
    navBeatSimulator: "Simulador BPM",
    navAbout: "El Estudio",
    navContact: "Contacto",
    navBookNow: "RESERVA YA",
    
    heroBadge: "JUMP ZONE STUDIO",
    heroTitleFocus: "NO SOLO SALTAMOS",
    heroTitleNormal: "SUBIMOS DE NIVEL.",
    heroSubtitle: "Nueva experiencia fitness en Newark, NJ.",
    heroCtaBook: "RESERVA TU SALTO",
    heroCtaLearn: "VER CLASES",
    
    statsBpm: "135-155 BPM",
    statsBpmSub: "Ritmos de EDM, House y Pop Coreografiados",
    statsImpact: "80% Menos Impacto",
    statsImpactSub: "Alta intensidad, acción de rebote suave",
    statsLocation: "Newark, NJ",
    statsLocationSub: "Templo fitness boutique estilo concierto",
    
    classesTitle: "ELIGE TU RITMO",
    classesSubtitle: "Cada trampolín individual es tu pista de baile. Encuentra la sesión que desafía tus límites y despierta tu máxima energía.",
    filterAll: "Todas las Sesiones",
    filterCardio: "Enfoque Cardio",
    filterStrength: "Fuerza y Core",
    filterCombo: "Combo Total",
    durationLabel: "Filtrar por duración",
    noClassesFound: "Ninguna clase coincide con tus filtros. ¡Intenta restablecerlos!",
    spotsLeft: "¡lugares libres!",
    spotBooked: "Lugar Reservado",
    bookClassBtn: "Reservar mi Trampolín",
    
    intensityLevel: "Intensidad",
    levelBeginner: "Apto para Principiantes",
    levelIntermediate: "Fuerza Intermedia",
    levelAdvanced: "Atleta Avanzado",
    
    simulatorTitle: "SIMULADOR DE RITMO Y VELOCIDAD",
    simulatorSubtitle: "Simula un segmento de clase sincronizando tu género de música electrónica con un tempo BPM objetivo para ver tu coreografía personalizada y resultado metabólico.",
    selectGenre: "Selecciona el Género",
    targetBpm: "Ritmo Objetivo (BPM)",
    workoutGoal: "Meta de la Sesión",
    goalFatBurn: "Quema de Calorías",
    goalCardio: "Motor Aeróbico",
    goalStressRelief: "Subidón de Endorfinas",
    goalEndurance: "Resistencia Extrema",
    calcResult: "REPORTE DE SIMULACIÓN",
    estCalories: "Calorías Est. Quemadas",
    suggestedChoreography: "Flujo de Coreografía Planificada",
    tempoName: "Sensación de Ritmo",
    generateBtn: "CALCULAR IMPACTO METABÓLICO",
    
    pricingTitle: "ZONA DE TARIFAS",
    pricingSubtitle: "Elige tu pase de entrada. Sin contratos a largo plazo, flexibilidad absoluta y máxima recompensa.",
    pricingDropIn: "Clase Suelta",
    pricingPack: "Packs de Clases",
    pricingMonthly: "Membresías Mensuales",
    tabSingleClass: "Pases Únicos",
    tabClassPacks: "Packs Multisesión",
    tabMemberships: "Ilimitados Mensuales",
    perMonth: "/mes",
    perClass: "/sesión",
    buyNow: "ÚNETE A LA ZONA AHORA",
    popularBadge: "MÁS POPULAR",
    limitedSpots: "DESCUENTOS FUNDADORES LIMITADOS DISPONIBLES",
    
    studioTitle: "LA INSTALACIÓN DE CONCIERTO",
    studioSubtitle: "Sin luces blancas aburridas. Sin caminadoras. Diseñamos un club deportivo oscuro e inmersivo con sonido de alta fidelidad y luces de neón reactivas.",
    facilityInside: "Interiores Oscuros Premium",
    facilitySound: "Configuración de Audio de Alta Fidelidad",
    facilityStage: "Escenario de Instructor Elevado",
    facilityMerch: "Rincón de Ropa Colección Limitada",
    
    faqTitle: "PREGUNTAS FRECUENTES",
    faqSubtitle: "Apto para todos los niveles, suave con articulaciones, estamos aquí para aclarar tus dudas.",
    
    checkoutTitle: "ASEGURA TU UBICACIÓN DE TRAMPOLÍN",
    checkoutSubtitle: "Elige tu posición de rebote. La organización de la sala mira directamente al escenario principal.",
    checkoutName: "Tu Nombre Completo",
    checkoutEmail: "Correo Electrónico",
    checkoutPhone: "Número de Teléfono",
    checkoutSelectTrampoline: "Selecciona la posición de tu trampolín en el mapa:",
    checkoutTrampolineOccupied: "Ocupado",
    checkoutTrampolineSelected: "Tu Sitio",
    checkoutTrampolineAvailable: "Libre",
    checkoutConfirmBtn: "CONFIRMAR RESERVACIÓN Y PASEO RAPIDO",
    checkoutCancel: "Cancelar",
    checkoutSuccessTitle: "¡ESTÁS DENTRO!",
    checkoutSuccessText: "Tu registro ha sido validado con éxito. Se ha enviado un billete digital seguro a tu correo y móvil.",
    checkoutSuccessTicket: "TICKET TRAMPOLÍN #",
    checkoutClose: "Cerrar Ticket"
  },
  pt: {
    navLogo: "JUMP ZONE",
    navClasses: "Aulas",
    navSchedule: "Horários",
    navPricing: "Preços",
    navBeatSimulator: "Simulador BPM",
    navAbout: "O Estúdio",
    navContact: "Contato",
    navBookNow: "RESERVAR JÁ",
    
    heroBadge: "JUMP ZONE STUDIO",
    heroTitleFocus: "NÓS NÃO APENAS PULAMOS",
    heroTitleNormal: "NÓS SUBIMOS DE NÍVEL.",
    heroSubtitle: "Nova experiência fitness em Newark, NJ.",
    heroCtaBook: "GARANTA SEU SALTO",
    heroCtaLearn: "VER AULAS",
    
    statsBpm: "135-155 BPM",
    statsBpmSub: "Coreografia Sincronizada de EDM, House e Pop",
    statsImpact: "80% Menos Impacto",
    statsImpactSub: "Alta intensidade, ação de rebote super suave",
    statsLocation: "Newark, NJ",
    statsLocationSub: "Estúdio boutique conceito live event",
    
    classesTitle: "ESCOLHA SEU RITMO",
    classesSubtitle: "Cada trampolim individual é sua pista de dança. Encontre a sessão que desafia seus limites e eleva seu estado de espírito.",
    filterAll: "Qualquer Sessão",
    filterCardio: "Foco Cardio",
    filterStrength: "Força e Core",
    filterCombo: "Combo Total",
    durationLabel: "Filtrar por duração",
    noClassesFound: "Nenhuma aula encontrada com esses filtros. Tente redefinir!",
    spotsLeft: "vagas restantes!",
    spotBooked: "Vaga Reservada",
    bookClassBtn: "Reservar Meu Trampolim",
    
    intensityLevel: "Intensidade",
    levelBeginner: "Ideal para Iniciantes",
    levelIntermediate: "Força Intermediária",
    levelAdvanced: "Atleta Avançado",
    
    simulatorTitle: "SIMULADOR DE BATIDAS E VELOCIDADE",
    simulatorSubtitle: "Simule uma fração da aula combinando o gênero musical eletrônico preferido com a velocidade (BPM). Veja sua playlist personalizada, os passos de coreografia sugeridos e a queima ideal.",
    selectGenre: "Selecione o Gênero Musical",
    targetBpm: "Tempo Desejado (BPM)",
    workoutGoal: "Objetivo Principal",
    goalFatBurn: "Detona Caloria",
    goalCardio: "Combustão Aeróbica",
    goalStressRelief: "Subida de Endorfina",
    goalEndurance: "Treino de Stamina",
    calcResult: "RELATÓRIO DE SIMULAÇÃO",
    estCalories: "Calorias Est. Queimadas",
    suggestedChoreography: "Estrutura do Flow de Coreografia",
    tempoName: "Sensação do Tempo",
    generateBtn: "CALCULAR AGORA IMPACTO DO TREINO",
    
    pricingTitle: "O PRICING JUMP ZONE",
    pricingSubtitle: "Escolha seu plano. Sem contratos de longo prazo, flexibilidade total, benefícios insanos.",
    pricingDropIn: "Aula Single",
    pricingPack: "Pacotes de Aulas",
    pricingMonthly: "Planos Mensais",
    tabSingleClass: "Passe Unitário",
    tabClassPacks: "Packs Multisesseão",
    tabMemberships: "Planos Ilimitados",
    perMonth: "/mês",
    perClass: "/aula",
    buyNow: "ENTRAR NO CLUBE HOJE",
    popularBadge: "RECOMENDADO",
    limitedSpots: "VAGAS LIMITADAS COM DESCONTO DE FUNDADOR DISPONÍVEIS",
    
    studioTitle: "O FITNESS CLUB CONCEITO",
    studioSubtitle: "Sem luz de escritório. Sem esteiras chatas. Criamos um clube atlético noturno, escuro, inmersivo com sistemas de áudio pesado e LEDs reativos de alto impacto.",
    facilityInside: "Interiores Escuros Premium",
    facilitySound: "Sistema de Som Hi-Fidelity Extra Grave",
    facilityStage: "Palco de Instrutor Elevado",
    facilityMerch: "Espaço com Edições Limitadas de Roupa do Estúdio",
    
    faqTitle: "PERGUNTAS FREQUENTES",
    faqSubtitle: "Ideal para iniciantes, joint-friendly e focado no seu progresso. Esclareça suas dúvidas.",
    
    checkoutTitle: "GARANTIR SEU TRAMPOLIM INDIVIDUAL",
    checkoutSubtitle: "Selecione seu spot de rebote estrategicamente colocado de frente para os espelhos do palco principal.",
    checkoutName: "Nome Completo",
    checkoutEmail: "E-mail de Cadastro",
    checkoutPhone: "Celular/Móvel",
    checkoutSelectTrampoline: "Selecione a numeração de trampolim desejado do seu setor:",
    checkoutTrampolineOccupied: "Reservado",
    checkoutTrampolineSelected: "Seu Lugar",
    checkoutTrampolineAvailable: "Livre",
    checkoutConfirmBtn: "CONFIRMAR RESERVA E GERAR ACESSO",
    checkoutCancel: "Cancelar",
    checkoutSuccessTitle: "SUA RESERVA ESTÁ CONFIRMADA!",
    checkoutSuccessText: "Sua inscrição foi confirmada e processada no sistema. O ingresso digital seguro com QR Code fictício foi enviado para seu contato.",
    checkoutSuccessTicket: "CUPOM TRAMPOLIM #",
    checkoutClose: "Fechar Ingresso"
  }
};

export const sampleClasses: StudioClass[] = [
  {
    id: "class-freestyle",
    name: {
      en: "Freestyle Zone Session",
      es: "Sesión Freestyle Zone",
      pt: "Freestyle Zone Session"
    },
    description: {
      en: "The signature concert experience. Non-stop choreographed rebound combinations matching heavy electronic music loops. Excellent for full body burn and speed coordinate shifts.",
      es: "La experiencia de concierto definitiva. Combinaciones de rebote coreografiadas sin detenerse al ritmo de música electrónica densa. Excelente para quema total y agilidad.",
      pt: "A experiência assinatura estilo show. Combinações sem pausa de rebotes rápidos coreografados ao ritmo de música eletrônica pesada. Fantástico para queima calórica e agilidade."
    },
    category: "cardio",
    duration: 50,
    level: "advanced",
    intensity: 5,
    bpmRange: "140 - 155",
    instructor: "Jessie Vance",
    timeSlots: ["08:00 AM", "12:15 PM", "06:30 PM", "08:00 PM"]
  },
  {
    id: "class-jump-tone",
    name: {
      en: "Jump & Tone Beat",
      es: "Jump & Tone Beat",
      pt: "Jump & Tone Beat"
    },
    description: {
      en: "Fuses interval cardio bounces with heavy specialized resistance bands, lightweight dumbbell workouts on the tramp, and isolated abdominal sets. Hardcore core conditioning.",
      es: "Fusiona saltos de cardio a intervalos con bandas de resistencia especializadas, pesas ligeras sobre el trampolín e intervalos abdominales. Condicionamiento extremo de core.",
      pt: "Combina saltos de cardio intervalado com faixas de resistência, halteres leves sobre o trampolim e focos abdominais. Condicionamento extremo de core nos Beats."
    },
    category: "strength",
    duration: 45,
    level: "intermediate",
    intensity: 4,
    bpmRange: "135 - 142",
    instructor: "Dan Logan",
    timeSlots: ["09:15 AM", "05:15 PM", "07:30 PM"]
  },
  {
    id: "class-intro",
    name: {
      en: "Intro to Rebound Method",
      es: "Introducción al Rebound",
      pt: "Intro Rebound Method"
    },
    description: {
      en: "Specifically constructed for first-time jumpers. Master basic trampoline safety, proper gravity absorption postures, and learn to groove to the musical accents. High fun, zero pressure.",
      es: "Especialmente construida para quienes saltan por primera vez. Domina la seguridad en el trampolín, posturas de absorción de gravedad y sigue acentos musicales. Cero presión.",
      pt: "Especialmente desenhada para iniciantes absolutos. Domine a postura correta de absorção de impacto, equilíbrio e sinta o groove ritmado. Diversão garantida, zero pressão."
    },
    category: "combo",
    duration: 40,
    level: "beginner",
    intensity: 2,
    bpmRange: "128 - 134",
    instructor: "Mia Alva",
    timeSlots: ["10:30 AM", "04:30 PM"]
  },
  {
    id: "class-heavy-rave",
    name: {
      en: "Concert Rave Core",
      es: "Rave Core Concierto",
      pt: "Concert Rave Core"
    },
    description: {
      en: "Lights out, fluorescent club neon and heavy Techno beats taking center stage. Includes endurance aerobic challenges, triple tempo bounces, and team high-fives. Absolute adrenaline high.",
      es: "Apagón de luces, luces de neón fluorescentes y ritmos Techno pesados toman el protagonismo. Incluye desafíos aeróbicos de resistencia y rebotes triples. Adrenalina total.",
      pt: "Luzes apagadas, neon fluorescente de clube noturno e Techno acelerado assumem a cena. Inclui tiros de resistência e aceleração tripla. Uma verdadeira descarga de adrenalina."
    },
    category: "cardio",
    duration: 60,
    level: "advanced",
    intensity: 5,
    bpmRange: "145 - 155",
    instructor: "Niko Santos",
    timeSlots: ["07:00 AM", "06:00 PM", "08:45 PM"]
  }
];

export const samplePricing: PricingItem[] = [
  {
    id: "price-drop-in",
    name: {
      en: "First Jump Pass",
      es: "Pase Primer Salto",
      pt: "Passe Primeiro Salto"
    },
    price: 19,
    subtitle: {
      en: "Full access single session for new rebels",
      es: "Acceso total para una sesión para nuevos rebeldes",
      pt: "Acesso total a 1 sessão avulsa com trampolim premium"
    },
    features: {
      en: ["1 Rebound Session", "Complimentary workout towel", "Premium locker access", "Interactive spot booking"],
      es: ["1 Sesión de Rebote", "Toalla de cortesía incluida", "Acceso a casilleros premium", "Reserva de ubicación interactiva"],
      pt: ["1 Aula de Rebote Unica", "Toalha de treino de cortesia", "Acesso a vestiários premium", "Reserva interativa de trampolim"]
    },
    tag: "TRIAL",
    type: "drop_in",
    quantityDesc: "1 CLASS"
  },
  {
    id: "price-pack-10",
    name: {
      en: "10 Class Pack Beat",
      es: "Pack 10 Clases Rhythm",
      pt: "Mojo Pack 10 Aulas"
    },
    price: 180,
    subtitle: {
      en: "Our most flexible cardio habit pack",
      es: "Nuestra opción más flexible para crear hábito",
      pt: "Nosso pack mais flexível para constância de treinos"
    },
    features: {
      en: ["10 Sessions (Valid 6 months)", "Bring a friend twice a month", "High-priority booking window", "10% off merchandise apparel"],
      es: ["10 Sesiones (Vence en 6 meses)", "Trae un amigo gratis dos veces al mes", "Reserva de alta prioridad", "10% dto en ropa oficial"],
      pt: ["10 Aulas (Validade 6 meses)", "Traga um amigo(a) grátis 2x por mês", "Prioridade média para agendamentos", "10% de desconto na linha de roupas"]
    },
    popular: true,
    tag: "POPULAR PACK",
    type: "pack",
    quantityDesc: "SAVE $50"
  },
  {
    id: "price-member-unlimited",
    name: {
      en: "Unlimited Zone Elite",
      es: "Zona Elite Ilimitada",
      pt: "Zone Elite Ilimitado"
    },
    price: 145,
    subtitle: {
      en: "Designed for high-performance tribes",
      es: "Diseñado para los que quieren nivel superior",
      pt: "Criado para a comunidade de alta performance"
    },
    features: {
      en: ["Unlimited monthly sessions", "Complimentary premium water refill", "15% discount on all apparel", "First-priority booking (7-days ahead)", "Access to themed special weekend sets"],
      es: ["Sesiones ilimitadas al mes", "Botella reutilizable y agua premium ilimitada", "15% de descuento en ropa oficial", "Acceso de primera prioridad (7 días antes)", "Eventos temáticos de fin de semana incluidos"],
      pt: ["Sessões ilimitadas por mês", "Água premium grátis em todas as aulas", "15% de desconto no stúdio apparel", "Agendamento prioritário (7 dias de antecedência)", "Inclusão garantida em todos os shows e eventos de DJs"]
    },
    tag: "BEST VALUE",
    type: "membership",
    quantityDesc: "UNLIMITED PASS"
  }
];

export const sampleChoreographies: ChoreographyMove[] = [
  {
    id: "chore-1",
    name: { en: "High-Knee Rebound", es: "Rebote Rodillas Altas", pt: "Elevação de Joelhos Beats" },
    difficulty: { en: "Intermediate", es: "Intermedio", pt: "Intermediário" },
    repCount: "2 intervals x 60 sec",
    gifPlaceholderEmoji: "🏃‍♀️",
    benefit: { en: "Explosive lower body power & rapid heart-elevation", es: "Potencia de tren inferior y elevación cardiaca rápida", pt: "Potência de membros inferiores e elevação aeróbica" }
  },
  {
    id: "chore-2",
    name: { en: "Double-Pulse Rebound", es: "Rebote en Doble Pulso", pt: "Pulso Duplo Rebound" },
    difficulty: { en: "Beginner", es: "Principiante", pt: "Iniciante" },
    repCount: "3 intervals x 45 sec",
    gifPlaceholderEmoji: "⚡",
    benefit: { en: "Core tightening focus & balance restoration", es: "Enfoque de fortalecimiento de core y balance", pt: "Foco em fortalecimento do abdômen e estabilização" }
  },
  {
    id: "chore-3",
    name: { en: "The Rebound Sprint", es: "Sprint de Rebote", pt: "Sprint Rebound de Alta Velocidade" },
    difficulty: { en: "Advanced", es: "Avanzado", pt: "Avançado" },
    repCount: "2 intervals x 30 sec",
    gifPlaceholderEmoji: "🔥",
    benefit: { en: "Max speed cardio ignition & calorie-shredding", es: "Ignición de cardio a máxima velocidad y quema calórica", pt: "Queima extrema de glicogênio e pico aeróbico" }
  },
  {
    id: "chore-4",
    name: { en: "Tuck Jump Lift", es: "Salto Agrupado de Esfuerzo", pt: "Tuck Jump Explosivo" },
    difficulty: { en: "Advanced", es: "Avanzado", pt: "Avançado" },
    repCount: "1 interval x 30 sec",
    gifPlaceholderEmoji: "🦘",
    benefit: { en: "Explosive lower abs contraction & maximum bounce-back", es: "Contracción de abdominales inferiores y rebote máximo", pt: "Contração explosiva de abdômen inferior e pico pliométrico" }
  }
];

export const faqs = [
  {
    question: {
      en: "Is trampoline fitness suitable for beginners?",
      es: "¿El fitness en trampolín es apto para principiantes?",
      pt: "O fitness com cama elástica/trampolim é indicado para iniciantes?"
    },
    answer: {
      en: "Absolutely! Rebound fitness is highly adjustable. You control the height of your bounce and the speed of your movements. Our 'Intro to Rebound Method' session is explicitly configured to introduce newcomers safely to the basics.",
      es: "¡Totalmente! El rebound es muy ajustable. Tú controlas la altura de tu rebote y la velocidad del movimiento. Nuestra clase 'Introducción al Rebound' está diseñada exactamente para enseñar lo básico sin ninguna presión.",
      pt: "Com certeza! O Rebounding é fantástico porque é adaptável. Você controla a força com que empurra a lona e a velocidade dos passos. Nossa aula 'Intro Rebound Method' foi desenvolvida exatamente para ensinar o passo a passo com total segurança."
    }
  },
  {
    question: {
      en: "How are trampolines safer for joint impact than running?",
      es: "¿Por qué los trampolines son más seguros para las articulaciones que correr?",
      pt: "Por que o trampolim é mais seguro para as articulações do que a corrida de rua?"
    },
    answer: {
      en: "Standard running exerts hard impact shocks directly to your ankles, knees, and lumbar spine. The premium bungee-cord suspensions on our individualized trampolines absorb over 80% of gravitational impact while returning energy, protecting joints while boosting lymph flow.",
      es: "Correr en asfalto ejerce impactos duros sobre tobillos, rodillas y columna. Las suspensiones de cuerdas elásticas premium de nuestros trampolines absorben más del 80% del impacto por gravedad, protegiendo tus articulações y estimulando el sistema linfático.",
      pt: "A corrida comum de rua descarrega todo o impacto na coluna, joelhos e tornozelos. As cordas elásticas importadas de alta elasticidade dos nossos trampolins profissionais absorvem mais de 80% do choque gravitacional, devolvendo a energia na subida. Você treina pesado sem machucar os joelhos!"
    }
  },
  {
    question: {
      en: "What should I wear to my first session?",
      es: "¿Qué debo usar para mi primera sesión?",
      pt: "O que devo usar na minha primeira aula?"
    },
    answer: {
      en: "Wear athletic sports clothes that allow free posture extensions. Clean studio sneakers or cross-training shoes with solid grip are mandatory for safety. Don't forget a water bottle—it gets very high energy!",
      es: "Usa ropa deportiva Cómoda que permita flexibilidad de movimiento. Tenis deportivos limpios con buen agarre son obligatorios por seguridad. No olvides tu botella de agua, ¡la energía sube muy rápido!",
      pt: "Use roupas esportivas confortáveis e respiráveis para movimento livre. Tênis de treino bem limpos e de boa aderência são obrigatórios para a segurança na lona. Traga sua garrafa de água — o treino é intenso e suado!"
    }
  },
  {
    question: {
      en: "Where is Jump Zone Studio located in Newark?",
      es: "¿Dónde se encuentra el estudio de Jump Zone en Newark?",
      pt: "Onde o estúdio da Jump Zone fica localizado em Newark?"
    },
    answer: {
      en: "We are located in the heart of Newark, New Jersey's boutique district near Mulberry Commons. Our studio features premium dark aesthetic interiors, energetic high-fidelity audio mapping, and spacious private amenities.",
      es: "Estamos ubicados en el corazón del distrito boutique de Newark, Nueva Jersey, cerca de Mulberry Commons. Nuestro estudio tiene interiores oscuros prémium, audio de alta definición y amplias comodidades privadas.",
      pt: "Estamos localizados no coração da região central de Newark, New Jersey, próximo ao Mulberry Commons. Nosso estúdio possui design exclusivo club-style escuro premium, som de alta fidelidade e infraestrutura de alta linha."
    }
  }
];
