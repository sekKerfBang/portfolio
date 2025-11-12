import type { Skill } from '../types';
// cet composant affiche une barre de compétence animée
const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="group mb-6 animate-on-scroll">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
          {skill.name}
        </span>
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
          {skill.level}%
        </span>
      </div>

      <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full transition-all duration-1500 ease-out"
          style={{ width: '0%' }}
          onAnimationStart={(e) => {
            const el = e.target as HTMLElement;
            requestAnimationFrame(() => {
              el.style.width = `${skill.level}%`;
            });
          }}
        />
        {/* Effet brillant */}
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine" />
      </div>
    </div>
  );
};

export default SkillBar;