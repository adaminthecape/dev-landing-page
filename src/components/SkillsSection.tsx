import { motion } from 'framer-motion';
import { SKILL_DATA, SECTION_DATA } from '../config/data';
import { SectionHeader } from './ui/SectionHeader';
import { SpaceInner } from './ui/SpaceInner';
import { useAnimationReset } from '../hooks/useAnimationReset';

const skillCategories = SKILL_DATA;
const section = SECTION_DATA.skills;

export function SkillsSection() {
	const generation = useAnimationReset();
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section id={section.id} className="py-16 md:py-24">
			<SectionHeader section={section} />
			<SpaceInner />

			<motion.div
				key={`skills-${generation}`}
				className="grid grid-cols-1 md:grid-cols-2 gap-8"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				{skillCategories.map((cat, idx) => (
					<motion.div key={idx} variants={itemVariants} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
						<h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4">{cat.category}</h3>
						<p className="text-gray-700 dark:text-gray-300">{cat.blurb}</p>
						<div className="flex flex-wrap gap-2 mt-4">
							{cat.skills.map((skill, i) => (
								<span key={i} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-semibold rounded-full">
									{skill}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}