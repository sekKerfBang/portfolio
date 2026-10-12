import { skillGroups } from '../../public/data/skills';

const Skills: React.FC = () => (
  <div className="min-h-screen bg-[#f7f8fa]">
    <section className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 md:pt-20">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Savoir-faire</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Des compétences variées, construites sur le terrain.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        Développement d’applications, support informatique et communication digitale :
        voici les domaines et outils présentés dans mon parcours professionnel.
      </p>
    </section>

    <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-20 sm:px-8 md:grid-cols-2">
      {skillGroups.map((group, index) => (
        <article key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
              0{index + 1}
            </span>
            <div>
              <h2 className="text-xl font-bold text-slate-950">{group.title}</h2>
              <p className="mt-2 leading-7 text-slate-600">{group.description}</p>
            </div>
          </div>
          <ul aria-label={group.title} className="mt-6 flex flex-wrap gap-2.5">
            {group.skills.map((skill) => (
              <li key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700">
                {skill}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  </div>
);

export default Skills;
