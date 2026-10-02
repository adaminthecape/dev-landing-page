import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECT_DATA, SECTION_DATA } from '../config/data';
import { SectionHeader } from './ui/SectionHeader';
import { SpaceInner } from './ui/SpaceInner';
import { useAnimationReset } from '../hooks/useAnimationReset';

const projects = PROJECT_DATA;

export function ProjectsSection() {
	const generation = useAnimationReset();
	const section = SECTION_DATA.projects;

	const [filter, setFilter] = useState('');

	const filteredProjects = (
		section.options?.useFilter ?
			projects.filter((project) =>
				project.technologies.some((tech) =>
					tech.toLowerCase().includes(filter.toLowerCase())
				) || project.title.toLowerCase().includes(filter.toLowerCase())
			) :
			projects
	);

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

			{!!section.options?.useFilter && <motion.div
				key={`filter-${generation}`}
				className="mb-8"
			>
				<input
					type="text"
					placeholder="Filter by technology or project name (e.g., React, TypeScript)..."
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
					className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
				/>
			</motion.div>}

			<motion.div
				key={`projects-${generation}`}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				{filteredProjects.map((project) => (
					<motion.a
						key={project.id}
						href={project.link ?? undefined}
						target="_blank"
						rel="noreferrer"
						variants={itemVariants}
						whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
						className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
					>
						<div className="h-40 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center text-6xl">
							{project.image}
						</div>
						<div className="p-6">
							<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
							<p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{project.description}</p>
							<div className="flex flex-wrap gap-2 mt-4">
								{project.technologies.map((tech, idx) => (
									<span
										key={idx}
										className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</motion.a>
				))}
			</motion.div>

			{filteredProjects.length === 0 && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="text-center py-12"
				>
					<p className="text-slate-600 dark:text-slate-400">No projects found matching your filter.</p>
				</motion.div>
			)}
		</section>
	);
}
