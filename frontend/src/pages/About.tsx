import { Link } from 'react-router-dom';
import { skillGroups } from '../../public/data/skills';

const experience = [
  {
    period: 'Depuis septembre 2026',
    role: 'Développeur Full-Stack · Administrateur réseau · Community manager',
    organization: 'CTSP',
    details: 'Développement et évolution d’applications web, suivi de l’environnement réseau et contribution aux contenus numériques.',
  },
  {
    period: 'Avril – juin 2025',
    role: 'Superviseur de recensement',
    organization: 'DIGITALIS',
    details: 'Encadrement de six agents, organisation des plannings, suivi des performances et support technique de proximité.',
  },
  {
    period: 'Mai – décembre 2024',
    role: 'Développeur stagiaire',
    organization: 'ANDE',
    details: 'Participation à la conception et au développement d’une application de gestion des ressources humaines avec Python et Django.',
  },
  {
    period: 'Avril – mai 2022',
    role: 'Chargé de configuration',
    organization: 'Catholic Relief Services (CRS)',
    details: 'Préparation et configuration de tablettes et smartphones pour des opérations de collecte de données.',
  },
];

const education = [
  {
    period: '2020 – 2024',
    title: 'Licence professionnelle en informatique',
    organization: 'EICT-IST – École Internationale de Commerce et de la Technologie',
  },
  {
    period: '2022 – 2023',
    title: 'Bases de données et conception de systèmes d’information',
    organization: 'EICT-IST',
  },
  {
    period: '2020 – 2021',
    title: 'Formation en développement web Full-Stack',
    organization: 'EICT-IST',
  },
];

const About: React.FC = () => (
  <div className="bg-[#f7f8fa] text-slate-900">
    <section className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 md:pt-20">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">À propos</p>
      <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
          Développer, accompagner et faire avancer les projets numériques.
        </h1>
        <p className="text-lg leading-8 text-slate-600">
          Je suis Sékou Kerfala Bangoura, développeur Full-Stack diplômé en informatique
          et professionnel polyvalent basé à Conakry.
        </p>
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
      <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <img
          src={`${import.meta.env.BASE_URL}sekou-kerfala.webp`}
          alt="Portrait professionnel de Sékou Kerfala Bangoura"
          className="aspect-square w-full rounded-2xl object-cover"
          loading="lazy"
        />
        <div className="p-2 pt-5">
          <h2 className="text-xl font-bold text-slate-950">Sékou Kerfala Bangoura</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Développement Full-Stack · Réseaux & support · Communication digitale
          </p>
          <address className="mt-5 space-y-3 not-italic text-sm text-slate-600">
            <a className="block break-all hover:text-blue-700" href="mailto:kerfala789@gmail.com">
              kerfala789@gmail.com
            </a>
            <a className="block hover:text-blue-700" href="tel:+224620217714">
              +224 620 21 77 14
            </a>
            <a className="block hover:text-blue-700" href="tel:+224660020162">
              +224 660 02 01 62
            </a>
            <p>Yimbaya-Faban, Conakry, Guinée</p>
          </address>
          <a
            className="mt-5 inline-flex font-semibold text-blue-700 hover:text-blue-900"
            href="https://github.com/sekKerfBang"
            target="_blank"
            rel="noreferrer"
          >
            Voir mon GitHub <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        </div>
      </aside>

      <div className="space-y-6">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">Mon approche</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Mon parcours associe le développement d’applications web, l’assistance
            technique et la communication digitale. J’aime comprendre les besoins
            d’une équipe, proposer une solution adaptée et contribuer à sa mise en
            œuvre avec rigueur et sens du service.
          </p>
          <p className="mt-3 leading-8 text-slate-600">
            Je travaille notamment avec Python et Django, Java et Spring Boot, ainsi
            qu’avec React et Angular. Mon expérience couvre aussi le support matériel,
            logiciel et réseau, y compris les interventions sur les GAB/DAB NCR.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">Expérience professionnelle</h2>
          <ol className="mt-7 space-y-7">
            {experience.map((item) => (
              <li key={`${item.organization}-${item.role}`} className="relative border-l-2 border-blue-100 pb-1 pl-6 last:border-transparent">
                <span aria-hidden="true" className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-blue-700 ring-4 ring-white" />
                <p className="text-sm font-semibold text-blue-700">{item.period}</p>
                <h3 className="mt-1 text-lg font-bold text-slate-950">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-slate-500">{item.organization}</p>
                <p className="mt-2 leading-7 text-slate-600">{item.details}</p>
              </li>
            ))}
          </ol>
          <div className="mt-7 rounded-2xl bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">Expertise technique complémentaire</h3>
            <p className="mt-2 leading-7 text-slate-600">
              Interventions sur des GAB/DAB NCR du secteur bancaire en Guinée :
              diagnostic d’incidents et contribution à la remise en service des automates.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">Formation & certifications</h2>
          <ul className="mt-6 space-y-5">
            {education.map((item) => (
              <li key={item.title} className="flex flex-col gap-1 border-b border-slate-100 pb-4 last:border-0 last:pb-0 sm:flex-row sm:gap-5">
                <span className="w-32 shrink-0 text-sm font-semibold text-blue-700">{item.period}</span>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{item.organization}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800">Développement Frontend Angular · ODC · 2024</span>
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800">Développement Frontend React · Udemy · 2024</span>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">Compétences clés</h2>
          <div className="mt-5 space-y-5">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">{group.title}</h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">Langues</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              ['Français', 'Bon niveau'],
              ['Anglais', 'Intermédiaire'],
              ['Soussou', 'Bon niveau'],
              ['Malinké', 'Bon niveau'],
              ['Pular', 'Notions'],
            ].map(([language, level]) => (
              <li key={language} className="flex justify-between gap-4 border-b border-white/15 pb-2 text-sm">
                <span className="font-medium">{language}</span>
                <span className="text-slate-300">{level}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl bg-blue-700 p-7 text-white sm:p-8">
          <h2 className="text-2xl font-bold">Consulter mon CV</h2>
          <p className="mt-2 leading-7 text-blue-100">Retrouvez le détail de mon parcours dans le CV qui correspond à votre besoin.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-5 py-2.5 font-semibold text-blue-800 transition hover:bg-blue-50"
              href={`${import.meta.env.BASE_URL}documents/CV_Sekou_Kerfala_Bangoura_Developpeur_FullStack_CTSP.pdf`}
              download
            >
              CV Développeur Full-Stack
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/60 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
              href={`${import.meta.env.BASE_URL}documents/CV_Sekou_Kerfala_Bangoura_Technicien_GAB_DAB_NCR.pdf`}
              download
            >
              CV Technicien GAB/DAB
            </a>
          </div>
        </section>

        <div className="text-center">
          <Link to="/contact" className="font-semibold text-blue-700 hover:text-blue-900">
            Me contacter au sujet d’un projet <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default About;
