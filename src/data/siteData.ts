export interface FilmProject {
  id: string;
  award: string;
  duration: string;
  client: string;
  categoryTag: string; // e.g. "GLOBAL CAMPAIGN", "EV LAUNCH FILM"
  filterCategory: "commercials" | "automotive" | "fashion" | "vfx";
  title: string;
  director: string;
  cameraInfo: string;
  image: string;
  youtubeId: string;
  description: string;
  aspectRatio: string;
  year: string;
  credits: {
    dop: string;
    editor: string;
    colorist: string;
    sound: string;
    vfx: string;
  };
}

export interface Director {
  id: string;
  name: string;
  locations: string;
  tag: string;
  bio: string;
  spotsCount: number;
  image: string;
  youtubeId: string;
  featuredFilms: string[];
}

export interface PipelineStage {
  stageNumber: string;
  title: string;
  description: string;
  keyToolLabel: string;
  keyToolValue: string;
}

export interface AwardItem {
  id: string;
  organization: string;
  details: string;
  iconName: string;
}

export const SITE_DATA = {
  hero: {
    // Curated high-production cinematic reels
    desktopYoutubeId: "_JNjJO9awho", // Desktop hero background video
    mobileYoutubeId: "qsWbLRHe3cw", // Mobile hero background video
    masterReelYoutubeId: "_JNjJO9awho",
    masterReelDuration: "01:45",
  },
  clients: [
    "SPOTIFY",
    "SONY PLAYSTATION",
    "AUDI",
    "PRADA",
    "NIKE",
    "PORSCHE",
    "BALENCIAGA",
    "APPLE",
    "RED BULL",
    "CARTIER",
    "RIMOWA",
    "GENTLE MONSTER",
    "BMW",
    "VOGUE",
  ],
  works: [
    {
      id: "nike-beyond-the-edge",
      award: "CANNES LIONS GOLD '25",
      duration: "01:30 TVC",
      client: "NIKE",
      categoryTag: "GLOBAL CAMPAIGN",
      filterCategory: "commercials",
      title: "BEYOND THE EDGE",
      director: "Dir. Marcus Vance",
      cameraInfo: "Cinematography: ARRI Alexa 35 Anamorphic",
      image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1200&auto=format&fit=crop",
      youtubeId: "EngW7tLk6R8",
      description: "An adrenaline-fueled visual anthem exploring the psychological threshold of elite marathon runners breaking human limits under rain-drenched neon metropolis streets.",
      aspectRatio: "2.39:1 Anamorphic",
      year: "2025",
      credits: {
        dop: "Greig Fraser, ASC, ACS",
        editor: "Kirk Baxter, ACE",
        colorist: "Tom Poole (Company 3)",
        sound: "Dolby Atmos Spatial Mix (Wave Studios)",
        vfx: "Human Tales In-House Simulation Lab",
      },
    },
    {
      id: "porsche-apex-ghost",
      award: "D&AD GRAPHITE PENCIL",
      duration: "02:15 CINEMATIC",
      client: "PORSCHE",
      categoryTag: "EV LAUNCH FILM",
      filterCategory: "automotive",
      title: "THE APEX GHOST",
      director: "Dir. Elena Rostova",
      cameraInfo: "Shot on Phantom Flex 4K High-Speed",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
      youtubeId: "zV_4D5lKsqk",
      description: "High-speed night track cinematography capturing the electric powertrain dynamics of the next-generation concept vehicle carving through Alpine hairpins at sub-zero temperatures.",
      aspectRatio: "2.39:1 Scope",
      year: "2025",
      credits: {
        dop: "Linus Sandgren, FSF, ASC",
        editor: "Mikkel E.G. Nielsen",
        colorist: "Stefan Sonnenfeld",
        sound: "Electric Synthetic Sound Engine (750mph)",
        vfx: "The Mill / Human Tales VFX",
      },
    },
    {
      id: "balenciaga-synthetic-grace",
      award: "CICLOPE AWARD BEST DIRECTION",
      duration: "01:00 FASHION CUT",
      client: "BALENCIAGA",
      categoryTag: "HAUTE COUTURE",
      filterCategory: "fashion",
      title: "SYNTHETIC GRACE",
      director: "Dir. Kai Thorne",
      cameraInfo: "35mm Film + Neural Render VFX",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
      youtubeId: "5v-w_wZgPcs",
      description: "Surreal haute couture poetry juxtaposing grainy 35mm motion picture film with real-time neural Gaussian splatting to reshape modern digital tailoring.",
      aspectRatio: "1.33:1 Academy & 9:16 Dual Master",
      year: "2025",
      credits: {
        dop: "Hoyte van Hoytema, ASC, FSF, NSC",
        editor: "Yorgos Mavropsaridis",
        colorist: "Company 3 London",
        sound: "Avant-Garde Drone Acoustics",
        vfx: "Neural Simulation Dept.",
      },
    },
    {
      id: "sony-quantum-drift",
      award: "VES AWARDS NOMINEE",
      duration: "02:00 CGI SPOT",
      client: "SONY",
      categoryTag: "PLAYSTATION 5 PRO",
      filterCategory: "vfx",
      title: "QUANTUM DRIFT",
      director: "Dir. Jaxen Cole",
      cameraInfo: "Full CGI + Motion Capture & Unreal Engine 5.4",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
      youtubeId: "dQw4w9WgXcQ",
      description: "A photorealistic cyberpunk heist generated with zero live cameras — utilizing cutting-edge motion capture, virtual camera rigs, and raytraced volume rendering.",
      aspectRatio: "2.39:1 DCI",
      year: "2024",
      credits: {
        dop: "Virtual Cinematographer Jaxen Cole",
        editor: "Eddie Hamilton",
        colorist: "ACEScg Pipeline Grading",
        sound: "PlayStation Tempest 3D Audio",
        vfx: "Unreal Engine 5.4 Dynamic Cluster",
      },
    },
    {
      id: "apple-sonic-resonance",
      award: "CLIO GOLD '25",
      duration: "01:45 ANTHEM",
      client: "APPLE",
      categoryTag: "SPATIAL AUDIO",
      filterCategory: "commercials",
      title: "SONIC RESONANCE",
      director: "Dir. Sarah Lin",
      cameraInfo: "Dolby Atmos 9.1.4 Mixed Sound Design",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop",
      youtubeId: "Wn_Kb3MR_cU",
      description: "Visualizing invisible sound waves cascading across architecture, orchestras, and solitary city rooftops in hyper-stylized slow-motion macro cinematography.",
      aspectRatio: "2.00:1 Univisium",
      year: "2025",
      credits: {
        dop: "Sayombhu Mukdeeprom",
        editor: "Joe Walker, ACE",
        colorist: "Harbor Picture Company",
        sound: "Dolby Atmos 9.1.4 Reference Suite",
        vfx: "Fluid Particle Acoustics Simulation",
      },
    },
    {
      id: "red-bull-desert-horizon",
      award: "AICP AWARD WINNER",
      duration: "03:00 DOCUMENTARY AD",
      client: "RED BULL",
      categoryTag: "MOTORSPORTS",
      filterCategory: "automotive",
      title: "DESERT HORIZON",
      director: "Dir. Marcus Vance",
      cameraInfo: "High-speed FPV Drone & Motion Arm",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
      youtubeId: "ysz5S6PUM-U",
      description: "Unfiltered endurance racing through the Atacama desert tracked with 120mph custom FPV heavy-lifter drones carrying stripped ARRI LF packages.",
      aspectRatio: "2.39:1 Anamorphic",
      year: "2025",
      credits: {
        dop: "Marcus Vance & Johnny FPV",
        editor: "Laurent Garnier",
        colorist: "Color Collective NY",
        sound: "Raw V8 Acoustic Telemetry",
        vfx: "Human Tales Drone Capture Lab",
      },
    },
  ] as FilmProject[],
  capabilities: [
    {
      id: "tvc",
      icon: "clapperboard",
      title: "TVC & COMMERCIALS",
      description:
        "High-end broadcast TV spots and digital films designed with cinematic scale to seize consumer attention and generate market momentum.",
      bullets: [
        "Super Bowl & Global Broadcast",
        "Multi-format Digital Cuts",
        "Celebrity & Athlete Direction",
      ],
    },
    {
      id: "manifestos",
      icon: "megaphone",
      title: "BRAND MANIFESTOS",
      description:
        "Deeply moving narrative-driven storytelling that cements brand legacy, emotional resonance, and cultural leadership.",
      bullets: [
        "Strategic Brand Ideation",
        "Documentary & Narrative Craft",
        "Global Location Scouting",
      ],
    },
    {
      id: "vfx",
      icon: "box",
      title: "VFX & CGI WORLDS",
      description:
        "Seamless blend of practical filmmaking and advanced 3D visual effects, Unreal Engine virtual production, and hyper-real simulations.",
      bullets: [
        "Photoreal Product CGI",
        "Virtual LED Studio Volume",
        "Houdini Dynamic FX",
      ],
    },
    {
      id: "post",
      icon: "sparkles",
      title: "POST & SOUND DESIGN",
      description:
        "World-class color grading suites, editorial pacing, original cinematic musical scores, and Dolby Atmos audio mastering.",
      bullets: [
        "DaVinci Resolve HDR Color",
        "Dolby Atmos 9.1.4 Mixing",
        "Custom Sound Architecture",
      ],
    },
  ],
  directors: [
    {
      id: "elena-rostova",
      name: "ELENA ROSTOVA",
      locations: "BERLIN // LOS ANGELES",
      tag: "AUTOMOTIVE & HIGH-SPEED",
      bio: "Known for kinetic camera movement, neon nocturnes, and pulse-raising automotive storytelling. Clients include Porsche, Audi, and BMW.",
      spotsCount: 12,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
      youtubeId: "zV_4D5lKsqk",
      featuredFilms: ["Porsche Apex Ghost", "Audi Quattro Velocity", "BMW M Hybrid"],
    },
    {
      id: "marcus-vance",
      name: "MARCUS VANCE",
      locations: "LONDON // NEW YORK",
      tag: "ATHLETIC & NARRATIVE",
      bio: "Pioneered intimate, visceral cinematography for sport anthems and documentary-driven global commercials. Clients include Nike, Under Armour, and Red Bull.",
      spotsCount: 18,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      youtubeId: "EngW7tLk6R8",
      featuredFilms: ["Nike Beyond The Edge", "Red Bull Desert Horizon", "Puma Fast Track"],
    },
    {
      id: "sarah-lin",
      name: "SARAH LIN",
      locations: "TOKYO // PARIS",
      tag: "FASHION & SURREAL CGI",
      bio: "Master of avant-garde visual poetry, color gradients, and surreal fashion manifestos. Clients include Balenciaga, Vogue, Apple, and Gentle Monster.",
      spotsCount: 14,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      youtubeId: "Wn_Kb3MR_cU",
      featuredFilms: ["Apple Sonic Resonance", "Balenciaga Synthetic Grace", "Gentle Monster Void"],
    },
  ] as Director[],
  pipelineStages: [
    {
      stageNumber: "STAGE 01",
      title: "TREATMENT & PRE-VIZ",
      description:
        "Script breakdown, director's visual treatment, 3D camera animatics, and bespoke mood reels.",
      keyToolLabel: "TOOL",
      keyToolValue: "UNREAL ENGINE 5",
    },
    {
      stageNumber: "STAGE 02",
      title: "PHYSICAL PRODUCTION",
      description:
        "Global crew deployment, ARRI/Phantom packages, motion control rigs, and precision on-set DIT.",
      keyToolLabel: "CAM",
      keyToolValue: "ARRI 35 / BOLT X RIG",
    },
    {
      stageNumber: "STAGE 03",
      title: "OFFLINE EDIT",
      description:
        "Narrative pacing, rhythmic cut variations, multi-aspect ratio framing for broadcast & social.",
      keyToolLabel: "FORMAT",
      keyToolValue: "16:9 / 9:16 / 1:1",
    },
    {
      stageNumber: "STAGE 04",
      title: "VFX & SIMULATION",
      description:
        "Clean-ups, photoreal CG integration, matchmoving, particle simulations, and dynamic typography.",
      keyToolLabel: "SUITE",
      keyToolValue: "HOUDINI & NUKE",
    },
    {
      stageNumber: "STAGE 05",
      title: "COLOR & ATMOS",
      description:
        "HDR DaVinci color grading suites, editorial pacing, Foley design, and Dolby Atmos 9.1 delivery.",
      keyToolLabel: "COLOR",
      keyToolValue: "DAVINCI RESOLVE",
    },
  ] as PipelineStage[],
  metrics: [
    { value: "54+", label: "GLOBAL AWARDS" },
    { value: "350M", label: "TOTAL CAMPAIGN VIEWS" },
    { value: "18", label: "GLOBAL SHOOT HUBS" },
    { value: "100%", label: "IN-HOUSE FINISHING" },
  ],
  awards: [
    {
      id: "cannes",
      organization: "CANNES LIONS",
      details: "2x Gold, 4x Silver (Film Craft)",
      iconName: "award",
    },
    {
      id: "dandad",
      organization: "D&AD PENCILS",
      details: "Yellow & Graphite (Direction)",
      iconName: "trophy",
    },
    {
      id: "clio",
      organization: "CLIO AWARDS",
      details: "Grand Clio & 5x Gold",
      iconName: "star",
    },
    {
      id: "ciclope",
      organization: "CICLOPE FESTIVAL",
      details: "Production Company of the Year",
      iconName: "flame",
    },
    {
      id: "aicp",
      organization: "AICP SHOW",
      details: "MoMA Permanent Film Archive",
      iconName: "film",
    },
    {
      id: "oneshow",
      organization: "ONE SHOW",
      details: "Best in Discipline (VFX)",
      iconName: "target",
    },
  ] as AwardItem[],
  studios: [
    {
      city: "LOS ANGELES",
      address: "8450 Melrose Ave, West Hollywood, CA",
    },
    {
      city: "LONDON",
      address: "22 Soho Square, London W1D 4NS",
    },
    {
      city: "TOKYO",
      address: "5-7-2 Minami-Aoyama, Minato-ku, Tokyo",
    },
  ],
};
