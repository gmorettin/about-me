export interface Question {
  id: number;
  title: string;
  category: "Behavioral" | "Technical" | "Scenario";
  difficulty: "Easy" | "Medium" | "Hard";
  question: string;
  shortDescription: string;
  fullAnswer: string;
  keyPoints: string[];
  starMethod?: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  caseStudies?: string[];
  relatedTopics?: string[];
}

export const questionsData: Question[] = [
  // BEHAVIORAL QUESTIONS
  {
    id: 1,
    title: "Superare la resistenza al cambiamento",
    category: "Behavioral",
    difficulty: "Medium",
    question: "Descrivi una situazione in cui hai dovuto superare una forte resistenza al cambiamento da parte degli utenti nell'adozione di una nuova tecnologia.",
    shortDescription: "Racconta come hai gestito l'adozione di una nuova tecnologia superando la resistenza degli utenti.",
    fullAnswer: `Presso il mio precedente ruolo di Technical Account Manager in una società di consulenza IT con 500 dipendenti, abbiamo implementato Microsoft Teams come piattaforma di collaborazione centrale. Tuttavia, l'organizzazione era fortemente radicata nell'uso di email e di una vecchia piattaforma di instant messaging. Il tasso di adozione iniziale era inferiore al 20% dopo due mesi.

Ho intrapreso i seguenti passi:

1. **Diagnosi della Resistenza:** Ho condotto interviste con 30 dipendenti rappresentativi da diversi dipartimenti per capire le loro preoccupazioni specifiche. Ho scoperto che la resistenza era dovuta a tre fattori: (a) mancanza di comprensione dei vantaggi, (b) paura di perdere la "storia" delle conversazioni via email, e (c) mancanza di formazione pratica.

2. **Coinvolgimento del Leadership:** Ho presentato ai C-level una business case chiara, mostrando come Teams avrebbe ridotto il tempo di ricerca delle informazioni del 40% (basato su case studies di Forrester) e avrebbe migliorato la collaborazione tra team geograficamente distribuiti.

3. **Programma di Adozione Strutturato:**
   - Fase 1 (Settimana 1-2): Lancio con un evento virtuale in cui i dirigenti hanno condiviso la loro visione
   - Fase 2 (Settimana 2-4): Sessioni di formazione "hands-on" in piccoli gruppi per ogni dipartimento
   - Fase 3 (Settimana 4-8): Creazione di "Teams Champions" - dipendenti entusiasti da ogni dipartimento
   - Fase 4 (Settimana 8-12): Campagna di engagement continua con "Tips of the Week"

4. **Gestione della Transizione:** Ho negoziato un periodo di "doppia modalità" di 4 settimane in cui sia email che Teams erano attivi.

5. **Feedback Loop:** Ho monitorato continuamente il sentiment attraverso sondaggi settimanali e ho adattato il programma in base al feedback.

**Risultati:**
- Adozione raggiunta: 78% entro tre mesi (superando il target del 70%)
- Tempo medio di ricerca delle informazioni ridotto del 42%
- Soddisfazione degli utenti: 4.2/5
- Riduzione del volume di email del 55%`,
    keyPoints: [
      "Diagnosi delle cause di resistenza attraverso interviste dirette",
      "Coinvolgimento del leadership come sponsor del cambiamento",
      "Programma di adozione strutturato in 4 fasi",
      "Periodo di transizione con doppia modalità",
      "Feedback loop continuo e adattamento",
      "Risultato: 78% di adozione in 3 mesi"
    ],
    starMethod: {
      situation: "Implementazione di Microsoft Teams in un'organizzazione di 500 dipendenti con forte resistenza al cambiamento",
      task: "Superare la resistenza e raggiungere il 70% di adozione entro 3 mesi",
      action: "Diagnosi della resistenza, coinvolgimento del leadership, programma di adozione strutturato, periodo di transizione, feedback loop continuo",
      result: "78% di adozione, 42% riduzione del tempo di ricerca, 4.2/5 soddisfazione utenti"
    },
    caseStudies: ["Microsoft Teams Adoption", "Change Management Framework"],
    relatedTopics: ["Change Management", "User Adoption", "Leadership", "Communication"]
  },

  {
    id: 2,
    title: "Giustificare l'investimento in Copilot a un CxO",
    category: "Behavioral",
    difficulty: "Hard",
    question: "Raccontami di una volta in cui hai dovuto giustificare l'investimento in una soluzione cloud (es. M365 Copilot) a un CxO. Qual è stato il tuo approccio?",
    shortDescription: "Spiega come hai convinto un CxO a investire in una soluzione cloud con una business case solida.",
    fullAnswer: `Stavo lavorando come Solutions Architect per un cliente nel settore dei servizi finanziari con circa 2000 dipendenti. Il CFO era scettico riguardo all'implementazione di Microsoft 365 Copilot, considerandola una spesa aggiuntiva non necessaria.

Ho sviluppato una business case rigorosa seguendo questi passaggi:

1. **Analisi dei Costi Attuali:**
   - Redazione di email e documenti: 3.5 ore/settimana per dipendente
   - Riunioni e sintesi: 2 ore/settimana per dipendente
   - Ricerca di informazioni in documenti: 1.5 ore/settimana per dipendente
   - Totale: 7 ore/settimana per dipendente = 364 ore/anno

2. **Benchmark Esterno:** Ho utilizzato il Forrester Total Economic Impact Study che mostra:
   - ROI del 132-353% per SMB su 3 anni
   - Riduzione dei costi operativi del 20%
   - Aumento della produttività del 1-10% per dipendente

3. **Modello Finanziario Conservativo:**
   - Risparmio di tempo: Assumendo che Copilot riduca il 30% del tempo speso in attività ripetitive = 2.1 ore/settimana
   - Valore monetario: 2.1 ore × $75/ora × 50 settimane × 500 dipendenti = $3,937,500 in valore risparmiato
   - Costo dell'investimento: $250,000 (licenze) + $50,000 (training) = $300,000
   - ROI netto: 1,212% nel primo anno

4. **Scenari Alternativi:**
   - Scenario Conservativo (20% riduzione): ROI 524%
   - Scenario Base (30% riduzione): ROI 1,212%
   - Scenario Aggressivo (40% riduzione): ROI 1,900%

5. **Metriche di Successo:** Ho definito KPI chiari:
   - Tasso di adozione (target: 70% entro 3 mesi)
   - Tempo medio per completare una proposta (baseline: 8 ore, target: 5 ore)
   - Soddisfazione degli utenti (target: 4/5)

6. **Gestione del Rischio:** Ho affrontato le preoccupazioni sulla sicurezza:
   - Copilot opera all'interno della Microsoft Cloud con crittografia end-to-end
   - I dati non vengono utilizzati per addestrare i modelli
   - Conformità con GDPR, HIPAA e altri standard

**Risultati:**
- Il CFO ha approvato l'investimento
- Implementazione completata in 4 mesi
- Adozione raggiunta: 72%
- Valore di tempo risparmiato nel primo anno: $3.2 milioni (ROI 967%)`,
    keyPoints: [
      "Analisi dettagliata dei costi attuali",
      "Utilizzo di benchmark esterni (Forrester)",
      "Modello finanziario conservativo con scenari alternativi",
      "Definizione di KPI chiari",
      "Gestione proattiva dei rischi di sicurezza",
      "Risultato: Approvazione e ROI 967%"
    ],
    starMethod: {
      situation: "CFO scettico riguardo all'investimento in M365 Copilot per 500 dipendenti",
      task: "Giustificare un investimento di $300,000 con una business case solida",
      action: "Analisi dei costi, benchmark esterno, modello finanziario conservativo, scenari alternativi, KPI chiari, gestione del rischio",
      result: "Approvazione dell'investimento, ROI 967%, adozione 72%"
    },
    caseStudies: ["Copilot ROI Analysis", "Financial Services Transformation"],
    relatedTopics: ["Business Value", "ROI Calculation", "Financial Justification", "Executive Communication"]
  },

  {
    id: 3,
    title: "Gestire difficoltà di comunicazione",
    category: "Behavioral",
    difficulty: "Medium",
    question: "Descrivi una difficoltà di comunicazione che hai incontrato con un cliente o un collega. Come l'hai gestita?",
    shortDescription: "Racconta come hai risolto un conflitto di comunicazione con un cliente o collega.",
    fullAnswer: `Stavo lavorando su un progetto di implementazione di SharePoint Online per un cliente nel settore della sanità. Il progetto era in ritardo di due settimane, e il CIO del cliente era sempre più frustrato. Durante una riunione di status, il CIO ha interrotto la mia presentazione dicendo: "Non capisco perché stiamo pagando Microsoft per una soluzione che non funziona. Stiamo considerando di abbandonare il progetto."

Ho intrapreso i seguenti passi:

1. **Ascolto Attivo:** Invece di rispondere immediatamente, ho detto: "Capisco la tua frustrazione. Prima di continuare, vorrei comprendere meglio le tue preoccupazioni specifiche. Quali sono i tre problemi principali che stai affrontando?"

2. **Diagnosi Profonda:** Ho scoperto che le vere preoccupazioni non erano il ritardo in sé, ma:
   - Mancanza di comunicazione chiara sullo stato del progetto
   - Incertezza su come SharePoint avrebbe migliorato il flusso di lavoro attuale
   - Paura che i dipendenti non avrebbero adottato la nuova soluzione

3. **Empatia e Validazione:** Ho detto: "Queste sono preoccupazioni completamente valide. Se fossi nei tuoi panni, avrei le stesse preoccupazioni."

4. **Piano d'Azione Correttivo:**
   - Comunicazione: Riunioni settimanali di 30 minuti (invece di mensili)
   - Valore Commerciale: Presentazione specifica per il settore sanitario mostrando ROI
   - Adozione: Programma di change management strutturato

5. **Impegno Personale:** "Se non siamo in grado di consegnare entro le prossime due settimane, mi assumerò la responsabilità di estendere il supporto post-implementazione gratuitamente per un mese."

**Risultati:**
- Il CIO ha deciso di continuare con il progetto
- Progetto completato solo 3 giorni in ritardo
- Adozione raggiunta: 78%
- Soddisfazione del cliente: 4.6/5`,
    keyPoints: [
      "Ascolto attivo senza essere difensivo",
      "Diagnosi profonda delle vere preoccupazioni",
      "Empatia e validazione dei sentimenti",
      "Piano d'azione correttivo concreto",
      "Impegno personale e accountability",
      "Risultato: Continuazione del progetto, 78% adozione"
    ],
    starMethod: {
      situation: "CIO frustrato per il ritardo del progetto SharePoint, considerando di abbandonarlo",
      task: "Gestire il conflitto e salvare il progetto",
      action: "Ascolto attivo, diagnosi profonda, empatia, piano d'azione correttivo, impegno personale",
      result: "Progetto continuato, completato 3 giorni in ritardo, 78% adozione, 4.6/5 soddisfazione"
    },
    caseStudies: ["Conflict Resolution in Healthcare", "Project Recovery"],
    relatedTopics: ["Communication", "Conflict Resolution", "Emotional Intelligence", "Problem Solving"]
  },

  {
    id: 4,
    title: "Influenzare decisioni architetturali",
    category: "Behavioral",
    difficulty: "Hard",
    question: "Descrivi una situazione in cui hai dovuto influenzare un team tecnico o un cliente a seguire una direzione architetturale che non era la loro preferita.",
    shortDescription: "Spiega come hai convinto un team a scegliere una soluzione architetturale basata su fatti e dati.",
    fullAnswer: `Stavo lavorando come Solutions Architect per un cliente nel settore della produzione con 3000 dipendenti. Il team IT aveva deciso di implementare una soluzione di collaboration basata su Rocket.Chat per ridurre i costi di licenza. Tuttavia, analizzando i loro requisiti, ho identificato che questa scelta avrebbe creato significativi problemi di sicurezza, conformità e scalabilità.

Ho intrapreso i seguenti passi:

1. **Analisi Comparativa Rigorosa:** Ho creato una tabella comparativa dettagliata:
   - Sicurezza: Rocket.Chat non aveva crittografia end-to-end; Teams aveva crittografia completa
   - Conformità: Rocket.Chat non supportava GDPR; Teams supportava tutti gli standard
   - Scalabilità: Rocket.Chat richiedeva infrastruttura on-premise; Teams era cloud-native
   - Integrazione: Rocket.Chat aveva integrazioni limitate; Teams si integrava nativamente con Office 365

2. **Costo Totale di Proprietà (TCO) su 5 anni:**
   - Rocket.Chat: $500,000 (licenze) + $800,000 (infrastruttura) + $600,000 (manutenzione) = $1,900,000
   - Teams: $400,000 (licenze) + $100,000 (implementazione) + $200,000 (supporto) = $700,000
   - Differenza: Teams era più economico di $1,200,000

3. **Presentazione dei Rischi Specifici:**
   - Rischio di Sicurezza: La loro azienda era stata sottoposta a audit di conformità. Non avrebbero potuto superare l'audit con Rocket.Chat
   - Rischio di Scalabilità: Avevano piani di espansione a 5000 dipendenti. Rocket.Chat avrebbe richiesto significativi investimenti infrastrutturali
   - Rischio di Talent: Gli ingegneri esperti di Rocket.Chat erano difficili da trovare

4. **Presentazione dei Vantaggi di Teams:**
   - Innovazione: Teams si integrava con Copilot
   - Produttività: Funzionalità avanzate come riunioni intelligenti
   - Collaborazione Globale: Avevano uffici in 5 paesi

5. **Negoziazione del Costo:** Ho negoziato con Microsoft per ottenere uno sconto del 25% sulle licenze Teams.

6. **Proposta di Compromesso:** Ho proposto un approccio ibrido:
   - Teams come soluzione principale
   - Rocket.Chat per un piccolo gruppo di "power users"

**Risultati:**
- Il CIO ha deciso di adottare Teams
- Costo totale su 5 anni: $700,000 (vs. $1,900,000 con Rocket.Chat)
- Adozione raggiunta: 85%
- Conformità: Hanno superato l'audit senza problemi`,
    keyPoints: [
      "Analisi comparativa rigorosa con dati concreti",
      "Calcolo del TCO su 5 anni",
      "Presentazione dei rischi specifici per il loro settore",
      "Presentazione dei vantaggi strategici",
      "Negoziazione del costo",
      "Proposta di compromesso",
      "Risultato: Adozione di Teams, 85% adozione"
    ],
    starMethod: {
      situation: "Team IT ha scelto Rocket.Chat per ridurre i costi, ma questa scelta crea rischi di sicurezza e conformità",
      task: "Convincere il team a scegliere Teams invece di Rocket.Chat",
      action: "Analisi comparativa rigorosa, calcolo TCO, presentazione dei rischi, vantaggi strategici, negoziazione, compromesso",
      result: "Adozione di Teams, TCO ridotto di $1.2M, 85% adozione, conformità garantita"
    },
    caseStudies: ["Architecture Decision Making", "Cost Optimization"],
    relatedTopics: ["Architecture", "Decision Making", "Influence", "Technical Leadership"]
  },

  {
    id: 5,
    title: "Growth Mindset e apprendimento continuo",
    category: "Behavioral",
    difficulty: "Medium",
    question: "Come hai dimostrato un Growth Mindset e una capacità di apprendimento continuo?",
    shortDescription: "Racconta come hai acquisito nuove competenze e le hai applicate nel tuo lavoro.",
    fullAnswer: `Nel 2023, quando è stato annunciato che Copilot sarebbe diventato il focus strategico di Microsoft, ho realizzato che il mio background tecnico (principalmente Azure e Office 365) non era sufficiente per rimanere rilevante. Copilot era una tecnologia completamente nuova.

Ho intrapreso un programma di apprendimento strutturato e autodidatto:

1. **Formazione Formale:**
   - Ho completato il corso "Microsoft 365 Copilot for Developers" su Microsoft Learn (40 ore)
   - Ho completato il corso "Prompt Engineering for Copilot" su Coursera (30 ore)
   - Ho ottenuto la certificazione "Microsoft 365 Certified: Copilot Specialist" (superando l'esame con 92%)

2. **Apprendimento Pratico:**
   - Ho creato 5 Copilot Agents personalizzati usando Copilot Studio per diversi casi d'uso
   - Ho sperimentato con il Grounding di Copilot
   - Ho costruito un prototipo di Copilot per il mio team interno, che ha ridotto il tempo di risposta del 70%

3. **Condivisione della Conoscenza:**
   - Ho tenuto 12 sessioni di training interno per il mio team
   - Ho scritto 8 articoli tecnici su LinkedIn (50,000+ impressioni)
   - Ho creato una "Copilot Knowledge Base" interna con 50+ risorse

4. **Networking e Mentorship:**
   - Ho partecipato a 6 webinar di Microsoft su Copilot
   - Ho contattato 3 esperti di Copilot su LinkedIn e ho chiesto loro di essere miei mentori
   - Ho unito il "Microsoft Copilot Champions" community

5. **Applicazione Pratica con i Clienti:**
   - Ho guidato 5 clienti nella loro Copilot adoption journey
   - Ho documentato i learnings da ogni implementazione

**Risultati:**
- Gennaio 2023: Nessuna conoscenza di Copilot
- Giugno 2023: Certificazione Copilot Specialist
- Dicembre 2023: 5 implementazioni di Copilot completate
- Novembre 2024: Considerato un "Copilot Expert" nel mio team`,
    keyPoints: [
      "Formazione formale (3 corsi, 1 certificazione)",
      "Apprendimento pratico (5 Copilot Agents, prototipi)",
      "Condivisione della conoscenza (training, articoli, knowledge base)",
      "Networking e mentorship",
      "Applicazione pratica con i clienti",
      "Risultato: Diventato Copilot Expert in 12 mesi"
    ],
    starMethod: {
      situation: "Copilot diventa il focus strategico di Microsoft, ma ho poca esperienza con questa tecnologia",
      task: "Acquisire competenze profonde su Copilot in meno di 12 mesi",
      action: "Formazione formale, apprendimento pratico, condivisione della conoscenza, networking, applicazione con clienti",
      result: "Certificazione, 5 implementazioni completate, riconosciuto come Copilot Expert"
    },
    caseStudies: ["Copilot Adoption", "Skill Development"],
    relatedTopics: ["Learning", "Growth Mindset", "Professional Development", "Innovation"]
  },

  // TECHNICAL QUESTIONS
  {
    id: 6,
    title: "Grounding in M365 Copilot",
    category: "Technical",
    difficulty: "Medium",
    question: "Spiega il concetto di 'Grounding' in M365 Copilot. Come influisce sulla qualità delle risposte e come lo ottimizzi per un cliente?",
    shortDescription: "Spiega come il Grounding migliora la qualità delle risposte di Copilot e come ottimizzarlo.",
    fullAnswer: `Il Grounding è il processo mediante il quale Copilot accede e utilizza i dati aziendali specifici del cliente per fornire risposte più accurate, pertinenti e personalizzate.

**Come Funziona il Grounding:**

1. **Microsoft Graph Integration:** Copilot utilizza Microsoft Graph per accedere ai dati dell'utente in SharePoint, OneDrive, Outlook, Teams, Exchange.

2. **Semantic Search:** Quando un utente pone una domanda:
   - Il sistema analizza la domanda per comprendere l'intento
   - Esegue una ricerca semantica (non solo per parole chiave) nei dati dell'utente
   - Recupera i documenti e le informazioni più rilevanti
   - Fornisce questi documenti come "contesto" al modello di linguaggio

3. **Permessi e Sicurezza:** Copilot rispetta i permessi dell'utente - se un utente non ha accesso a un documento, Copilot non lo utilizzerà.

**Impatto sulla Qualità:**
- Senza Grounding: Risposte generiche basate sul training data
- Con Grounding Ottimale: Risposte specifiche, pertinenti, attuali e con alta confidenza

**Come Ottimizzare il Grounding:**

1. **Audit dei Dati:**
   - Identificare quali dati sono critici per il Grounding
   - Valutare la qualità dei dati (sono aggiornati? ben organizzati?)
   - Identificare i dati che NON dovrebbero essere utilizzati

2. **Organizzazione dei Dati:**
   - Assicurarsi che i dati siano ben organizzati in SharePoint
   - Utilizzare le proprietà gestite per categorizzare i dati
   - Creare una tassonomia chiara

3. **Indicizzazione:**
   - Assicurarsi che tutti i dati importanti siano indicizzati da Microsoft Search
   - Testare la ricerca per assicurarsi che i documenti importanti siano recuperabili

4. **Configurazione dei Permessi:**
   - Assicurarsi che i permessi siano configurati correttamente
   - Testare che Copilot rispetti i permessi

5. **Creazione di Contenuti Strutturati:**
   - Incoraggiare documenti ben strutturati con titoli, sottotitoli e metadati
   - Utilizzare i template di SharePoint per garantire coerenza
   - Creare una "Single Source of Truth" per le informazioni critiche

6. **Monitoraggio e Miglioramento Continuo:**
   - Utilizzare Copilot Analytics per monitorare quali domande gli utenti fanno
   - Identificare i gap nei dati
   - Aggiornare continuamente i dati per mantenerli freschi`,
    keyPoints: [
      "Grounding utilizza Microsoft Graph per accedere ai dati aziendali",
      "Semantic search recupera documenti rilevanti",
      "Copilot rispetta i permessi degli utenti",
      "Grounding migliora accuratezza, pertinenza e freschezza dei dati",
      "Ottimizzazione richiede audit, organizzazione, indicizzazione, permessi, contenuti strutturati",
      "Monitoraggio continuo e miglioramento"
    ],
    caseStudies: ["Grounding Optimization", "Data Architecture"],
    relatedTopics: ["Copilot", "Grounding", "Data Architecture", "Search Optimization"]
  },

  {
    id: 7,
    title: "Architettura sicura e scalabile",
    category: "Technical",
    difficulty: "Hard",
    question: "Progetta una soluzione per un'azienda che vuole implementare M365 Copilot in modo sicuro e scalabile. Quali sono le tue considerazioni su Security, Compliance e Governance?",
    shortDescription: "Progetta un'architettura completa per M365 Copilot con focus su sicurezza, conformità e governance.",
    fullAnswer: `Quando progetto una soluzione M365 Copilot sicura e scalabile, seguo un approccio strutturato che affronta tre pilastri: Sicurezza, Conformità e Governance.

**SICUREZZA**

1. **Protezione dei Dati:**
   - Crittografia in Transito: TLS 1.2 o superiore
   - Crittografia a Riposo: Crittografia del servizio Microsoft
   - Crittografia End-to-End: Implementare a livello di applicazione con Azure Key Vault

2. **Controllo dell'Accesso:**
   - Azure AD: Autenticazione multi-fattore (MFA) per tutti gli utenti
   - Conditional Access: Policy per limitare l'accesso in base a posizione, dispositivo, rischio
   - Least Privilege Access: Utenti hanno accesso solo ai dati necessari

3. **Protezione dalle Minacce:**
   - Microsoft Defender for Cloud: Monitorare minacce e vulnerabilità
   - Data Loss Prevention (DLP): Prevenire la perdita di dati sensibili
   - Threat Intelligence: Monitorare continuamente le minacce

**CONFORMITÀ**

1. **Standard di Conformità:**
   - GDPR (General Data Protection Regulation)
   - HIPAA (Health Insurance Portability and Accountability Act)
   - SOC 2, ISO 27001, PCI DSS

2. **Governance dei Dati:**
   - Data Residency: I dati rimangono nella giurisdizione appropriata
   - Data Retention: Policy per conservare i dati per il tempo appropriato
   - Data Classification: Classificare i dati per livello di sensibilità

3. **Audit e Conformità:**
   - Audit Logging: Tracciare tutte le azioni degli utenti
   - eDiscovery: Supportare indagini legali
   - Compliance Manager: Monitorare lo stato di conformità

**GOVERNANCE**

1. **Governance Organizzativa:**
   - Comitato di Governance: Rappresentanti di IT, Security, Legal, HR, Business
   - Policy e Procedure: Policy chiare per l'uso di Copilot
   - Training e Awareness: Training ai dipendenti

2. **Governance Tecnica:**
   - Amministrazione Centralizzata: Utilizzare Microsoft 365 Admin Center
   - Policy di Copilot: Controllare chi può usare Copilot e quali dati possono accedere
   - Monitoraggio e Reporting: Tracciare l'uso di Copilot

3. **Governance dei Dati:**
   - Data Stewardship: Assegnare un "data steward" per ogni categoria di dati
   - Master Data Management: Garantire che i dati critici rimangono coerenti
   - Data Lineage: Tracciare l'origine e l'utilizzo dei dati

**Piano di Implementazione:**

| Fase | Durata | Attività Chiave |
| --- | --- | --- |
| Pianificazione | 2-3 settimane | Audit dei dati, valutazione della sicurezza, sviluppo della strategia |
| Preparazione | 3-4 settimane | Configurazione di Azure AD, MFA, DLP |
| Pilota | 4-6 settimane | Implementazione per 50-100 utenti, monitoraggio e feedback |
| Rollout | 6-8 settimane | Espansione a tutti gli utenti, training, supporto |
| Ottimizzazione | Continua | Monitoraggio, miglioramento continuo, aggiornamento delle policy |`,
    keyPoints: [
      "Tre pilastri: Sicurezza, Conformità, Governance",
      "Crittografia in transito e a riposo",
      "MFA e Conditional Access per controllo dell'accesso",
      "Conformità con GDPR, HIPAA, SOC 2, ISO 27001, PCI DSS",
      "Audit logging e eDiscovery",
      "Comitato di Governance e policy chiare",
      "Piano di implementazione in 5 fasi"
    ],
    caseStudies: ["Secure Copilot Deployment", "Compliance Architecture"],
    relatedTopics: ["Security", "Compliance", "Governance", "Architecture", "Risk Management"]
  },

  {
    id: 8,
    title: "Integrazione CRM con Copilot Studio",
    category: "Technical",
    difficulty: "Hard",
    question: "Un cliente vuole che Copilot si integri con il suo sistema CRM legacy. Come useresti Copilot Studio per creare un Agente che soddisfi questa esigenza?",
    shortDescription: "Spiega come creare un Copilot Agent in Copilot Studio che si integra con un CRM legacy.",
    fullAnswer: `Questo è uno scenario molto comune. Molti clienti hanno sistemi CRM legacy e vogliono sfruttare Copilot per migliorare la produttività dei loro team di vendita.

**Fase 1: Analisi dei Requisiti**

Prima di iniziare a costruire l'Agente, devo comprendere:

1. **Quali dati del CRM sono importanti?**
   - Informazioni sui clienti (nome, email, telefono, indirizzo)
   - Cronologia delle transazioni (ordini, pagamenti, resi)
   - Interazioni con il cliente (email, telefonate, riunioni)
   - Pipeline di vendita (opportunità, stage, probabilità)

2. **Quali azioni vuole che Copilot possa eseguire?**
   - Recuperare informazioni sui clienti
   - Aggiornare i record dei clienti
   - Creare nuove opportunità di vendita
   - Registrare le interazioni con i clienti
   - Generare proposte di vendita

3. **Quali sono i vincoli di sicurezza e conformità?**
   - Quali utenti possono accedere a quali dati?
   - Come vengono gestiti i dati sensibili?
   - Quali sono i requisiti di audit e logging?

**Fase 2: Architettura dell'Agente**

L'Agente avrà i seguenti componenti:
1. Analisi della Domanda (NLU)
2. Routing a Topic Appropriato
3. Estrazione di Entità
4. Chiamata API del CRM
5. Formattazione della Risposta
6. Presentazione all'Utente

**Fase 3: Implementazione in Copilot Studio**

**Step 1: Creare un Nuovo Agente**
1. Aprire Copilot Studio
2. Creare un nuovo Agente denominato "CRM Assistant"
3. Configurare il "System Message"

**Step 2: Creare Topics**

**Topic 1: "Ricerca Cliente"**
- Trigger: L'utente chiede informazioni su un cliente
- Flusso: Riconoscimento intento → Estrazione entità → Validazione → Chiamata API → Formattazione → Presentazione

**Topic 2: "Visualizza Opportunità Aperte"**
- Trigger: L'utente chiede di visualizzare le opportunità aperte
- Flusso: Estrazione entità → Chiamata API → Filtraggio → Ordinamento → Presentazione

**Topic 3: "Crea Nuova Opportunità"**
- Trigger: L'utente vuole creare una nuova opportunità
- Flusso: Estrazione entità → Validazione → Conferma → Chiamata API → Presentazione

**Step 3: Creare Connettori per il CRM**

1. **Connettore API REST (Generico):**
   - Configurare l'endpoint API del CRM
   - Definire l'autenticazione (API Key, OAuth, Basic Auth)
   - Creare azioni per le operazioni CRUD

2. **Connettore Power Automate:**
   - Se il CRM non ha un'API REST moderna, creare un flusso Power Automate

3. **Connettore Personalizzato:**
   - Se il CRM ha un'API proprietaria, creare un connettore personalizzato

**Step 4: Implementare la Gestione degli Errori**

- Errore di Autenticazione: Richiedere una nuova autenticazione
- Cliente Non Trovato: Suggerire di provare con un nome diverso
- Errore di Rete: Suggerire di riprovare

**Step 5: Implementare la Sicurezza**

- Controllo dell'Accesso: Solo venditori autorizzati possono accedere
- Audit Logging: Registrare tutte le azioni
- Mascheramento dei Dati Sensibili: Nascondere numeri di carta di credito, ecc.

**Fase 4: Testing e Deployment**

1. **Testing Funzionale:** Testare ogni Topic con diversi input
2. **Testing di Sicurezza:** Verificare che solo utenti autorizzati possono accedere
3. **Deployment:** Pubblicare in staging, test con utenti, pubblicare in produzione

**Fase 5: Monitoraggio e Miglioramento**

1. **Monitoraggio dell'Utilizzo:** Tracciare quanti utenti usano l'Agente
2. **Raccolta di Feedback:** Chiedere agli utenti di valutare la qualità
3. **Miglioramento Continuo:** Aggiungere nuovi Topics, migliorare la qualità`,
    keyPoints: [
      "Analisi dettagliata dei requisiti e dei dati del CRM",
      "Architettura dell'Agente con 6 componenti chiave",
      "Creazione di 3 Topics principali (Ricerca, Visualizza, Crea)",
      "Connettori API REST, Power Automate, o personalizzati",
      "Gestione degli errori e della sicurezza",
      "Testing funzionale e di sicurezza",
      "Monitoraggio continuo e miglioramento"
    ],
    caseStudies: ["CRM Integration", "Copilot Studio Development"],
    relatedTopics: ["Copilot Studio", "Integration", "API", "Agents", "CRM"]
  },

  // SCENARIO QUESTIONS
  {
    id: 9,
    title: "Troubleshooting accuratezza di Copilot",
    category: "Scenario",
    difficulty: "Medium",
    question: "Un cliente si lamenta che Copilot non sta fornendo risposte accurate. Quali sono i primi tre passaggi che faresti per diagnosticare e risolvere il problema?",
    shortDescription: "Spiega il tuo approccio sistematico al troubleshooting dell'accuratezza di Copilot.",
    fullAnswer: `Quando un cliente si lamenta che Copilot non fornisce risposte accurate, devo seguire un approccio sistematico di troubleshooting.

**Passaggio 1: Diagnostica del Grounding (30 minuti)**

Il 70% dei problemi di accuratezza sono dovuti a problemi di Grounding.

1. **Verifica che i dati siano disponibili:**
   - Chiedere al cliente: "Quali documenti dovrebbe usare Copilot per rispondere?"
   - Verificare che questi documenti siano memorizzati in SharePoint, OneDrive, ecc.
   - Se i dati non sono disponibili, questo è il problema

2. **Verifica che i dati siano indicizzati:**
   - Accedere a Microsoft Search e cercare manualmente i documenti
   - Se i documenti non appaiono nei risultati di ricerca, non sono indicizzati
   - Se non sono indicizzati, Copilot non può usarli

3. **Verifica che i permessi siano corretti:**
   - Verificare che l'utente ha accesso ai documenti
   - Se l'utente non ha accesso, Copilot non userà quei documenti (per motivi di sicurezza)

**Azioni Correttive:**
- Se i dati non sono disponibili: Aiutare il cliente a caricare i dati
- Se i dati non sono indicizzati: Forzare una reindicizzazione
- Se i permessi non sono corretti: Aggiornare i permessi

**Passaggio 2: Valutazione della Qualità dei Dati (30 minuti)**

Se il Grounding è corretto, il problema potrebbe essere la qualità dei dati.

1. **Verifica che i dati siano accurati:**
   - Chiedere: "I documenti contengono informazioni accurate?"
   - Se i documenti sono obsoleti o inesatti, Copilot fornirà risposte inesatte

2. **Verifica che i dati siano ben strutturati:**
   - I documenti hanno titoli, sottotitoli e una struttura logica?
   - Se mal strutturati, Copilot potrebbe avere difficoltà a estrarre le informazioni

3. **Verifica che i dati siano completi:**
   - I documenti contengono tutte le informazioni necessarie?
   - Se mancano informazioni importanti, Copilot non può fornire risposte complete

**Azioni Correttive:**
- Aiutare il cliente a aggiornare e pulire i dati
- Aiutare il cliente a ristrutturare i documenti
- Aiutare il cliente a identificare e aggiungere i dati mancanti

**Passaggio 3: Valutazione della Domanda e del Contesto (30 minuti)**

Se il Grounding e la qualità dei dati sono corretti, il problema potrebbe essere come l'utente sta formulando la domanda.

1. **Verifica che la domanda sia chiara:**
   - La domanda è specifica o vaga?
   - Se vaga, Copilot potrebbe fornire una risposta non specifica

2. **Verifica che il contesto sia sufficiente:**
   - Copilot ha abbastanza contesto per comprendere la domanda?

3. **Verifica che le aspettative siano realistiche:**
   - L'utente si aspetta che Copilot possa fare qualcosa che non è possibile?

**Azioni Correttive:**
- Fornire training agli utenti su come formulare domande chiare
- Fornire esempi di buone vs. cattive domande
- Impostare aspettative realistiche

**Approccio Globale:**

Dopo questi tre passaggi, avrò identificato il problema nella maggior parte dei casi. Se il problema persiste:
- Analizzare i log di Copilot per vedere quali dati sta effettivamente usando
- Contattare il team di supporto Microsoft se il problema è dovuto a un bug
- Implementare una soluzione alternativa (es. creare un Copilot Agent personalizzato)`,
    keyPoints: [
      "Passaggio 1: Diagnostica del Grounding (dati disponibili, indicizzati, permessi)",
      "Passaggio 2: Valutazione della qualità dei dati (accuratezza, struttura, completezza)",
      "Passaggio 3: Valutazione della domanda e del contesto (chiarezza, contesto, aspettative)",
      "Approccio sistematico e metodico",
      "Azioni correttive specifiche per ogni problema",
      "Escalation al team di supporto Microsoft se necessario"
    ],
    caseStudies: ["Copilot Troubleshooting", "Accuracy Improvement"],
    relatedTopics: ["Troubleshooting", "Grounding", "Data Quality", "Problem Solving"]
  }
];
