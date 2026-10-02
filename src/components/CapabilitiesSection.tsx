import { motion } from 'framer-motion';
import { CAPABILITY_DATA, SECTION_DATA } from '../config/data';
import { SectionHeader } from './ui/SectionHeader';
import { SpaceInner } from './ui/SpaceInner';
import { useAnimationReset } from '../hooks/useAnimationReset';

const section = SECTION_DATA.capabilities;

export function CapabilitiesSection() {
	const generation = useAnimationReset();
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
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
				key={`capabilities-${generation}`}
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				{CAPABILITY_DATA.map((capability) => (
					<motion.div
						key={capability.id}
						variants={itemVariants}
						className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
					>
						<span className="text-3xl mb-3 block" aria-hidden="true">{capability.icon}</span>
						<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{capability.title}</h3>
						<p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{capability.description}</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}