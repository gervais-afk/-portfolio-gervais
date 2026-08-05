/**
 * Global i18n Translations Dictionary (FR / EN)
 * Portfolio & CV KOA MARIE GERVAIS NELLY
 */

const translations = {
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_about: "Parcours",
        nav_projects: "Projets",
        nav_skills: "Compétences",
        nav_stack: "Tech Stack",
        nav_certifications: "Certifications",
        nav_cv: "CV Pro",
        nav_contact: "Contact",

        // Hero Section
        hero_tag: "Fondateur @ Archi Cam AI | Lead AI Engineer",
        hero_subtitle_prefix: "Je suis ",
        hero_desc: "Ingénieur & Spécialiste en IA Appliquée, 5D BIM & Data Science (Master professionnel intelligence artificielle appliquée - Université de Ngaoundéré & Licence Génie Civil). Fondateur d'<strong>Archi Cam AI</strong> et candidat officiel au <strong>Google Africa Applied AI Lab</strong> (Accra, Ghana).",
        btn_cv_web: "Consulter le CV Web",
        btn_cv_pdf: "Télécharger CV PDF",
        btn_projects: "Découvrir mes Projets",
        status_badge: "Disponible pour missions",

        // Typewriter Strings
        typewriter_roles: [
            "Lead AI Engineer",
            "Data Architect & Specialist GraphRAG",
            "Fondateur @ Archi Cam AI",
            "Spécialiste BIM 5D & BAEL 91",
            "Cadre Sûreté Aviation (AVSEC / CCAA)"
        ],

        // Stats Counter
        stat_1_label: "Projets IA en Production",
        stat_2_label: "Cadre AVSEC · CCAA / OACI",
        stat_3_label: "Gain de temps chiffrage BTP",
        stat_4_label: "Précision modèles VigieSahel",
        stat_5_label: "Économisées / Aéroport CCAA",

        // About / Timeline
        about_title_1: "Mon Parcours ",
        about_title_2: "Académique & Pro",
        about_subtitle: "Une transition solide du Génie Civil vers les technologies de pointe en IA.",
        about_summary_title: "Résumé Professionnel",
        about_summary_desc: "Mon parcours est marqué par une solide rigueur d'ingénieur développée au cours de mes études et travaux dans le Génie Civil, alliée à une passion profonde pour l'informatique. Spécialiste en modélisation de graphes (Neo4j), systèmes agentiques (Firebase Genkit, CrewAI) et souveraineté des données Edge AI, je conçois des architectures hautement sécurisées pour le BTP et la sûreté.",

        // Projects Section
        projects_title: "Mes Projets ",
        projects_subtitle: "5 systèmes IA souverains conçus pour un impact industriel et sociétal mesurable.",

        // Skills Section (5 Blocs)
        skills_title: "Mes Domaines d'",
        skills_subtitle: "Découvrez mon syllabus d'ingénierie structuré en 5 blocs de compétences opérationnelles.",

        // Stack Section
        stack_title: "Ma ",
        stack_subtitle: "Technologies, frameworks et outils maîtrisés pour les architectures IA souveraines.",

        // Certifications Section
        certif_title: "Certifications & ",
        certif_subtitle: "Formations académiques et qualifications réglementaires internationales.",

        // Contact Section
        contact_title: "Me ",
        contact_subtitle: "Un projet IA, une opportunité de collaboration ou une demande d'expertise ?",
        contact_name: "Nom complet",
        contact_email: "Adresse email",
        contact_msg: "Message",
        btn_send: "Envoyer le message",

        // Footer
        footer_rights: "Tous droits réservés.",

        // CV Page (cv.html)
        cv_title: "Lead AI Engineer & Consultant IA / Data | Fondateur @ Archi Cam AI",
        cv_badge: '<i class="fa-solid fa-award"></i> Candidature en cours - Google Africa Applied AI Lab',
        cv_btn_back: "Retour au Portfolio",
        cv_btn_pdf: "Télécharger PDF (FR)",
        cv_btn_pdf_en: "Télécharger PDF (EN)",
        cv_btn_docx: "Télécharger Word (.docx)",
        cv_btn_print: "Imprimer",

        // CV Sidebar
        cv_title_ai: '<i class="fa-solid fa-microchip"></i> IA & LLM',
        cv_title_data: '<i class="fa-solid fa-database"></i> Data & Graphes',
        cv_title_dev: '<i class="fa-solid fa-code"></i> Dev & MLOps',
        cv_title_lang: '<i class="fa-solid fa-language"></i> Langues',
        cv_title_assets: '<i class="fa-solid fa-shield-halved"></i> Atouts Clés',
        cv_lang_1: '<i class="fa-solid fa-check"></i> Français (Courant)',
        cv_lang_2: '<i class="fa-solid fa-check"></i> Anglais (Technique / Professionnel)',
        cv_asset_1: '<i class="fa-solid fa-check"></i> Double compétence IA & Génie Civil',
        cv_asset_2: '<i class="fa-solid fa-check"></i> Gestion des risques & Sécurité (AVSEC)',
        cv_asset_3: '<i class="fa-solid fa-check"></i> Rigueur de calcul & Guardrails IA',

        // CV Main Content
        cv_title_summary: '<i class="fa-solid fa-user-tie"></i> Résumé Professionnel',
        cv_summary_text: "Consultant IA & Lead AI Engineer, j'accompagne les entreprises dans la transformation de leurs données complexes en leviers décisionnels à forte valeur ajoutée. Spécialiste des Agents IA autonomes, du GraphRAG et de la Business Intelligence sécurisée, je développe des solutions d'IA souveraines, étanches et explicables. Fondateur d'Archi Cam AI pour le Google Africa Applied AI Lab, j'allie méthodologie d'ingénieur et vision produit.",
        
        cv_title_projects: '<i class="fa-solid fa-code"></i> Projets IA Majeurs',
        cv_p1_title: "Archi Cam AI",
        cv_p1_company: "SaaS IA Agentique & 5D BIM",
        cv_p1_desc: "Candidat officiel au Google Africa Applied AI Lab (Accra, Ghana). Plateforme de chiffrage et modélisation BIM 5D pour le BTP africain.",
        cv_p1_b1: "Combinaison de Gemma 4 12B local, Gemini 1.5 Pro et d'un moteur Python Sandbox (IfcOpenShell, BAEL 91).",
        cv_p1_b2: "Génération automatique de devis Excel normés (DQE) et rendus photoréalistes via Imagen 3 + ControlNet.",

        cv_p2_title: "Sovereign.BI Agentic",
        cv_p2_company: "Business Intelligence Agentique",
        cv_p2_desc: "Moteur décisionnel permettant d'interroger des bases de données SQL complexes en langage naturel.",
        cv_p2_b1: "Architecture TypeScript Orchestrator, Neo4j N10S (GraphRAG) et FastAPI/PostgreSQL.",
        cv_p2_b2: "Intégration de guardrails dynamiques anti-injection et d'un auditeur d'explicabilité SHAP Sentinel.",

        cv_p3_title: "Dataset Automator & VigieSahel",
        cv_p3_company: "MLOps & IA Impact Climat",
        cv_p3_b1: "<strong>Dataset Automator</strong> : Usine MLOps avec surveillance automatisée du Data Drift (KS-test / PSI), Neo4j GraphRAG, MLflow et orchestration Genkit/Gemma 4.",
        cv_p3_b2: "<strong>VigieSahel</strong> : Plateforme décisionnelle réduisant de 35 % les échecs de semis et anticipant de 14 jours les risques d'épidémies (XGBoost R² > 94 %, Supabase, MLflow).",

        cv_title_exp: '<i class="fa-solid fa-briefcase"></i> Parcours Professionnel',
        cv_j1_title: "Consultant IA & Data Science",
        cv_j1_date: "2025 - Présent",
        cv_j1_company: "Projets Indépendants & Entreprises | Douala",
        cv_j1_b1: "J'accompagne les entreprises dans l'adoption d'IA souveraines dans leurs tâches.",
        cv_j1_b2: "Analyse exploratoire et prétraitement de jeux de données massifs complexes.",
        cv_j1_b3: "Modélisation de graphes de connaissances (Neo4j Cypher) et développement de pipelines RAG.",
        cv_j1_b4: "Conception de bases de données SQL/PostgreSQL et reporting décisionnel interactif.",

        cv_j2_title: "Agent de Sûreté Aéroportuaire (AVSEC)",
        cv_j2_date: "2018 - Présent",
        cv_j2_company: "CCAA (Autorité Aéronautique du Cameroun)",
        cv_j2_b1: "Analyse des risques critiques, inspection sûreté et contrôle strict des accès sécurisés.",
        cv_j2_b2: "Rédaction de rapports d'audit de sûreté et coordination d'interventions opérationnelles.",

        cv_title_edu: '<i class="fa-solid fa-graduation-cap"></i> Formation Académique',
        cv_e1_title: 'Master professionnel intelligence artificielle appliquée <small style="color: #0284C7; font-weight: 700; background: rgba(2,132,199,0.1); padding: 0.15rem 0.5rem; border-radius: 6px; margin-left: 0.4rem;">(En cours d\'obtention)</small>',
        cv_e1_date: "2025 - 2027",
        cv_e1_school: "Université de Ngaoundéré",
        cv_e1_desc: "Spécialisation en Modélisation de Graphes (Neo4j), MLOps, Prompt Engineering & LLM.",

        cv_e2_title: "Licence & BTS Génie Civil (Option Bâtiment)",
        cv_e2_date: "2015 - 2016",
        cv_e2_school: "ISTDI / IUC Douala",
        cv_e2_desc: "Dimensionnement de structures (BAEL 91), calculs de métrés et gestion de projets BTP."
    },

    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "Background",
        nav_projects: "Projects",
        nav_skills: "Skills & Syllabus",
        nav_stack: "Tech Stack",
        nav_certifications: "Certifications",
        nav_cv: "Pro Resume",
        nav_contact: "Contact",

        // Hero Section
        hero_tag: "Founder @ Archi Cam AI | Lead AI Engineer",
        hero_subtitle_prefix: "I am a ",
        hero_desc: "Engineer & Applied AI, 5D BIM & Data Science Specialist (M.Sc. Applied Artificial Intelligence - University of Ngaoundéré & B.Sc. Civil Engineering). Founder of <strong>Archi Cam AI</strong> and official applicant for the <strong>Google Africa Applied AI Lab</strong> (Accra, Ghana).",
        btn_cv_web: "View Web Resume",
        btn_cv_pdf: "Download PDF Resume",
        btn_projects: "Explore My Projects",
        status_badge: "Available for missions",

        // Typewriter Strings
        typewriter_roles: [
            "Lead AI Engineer",
            "Data Architect & GraphRAG Specialist",
            "Founder @ Archi Cam AI",
            "5D BIM & BAEL 91 Engineering Specialist",
            "Aviation Security Officer (AVSEC / CCAA)"
        ],

        // Stats Counter
        stat_1_label: "Production AI Projects",
        stat_2_label: "AVSEC Officer · CCAA / ICAO",
        stat_3_label: "Construction Estimating Speedup",
        stat_4_label: "VigieSahel Model Accuracy",
        stat_5_label: "Saved / Airport at CCAA",

        // About / Timeline
        about_title_1: "My Academic & ",
        about_title_2: "Professional Journey",
        about_subtitle: "A solid transition from Civil Engineering to cutting-edge AI technologies.",
        about_summary_title: "Executive Summary",
        about_summary_desc: "My background combines engineering mathematical rigor developed during civil engineering studies and field operations, with a deep expertise in AI. Specializing in Knowledge Graph modeling (Neo4j), autonomous agent systems (Firebase Genkit, CrewAI), and Edge AI data sovereignty, I architect highly secure systems for construction and aviation security.",

        // Projects Section
        projects_title: "Featured ",
        projects_subtitle: "5 sovereign AI systems engineered for measurable industrial and societal impact.",

        // Skills Section (5 Blocs)
        skills_title: "Areas of ",
        skills_subtitle: "Explore my engineering syllabus structured across 5 operational core skill blocks.",

        // Stack Section
        stack_title: "Tech ",
        stack_subtitle: "Technologies, frameworks, and tools mastered for sovereign AI architectures.",

        // Certifications Section
        certif_title: "Certifications & ",
        certif_subtitle: "Academic degrees and international regulatory aviation security qualifications.",

        // Contact Section
        contact_title: "Get In ",
        contact_subtitle: "An AI project, collaboration opportunity, or request for technical consulting?",
        contact_name: "Full Name",
        contact_email: "Email Address",
        contact_msg: "Your Message",
        btn_send: "Send Message",

        // Footer
        footer_rights: "All Rights Reserved.",

        // CV Page (cv.html)
        cv_title: "Lead AI Engineer & Data Architect | Founder @ Archi Cam AI",
        cv_badge: '<i class="fa-solid fa-award"></i> Official Applicant - Google Africa Applied AI Lab',
        cv_btn_back: "Back to Portfolio",
        cv_btn_pdf: "Download PDF (FR)",
        cv_btn_pdf_en: "Download PDF (EN)",
        cv_btn_docx: "Download Word (.docx)",
        cv_btn_print: "Print Resume",

        // CV Sidebar
        cv_title_ai: '<i class="fa-solid fa-microchip"></i> AI & LLM Stack',
        cv_title_data: '<i class="fa-solid fa-database"></i> Data & Graphs',
        cv_title_dev: '<i class="fa-solid fa-code"></i> Dev & MLOps',
        cv_title_lang: '<i class="fa-solid fa-language"></i> Languages',
        cv_title_assets: '<i class="fa-solid fa-shield-halved"></i> Key Assets',
        cv_lang_1: '<i class="fa-solid fa-check"></i> French (Native)',
        cv_lang_2: '<i class="fa-solid fa-check"></i> English (Professional / Technical)',
        cv_asset_1: '<i class="fa-solid fa-check"></i> Dual Competence AI & Civil Engineering',
        cv_asset_2: '<i class="fa-solid fa-check"></i> Risk Management & Aviation Security (AVSEC)',
        cv_asset_3: '<i class="fa-solid fa-check"></i> Math Rigor & Strict AI Guardrails',

        // CV Main Content
        cv_title_summary: '<i class="fa-solid fa-user-tie"></i> Executive Summary',
        cv_summary_text: "Lead AI Engineer & Data Architect specializing in sovereign autonomous agents, Neo4j GraphRAG, and deterministic civil engineering software. Founder of Archi Cam AI (official applicant for Google Africa Applied AI Lab), bridging multi-agent orchestration with strict mathematical compliance (BAEL 91, ICAO Annex 17) and production MLOps.",
        
        cv_title_projects: '<i class="fa-solid fa-code"></i> Flagship AI Projects',
        cv_p1_title: "Archi Cam AI",
        cv_p1_company: "Agentic AI & 5D BIM SaaS",
        cv_p1_desc: "Official candidate for Google Africa Applied AI Lab (Accra, Ghana). Sovereign 5D BIM & BOQ estimation platform for African construction.",
        cv_p1_b1: "Combines local Google Gemma 4 12B QAT, Gemini 1.5 Pro, and deterministic Python Sandbox (IfcOpenShell, BAEL 91).",
        cv_p1_b2: "Automates 6-sheet NDA Excel BOQs in <45s (-99.2% time) and synthesizes 3D renders via Imagen 3.0 + ControlNet.",

        cv_p2_title: "Sovereign.BI Agentic",
        cv_p2_company: "Enterprise Security & Agentic BI",
        cv_p2_desc: "Sovereign natural language query engine for complex enterprise SQL & Graph databases.",
        cv_p2_b1: "TypeScript Orchestrator architecture, Neo4j N10S (GraphRAG), and FastAPI/PostgreSQL backend.",
        cv_p2_b2: "Enforces dynamic ABAC guardrails and anti-hallucination explainability via SHAP Sentinel.",

        cv_p3_title: "Dataset Automator & VigieSahel",
        cv_p3_company: "MLOps Pipeline & Climate AI Impact",
        cv_p3_b1: "<strong>Dataset Automator</strong>: MLOps engine with automated Data Drift monitoring (KS-test / PSI), Neo4j GraphRAG, MLflow, and Genkit/Gemma 4 orchestration.",
        cv_p3_b2: "<strong>VigieSahel</strong>: Predictive ML platform reducing crop sowing failures by 35% and anticipating health epidemic risks 14 days in advance (XGBoost R² > 94%, Supabase, MLflow).",

        cv_title_exp: '<i class="fa-solid fa-briefcase"></i> Professional Experience',
        cv_j1_title: "AI Lead & Data Science Consultant",
        cv_j1_date: "2025 - Present",
        cv_j1_company: "Independent Projects & Enterprises | Douala, CM",
        cv_j1_b1: "Guiding enterprises in deploying sovereign local AI agents and private data processing pipelines.",
        cv_j1_b2: "Exploratory data analysis and preprocessing of high-dimensional complex datasets.",
        cv_j1_b3: "Knowledge graph modeling (Neo4j Cypher) and end-to-end GraphRAG pipeline development.",
        cv_j1_b4: "Designing PostgreSQL relational schema and interactive executive reporting dashboards.",

        cv_j2_title: "Aviation Security Officer (AVSEC)",
        cv_j2_date: "2018 - Present",
        cv_j2_company: "CCAA (Cameroon Civil Aviation Authority)",
        cv_j2_b1: "Critical threat assessment, security inspections, and access control management (ICAO Annex 17).",
        cv_j2_b2: "Drafting regulatory security compliance reports and coordinating operational field emergency response.",

        cv_title_edu: '<i class="fa-solid fa-graduation-cap"></i> Education & Certifications',
        cv_e1_title: 'Master of Science in Applied Artificial Intelligence <small style="color: #0284C7; font-weight: 700; background: rgba(2,132,199,0.1); padding: 0.15rem 0.5rem; border-radius: 6px; margin-left: 0.4rem;">(In Progress)</small>',
        cv_e1_date: "2025 - 2027",
        cv_e1_school: "University of Ngaoundéré",
        cv_e1_desc: "Graph Modeling (Neo4j), MLOps, Prompt Engineering & LLM Architecture.",

        cv_e2_title: "Bachelor of Science in Civil Engineering (Building Option)",
        cv_e2_date: "2015 - 2016",
        cv_e2_school: "ISTDI / IUC Douala",
        cv_e2_desc: "Structural Calculations (BAEL 91), Quantity Surveying & Construction Project Management."
    }
};
