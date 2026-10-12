import { Link } from 'react-router-dom';
import { projects } from '../../public/data/projects';
import { skillGroups } from '../../public/data/skills';

const fullStackCv =
  `${import.meta.env.BASE_URL}documents/CV_Sekou_Kerfala_Bangoura_Developpeur_FullStack_CTSP.pdf`;
const atmCv =
  `${import.meta.env.BASE_URL}documents/CV_Sekou_Kerfala_Bangoura_Technicien_GAB_DAB_NCR.pdf`;

const Home: React.FC = () => {
  const skillCount = skillGroups.reduce((total, group) => total + group.skills.length, 0);

  return (
    <div className="bg-white text-slate-900">
      <section className="overflow-hidden bg-[#f7f8fa]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Basé à Conakry, Guinée
            </p>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Développeur Full-Stack · Administrateur réseau · Community manager
            </p>
            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Des solutions numériques pensées pour être <span className="text-blue-700">utiles.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Je conçois des applications web, accompagne les utilisateurs et contribue
              à la présence numérique des organisations. Du développement au support,
              j’aime transformer les besoins concrets en solutions fiables.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Découvrir mes projets
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-slate-500 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Parlons de votre projet
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
              <a className="underline decoration-slate-300 underline-offset-4 transition hover:text-blue-700" href={fullStackCv} download>
                Télécharger mon CV Full-Stack
              </a>
              <a className="underline decoration-slate-300 underline-offset-4 transition hover:text-blue-700" href={atmCv} download>
                CV Technicien GAB/DAB
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div aria-hidden="true" className="absolute -right-5 -top-5 h-28 w-28 rounded-3xl bg-amber-300/70" />
            <div aria-hidden="true" className="absolute -bottom-5 -left-5 h-36 w-36 rounded-full bg-blue-200/70" />
            <div className="relative overflow-hidden rounded-[2rem] border-[10px] border-white bg-slate-200 shadow-2xl shadow-slate-900/15">
              <img
                src={`${import.meta.env.BASE_URL}sekou-kerfala.webp`}
                alt="Portrait professionnel de Sékou Kerfala Bangoura"
                className="aspect-square w-full object-cover"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:left-8 sm:right-8">
              <p className="text-sm font-bold text-slate-900">Un profil polyvalent, une approche concrète</p>
              <p className="mt-1 text-sm text-slate-500">Web · Réseaux & support · Communication digitale</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Quelques repères" className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-100 px-5 py-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
          <div className="px-4 py-4 text-center sm:text-left">
            <p className="text-2xl font-bold text-slate-950">{projects.length}</p>
            <p className="mt-1 text-sm text-slate-500">projets présentés</p>
          </div>
          <div className="px-4 py-4 text-center sm:text-left sm:pl-8">
            <p className="text-2xl font-bold text-slate-950">{skillCount}</p>
            <p className="mt-1 text-sm text-slate-500">compétences détaillées</p>
          </div>
          <div className="px-4 py-4 text-center sm:text-left sm:pl-8">
            <p className="text-2xl font-bold text-slate-950">Depuis 2026</p>
            <p className="mt-1 text-sm text-slate-500">développeur Full-Stack à la CTSP</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Mon expertise</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Un éventail de compétences au service de vos besoins
            </h2>
          </div>
          <Link to="/skills" className="font-semibold text-blue-700 hover:text-blue-900">
            Toutes mes compétences <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-800">
                0{index + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-950">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{group.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.slice(0, 3).map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Prochaine étape</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Un projet en tête ? Échangeons.</h2>
            <p className="mt-3 max-w-xl text-slate-300">Parlez-moi de votre besoin et voyons ensemble comment lui donner vie.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Me contacter <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
