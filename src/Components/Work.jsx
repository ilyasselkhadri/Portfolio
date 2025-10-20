import React, { useState } from "react";
import "../index.css";
import Docter from "../Images/smartemsi.jpg";
import chat from '../Images/weather.png';
import AI from '../Images/where2.jpg';
import sys from '../Images/recruitement.jpg';
import rct from '../Images/imggg.jpg';

// Configuration des projets
const PROJECTS = [
  {
    id: 1,
    title: "Weather",
    image: chat,
    codeUrl: "https://gitlab.com/users/ELKHADRI-Ilyass/projects",
    demoUrl: "https://weather-demo-app.netlify.app/",
    category: "mobile",
    description: "Application mobile de météo interactive",
    demoDescription: `L'objectif de ce projet est de développer une application mobile permettant aux utilisateurs d'obtenir des informations météorologiques précises et en temps réel à partir d'une interface interactive et intuitive.

L'application offre deux modes principaux d'interaction :

🔹 Recherche manuelle — l'utilisateur peut saisir le nom d'une ville dans une barre de recherche pour obtenir les informations météo correspondantes.

🔹 Sélection sur carte interactive — l'utilisateur peut cliquer ou appuyer sur une carte (intégrée via une API comme Google Maps ou OpenStreetMap) pour sélectionner un lieu et afficher instantanément les données météorologiques de cette position géographique.

Fonctionnalités principales :
• Prévisions météo sur 7 jours
• Température en temps réel
• Vitesse et direction du vent
• Taux d'humidité
• Interface responsive et intuitive`,
    aosConfig: {
      animation: "flip-left",
      duration: 500
    }
  },
  {
    id: 2,
    title: "Where2",
    image: AI,
    codeUrl: "https://gitlab.com/users/ELKHADRI-Ilyass/contributed",
    demoUrl: "https://where2-travel-app.vercel.app/",
    category: "mobile",
    description: "Application mobile de planification de voyage journalière",
    demoDescription: `Développement d'une application mobile Android et iOS permettant de générer et sauvegarder des plannings de voyage à partir d'une API, selon des critères personnalisés.

Fonctionnalités principales :

🎯 Génération intelligente — création automatique d'itinéraires basés sur :
• Budget défini par l'utilisateur
• Lieu de départ et destination
• Dates de départ et de retour
• Préférences personnelles

🏨 Recommandations personnalisées — suggestions adaptées pour :
• Activités touristiques et culturelles
• Restaurants et cafés
• Hôtels et hébergements

🔄 API intégrée — connexion avec des services externes pour :
• Données touristiques actualisées
• Prix en temps réel
• Disponibilités des hébergements
• Conditions météorologiques

Technologies utilisées :
- React Native (cross-platform)
- API REST personnalisée
- Base de données cloud
- Système de recommandation IA
- Paiements intégrés`,
    aosConfig: {
      animation: "flip-left",
      duration: 1000
    }
  },
  {
    id: 3,
    title: "Emsi Smart Presence",
    image: Docter,
    codeUrl: "https://gitlab.com/users/ELKHADRI-Ilyass/contributed",
    demoUrl: "https://emsi-smart-presence.herokuapp.com/",
    category: "mobile",
    description: "Application mobile de gestion des absences étudiantes",
    demoDescription: `Développement d'une application mobile en Java intégrant Firebase et des services Google avancés pour une gestion optimisée des présences étudiantes.

Architecture technique :

🔥 Firebase Integration — utilisation complète de la suite Firebase :
• Authentication — connexion sécurisée pour étudiants et administrateurs
• Firestore — base de données temps réel pour les données de présence
• Storage — stockage des documents et justificatifs

🗺️ Google Maps API — géolocalisation avancée :
• Vérification de la présence physique
• Zones géographiques autorisées
• Tracking des déplacements (optionnel)
• Alertes de zone

🤖 Assistant virtuel IA — fonctionnalités intelligentes :
• Réponses automatiques aux questions fréquentes
• Notification des absences
• Rappels de cours
• Analyse des motifs d'absence

Fonctionnalités métier :

📊 Gestion des présences :
• Justification en ligne des absences
• Historique complet par étudiant
• Export des données administratives

📱 Interface utilisateur :
• Design Material Design natif
• Navigation intuitive
• Mode hors ligne limité
• Notifications push en temps réel`,
    aosConfig: {
      animation: "flip-left",
      duration: 1500
    }
  },
  {
    id: 4,
    title: "SmartRecruit AI",
    image: sys,
    codeUrl: "https://gitlab.com/users/ELKHADRI-Ilyass/contributed",
    demoUrl: "https://smartrecruit-ai.vercel.app/",
    category: "web",
    description: "Plateforme SaaS RH de recrutement intelligente",
    demoDescription: `Développement d'une plateforme SaaS RH de recrutement intelligente, intégrant un système de matching automatisé entre candidats et entreprises.

Architecture technique :

⚙️ Backend Spring Boot — services robustes et scalables :
• API REST sécurisée avec Spring Security
• Base de données relationnelle PostgreSQL
• Cache Redis pour les performances
• File d'attente RabbitMQ pour les traitements asynchrones

🎯 Frontend React — interface moderne et interactive :
• Single Page Application avec React 18
• State management avec Redux Toolkit
• UI/UX avec Material-UI et Tailwind CSS
• Chart.js pour les tableaux de bord analytiques

🤖 Intelligence Artificielle — matching automatisé avancé :
• Analyse sémantique des CV et offres d'emploi
• Algorithmes de recommandation personnalisés
• Scoring des candidats basé sur multiple critères
• Apprentissage continu des préférences

📄 API Affinda — extraction intelligente des données CV :
• Parsing automatique des CV (PDF, Word, formats variés)
• Reconnaissance des compétences, expériences et formations
• Normalisation des données pour le matching
• Support multilingue

Fonctionnalités principales :

🔍 Matching Intelligent — correspondance automatique candidats/offres :
• Analyse de compatibilité skills/requirements
• Score de matching avec explications détaillées
• Alertes pour les matches parfaits
• Suggestions de candidats alternatifs

👥 Espace Recruteur — gestion complète du processus :
• Publication et gestion des offres d'emploi
• Visualisation des candidats matchés
• Workflow de sélection personnalisable
• Planification d'entretiens intégrée

📊 Tableaux de Bord — analytics en temps réel :
• Métriques de recrutement (time-to-hire, coût par recrutement)
• Performance des canaux de sourcing
• Diversité et inclusion
• Prévisions des besoins en recrutement

🎪 Gestion des Entretiens — optimisation du processus :
• Planification automatique avec synchronisation calendrier
• Visioconférence intégrée
• Grilles d'évaluation standardisées
• Feedback collaboratif

Avantages clés :
• Réduction du temps de recrutement de 60%
• Amélioration de la qualité des matches de 45%
• Automatisation des tâches répétitives
• Expérience candidat optimisée`,
    aosConfig: {
      animation: "flip-left",
      duration: 2000
    }
  },  
  {
    "id": 5,
    "title": "Système de Gestion de Bibliothèque",
    "image": rct,
    "codeUrl": "https://github.com/ilyasselkhadri/projet-html-css",
    "demoUrl": "https://employee-management-v2.netlify.app/",
    "category": "web",
    "description": "Plateforme complète de gestion de bibliothèque",
    "demoDescription": "Développement complet d'un site web interactif permettant la gestion des livres, des utilisateurs et des emprunts. Développé avec HTML, CSS et JavaScript.\n\nFonctionnalités principales :\n\n📚 Gestion du catalogue — ajout, modification et suppression de livres avec détails complets (titre, auteur, ISBN, genre)\n\n👥 Administration des utilisateurs — inscription, profils, historique d'emprunts et statuts\n\n🔄 Système d'emprunts — réservation, retour, prolongation et suivi des délais\n\n🔍 Recherche avancée — filtres par titre, auteur, genre et disponibilité\n\n📊 Tableau de bord — statistiques d'utilisation et rapports d'activité\n\nCaractéristiques techniques :\n- Interface responsive et intuitive\n- Validation des formulaires en temps réel\n- Stockage local des données\n- Navigation fluide entre les sections\n- Design moderne et accessible",
    "aosConfig": {
      "animation": "flip-left",
      "duration": 2000
    }
}
];

// Composant Modal simplifié pour la démo
const DemoModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
        {/* En-tête du modal */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        
        {/* Contenu du modal - seulement la description */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="text-gray-600 leading-relaxed whitespace-pre-line">
            {project.demoDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant Project Card réutilisable
const ProjectCard = ({ project, onDemoClick }) => {
  return (
    <div
      data-aos={project.aosConfig.animation}
      data-aos-easing="ease-out-cubic"
      data-aos-duration={project.aosConfig.duration}
      className="relative group rounded-lg overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      {/* Image de fond */}
      <div
        style={{ backgroundImage: `url(${project.image})` }}
        className="w-full h-48 md:h-56 lg:h-64 bg-cover bg-center"
      />
      
      {/* Overlay au hover */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 p-4">
        <h3 className="text-white text-xl font-bold text-center mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-300 text-sm text-center mb-4">
          {project.description}
        </p>
        
        {/* Badge de catégorie */}
        <span className={`px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
          project.category === 'mobile' 
            ? 'bg-blue-500 text-white' 
            : 'bg-green-500 text-white'
        }`}>
          {project.category === 'mobile' ? '📱 Mobile App' : '🖥️ Web Platform'}
        </span>
        
        {/* Boutons d'action */}
        <div className="flex gap-3">
          <a 
            href={project.codeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 text-sm"
          >
            <span>Code</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </a>
          
          <button 
            onClick={() => onDemoClick(project)}
            className="bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-200 flex items-center gap-2 text-sm cursor-pointer"
          >
            <span>Description</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrer les projets par catégorie
  const mobileApps = PROJECTS.filter(project => project.category === 'mobile');
  const webPlatforms = PROJECTS.filter(project => project.category === 'web');

  const handleDemoClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div name="work" className="bg-white w-full min-h-screen py-16 text-black">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold inline-block border-b-4 border-amber-500 pb-2">
            Work
          </h1>
        </div>

        {/* Applications Mobiles */}
        <section className="mb-20">        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mobileApps.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onDemoClick={handleDemoClick}
              />
            ))}
          </div>
        </section>

        {/* Plateformes Web */}
        <section className="mb-16">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
              {webPlatforms.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onDemoClick={handleDemoClick}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Modal de démo */}
        {selectedProject && (
          <DemoModal 
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
}