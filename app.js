/* ==========================================
   PORTFOLIO INTERACTIVE LOGIC & ANIMATIONS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Typewriter Effect
    const words = [
        "Consultant IA & Data",
        "Spécialiste MLOps & RAG",
        "Ingénieur Graphes de Connaissances"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.getElementById('typewriter');
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenWords = 2000;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentWord.length) {
            currentSpeed = delayBetweenWords;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            currentSpeed = 500;
        }

        setTimeout(type, currentSpeed);
    }
    
    if (typewriterElement) {
        type();
    }

    // 2. 3D Tilt Effect on Project Cards
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // Mouse position inside card
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate tilt degrees (max 10 degrees)
            const rotateX = ((centerY - y) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // 3. Scroll Entrance Animations (Intersection Observer)
    const animatableElements = document.querySelectorAll('.animate-on-scroll, .timeline-item, .project-card, .about-card, .contact-info, .contact-form, .section-title, .stat-item, .techstack-category, .cert-card');
    
    animatableElements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });

    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px 20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, observerOptions);

    animatableElements.forEach(el => observer.observe(el));

    // 4. Skills Interactive Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillTags = document.querySelectorAll('.skill-tag');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active to current
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            skillTags.forEach(tag => {
                const category = tag.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    tag.classList.remove('fade-out');
                } else {
                    tag.classList.add('fade-out');
                }
            });
        });
    });

    // 5. Active Navbar Link on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 250)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    });

    // 6. Interactive Architecture Modals System
    const projectsData = {
        'archi-cam-ai': {
            badge: "SaaS IA Agentique & 5D BIM (Candidat Google Africa Applied AI Lab)",
            title: "Archi Cam AI 🏛️",
            subtitle: "Plateforme IA souveraine de modélisation BIM 5D & génération automatisée de métrés normés pour le BTP africain.",
            pipeline: [
                { num: "Étape 01", title: "Entrée Multimodale", desc: "Scan 2D/3D, fichiers DWG/PDF & prompts vocaux/texte de l'ingénieur." },
                { num: "Étape 02", title: "Agentic RAG & Graph", desc: "Neo4j N10S + Gemma 4 12B QAT local & Gemini 1.5 Pro Vision." },
                { num: "Étape 03", title: "Python Sandbox BIM", desc: "Calculs de structures déterministes BAEL 91 & IfcOpenShell sans hallucination." },
                { num: "Étape 04", title: "Livrables BIM 5D", desc: "Fichiers IFC 3D, devis Excel normés (DQE) & rendus Imagen 3 + ControlNet." }
            ],
            impacts: [
                "Génération automatique des devis estimatifs et quantitatifs (DQE) en moins de 2 minutes.",
                "Conformité garantie aux normes de construction camerounaises et CEMAC (BAEL 91 / Eurocodes).",
                "Exécution hybride Cloud / Edge pour une souveraineté totale des données BTP."
            ],
            techs: ["Next.js 14", "Firebase Genkit", "Google Gemma 4 12B", "Gemini 1.5 Pro", "Neo4j GraphRAG", "IfcOpenShell", "Python BAEL 91", "Imagen 3.0", "ControlNet"],
            github: "https://github.com/gervais-afk/archi-cam-ai"
        },
        'sovereign-bi': {
            badge: "Agentic Business Intelligence & Security",
            title: "Sovereign.BI Agentic 📊",
            subtitle: "Moteur autonome d'analyse de données d'entreprise permettant d’interroger des bases SQL complexes en langage naturel.",
            pipeline: [
                { num: "Étape 01", title: "NL Query & Guardrail", desc: "Interrogation utilisateur filtrée par des seuils de sécurité dynamiques." },
                { num: "Étape 02", title: "Orchestrateur TS", desc: "Cartographie du schéma PostgreSQL via Neo4j GraphRAG (N10S)." },
                { num: "Étape 03", title: "Génération & Audit SQL", desc: "Traduction SQL optimisée + audit SHAP Sentinel contre toute anomalie." },
                { num: "Étape 04", title: "Visualisation & Insights", desc: "Restitution graphique HTML/React & synthèses exécutives Markdown." }
            ],
            impacts: [
                "Interrogation instantanée de bases de données volumineuses sans compétences SQL requises.",
                "Système de guardrails dynamiques évitant toute injection SQL ou altération de données.",
                "Audits SHAP intégrés pour expliquer en toute transparence le raisonnement des agents."
            ],
            techs: ["React", "FastAPI", "TypeScript Orchestrator", "PostgreSQL", "Neo4j GraphRAG", "Gemini AI", "Docker", "SHAP Auditor"],
            github: "https://github.com/gervais-afk/sovereign-bi-agentic"
        },
        'dataset-automator': {
            badge: "Plateforme MLOps Agentique & Usine d'Ingénierie de Datasets",
            title: "Dataset Automator ⚙️",
            subtitle: "Usine MLOps autonome d'ingestion, d'audit de qualité, de gouvernance sémantique (Neo4j) et d'entraînement automatisé.",
            pipeline: [
                { num: "Étape 01", title: "Profilage & Data Drift (KS/PSI)", desc: "Analyse Python, détection des types réels et surveillance continue des dérives de distribution (KS-test / PSI > 30%)." },
                { num: "Étape 02", title: "GraphRAG & Curation Sémantique", desc: "Modélisation dans le Knowledge Graph Neo4j, mappings métiers et auto-correction (Self-Healing) des échecs passés." },
                { num: "Étape 03", title: "Genkit & MLflow Tracking", desc: "Orchestration TypeScript avec Gemma-4 12B local (LM Studio), validation HITL et tracking complet sur MLflow UI." },
                { num: "Étape 04", title: "Streamlit Dashboard & Notebook Factory", desc: "Exploration du graphe 2D/3D, audits SHAP et génération automatique de Notebooks Jupyter MLOps (.ipynb) certifiés." }
            ],
            impacts: [
                "Automatisation complète du cycle de préparation de données et d'entraînement MLOps.",
                "Détection précoce des dérives de modèles (Data Drift) avec génération automatique d'alertes dans Neo4j.",
                "Exports instantanés de Notebooks Jupyter documentés et d'interfaces de suivi MLflow / Genkit."
            ],
            techs: ["TypeScript Genkit", "Neo4j GraphRAG", "MLflow", "Google Gemma 4 (LM Studio)", "Streamlit", "Firebase Firestore", "Python MLOps"],
            github: "https://github.com/gervais-afk/dataset-automator"
        },
        'asu-audit-ready': {
            badge: "Conformité Sûreté Aéroportuaire CCAA & Reporting",
            title: "ASU-Audit-Ready 🛡️",
            subtitle: "Tableau de Bord de Conformité Sûreté, Génération de Rapports d'Audit V4 & Simulateur d'Audition pour Agents CCAA.",
            pipeline: [
                { num: "Étape 01", title: "Tableau de Bord & KPIs Sûreté", desc: "Suivi mensuel des 7 objectifs critiques d'inspection aéronautique (Taux global, PIF, conformité ZSAR)." },
                { num: "Étape 02", title: "Génération de Rapports Word V4", desc: "Compilation automatique des rapports d'activités mensuels (.docx) selon le Modèle V4 CCAA avec directives et remédiations." },
                { num: "Étape 03", title: "Vérificateur de Livrables Audit", desc: "Contrôle automatisé de l'exhaustivité et de la conformité des pièces requises pour les audits officiels." },
                { num: "Étape 04", title: "Simulateur d'Audition AVSEC", desc: "Entraînement interactif et simulation d'audition d'inspection pour la préparation des agents de sûreté." }
            ],
            impacts: [
                "Digitalisation complète et gain de temps massif dans la rédaction des rapports de sûreté mensuels.",
                "Garantie de conformité à 100% avec les exigences réglementaires de la CCAA (Autorité Aéronautique du Cameroun).",
                "Entraînement continu des agents de sûreté aéroportuaire aux scénarios d'inspection d'audit."
            ],
            techs: ["Streamlit", "Python Engine", "python-docx (Modèle V4)", "ChartBuilder", "AuditChecker", "AuditSimulator", "Matplotlib / Seaborn"],
            github: "https://github.com/gervais-afk/ASU-Audit-Ready"
        },
        'vigie-sahel': {
            badge: "IA Impact Climat & Santé Publique",
            title: "VigieSahel 🌾",
            subtitle: "Système prédictif pour l'optimisation agricole et l'anticipation des risques sanitaires dans la région du Sahel.",
            pipeline: [
                { num: "Étape 01", title: "Collecte Multi-sources", desc: "Ingestion des données météo, satellite & capteurs de qualité de l'air PM2.5." },
                { num: "Étape 02", title: "Modélisation ML", desc: "Algorithmes de prédiction des dates optimales de semis et propagation épidémique." },
                { num: "Étape 03", title: "Stockage Supabase", desc: "Base de données cloud synchronisée en temps réel." },
                { num: "Étape 04", title: "PWA Offline-First", desc: "Interface Streamlit PWA accessible même avec faible connectivité internet." }
            ],
            impacts: [
                "Optimisation des rendements de la culture du coton face aux variations pluviométriques.",
                "Système d'alerte précoce pour les pics de pollution (PM2.5) et les risques de méningite.",
                "Solution conçue sur-mesure pour les coopératives et décideurs du Sahel."
            ],
            techs: ["Streamlit", "Python ML", "Supabase", "Scikit-Learn", "Pandas", "PWA"],
            github: "https://github.com/gervais-afk/VigieSahel"
        }
    };

    const modalOverlay = document.getElementById('projectModal');
    const modalCloseBtn = document.getElementById('modalClose');
    const modalBadge = document.getElementById('modalBadge');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalContent = document.getElementById('modalContent');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');

    function openModal(projectId) {
        const project = projectsData[projectId];
        if (!project) return;

        modalBadge.textContent = project.badge;
        modalTitle.textContent = project.title;
        modalSubtitle.textContent = project.subtitle;

        // Build Pipeline Steps HTML
        const pipelineHTML = project.pipeline.map(step => `
            <div class="pipeline-step">
                <span class="pipeline-step-num">${step.num}</span>
                <h5 class="pipeline-step-title">${step.title}</h5>
                <p class="pipeline-step-desc">${step.desc}</p>
            </div>
        `).join('');

        // Build Impacts List HTML
        const impactsHTML = project.impacts.map(imp => `
            <li><i class="fa-solid fa-circle-check"></i> <span>${imp}</span></li>
        `).join('');

        // Build Tech Pills HTML
        const techsHTML = project.techs.map(tech => `
            <span>${tech}</span>
        `).join('');

        modalContent.innerHTML = `
            <div class="modal-grid">
                <div class="arch-section">
                    <h4><i class="fa-solid fa-diagram-project"></i> Architecture System &amp; Flux de Données</h4>
                    <div class="pipeline-flow">
                        ${pipelineHTML}
                    </div>
                </div>

                <div class="arch-section">
                    <h4><i class="fa-solid fa-bullseye"></i> Valeur Ajoutée &amp; Impacts Clés</h4>
                    <ul class="impact-list">
                        ${impactsHTML}
                    </ul>
                </div>

                <div class="arch-section">
                    <h4><i class="fa-solid fa-code"></i> Technologies &amp; Frameworks</h4>
                    <div class="tech-pills">
                        ${techsHTML}
                    </div>
                </div>

                <div class="project-links-row">
                    <a href="${project.github}" target="_blank" class="btn btn-primary w-100">
                        Accéder au Dépôt GitHub <i class="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        `;

        modalOverlay.classList.add('active');
        modalOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project');
            openModal(projectId);
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});

