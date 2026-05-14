import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
// detect user language

  // learn more: https://github.com/i18next/i18next-browser-languageDetector

  .use(LanguageDetector)

  // pass the i18n instance to react-i18next.

  .use(initReactI18next)

  // init i18next

  // for all options read: https://www.i18next.com/overview/configuration-options

  .init({

    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      en: {
        translation: {
          description: {
            part1: 'Edit <1>src/App.js</1> and save to reload.',
            part2: 'Learn React'
/*             about: 'About',
            education: 'Education',
            experience: 'Experience',
            industries: 'Industries',
            languages: 'Languages',
            cv1: '•	Accomplished professional with more than 15 years experience with Java technologies.  Worked on all phases of SDLC',
            cv2: '•	Development, integration and maintenance of Web applications for different industries.',
            cv3: '•	Collaboration with international teams in United States, United Kingdom, India, etc.',
            french: 'French',
            english: 'English',
            ukrainian: 'Ukrainian',
            russian:'russian',
            langues: 'Français, Anglais, Ukrainien, Russe.' */
          }
          
        }
        }
      },
      fr: {
        translation: {
          description: {
            part1: 'Éditez <1>src/App.js</1> et sauvez pour recharger.',
            part2: 'Apprenez React'
 /*            about: 'À propos',
            education: 'Éducation',
            experience: 'Expérience',
            industries: 'Industries',
            languages: 'Langues',
            cv1: '•	Professionnelle confirmée avec expérience de plus de 15 années en technologies Java. Travaillait dans tous les étapes de SDLC.',
            cv2: '•	Développement, intégration et maintien des application Web pour différentes industries.',
            cv3: '•	Collaboration avec des équipes internationales aux États-Unis, Royaume Uni, Inde, etc.',
            french: 'Fran]çais',
            english: 'Anglais',
            ukrainian: 'Ukrainien',
            russian:'russe',
            langues: 'Français, Anglais, Ukrainien, Russe.' */
          }
        }
      }
    }
  );

export default i18n;