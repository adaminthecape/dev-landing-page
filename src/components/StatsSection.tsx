import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { STAT_DATA, SECTION_DATA } from '../config/data';
import { SectionHeader } from './ui/SectionHeader';
import { SpaceInner } from './ui/SpaceInner';
import { BackgroundImage } from './ui/BackgroundImage';
import { GlassBackground } from './ui/GlassBackground';
import { useAnimationReset } from '../hooks/useAnimationReset';

function Counter({ target, suffix }: { target: number; suffix: string }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const duration = 2000;
		const increment = target / (duration / 16);
		let current = 0;

		const timer = setInterval(() => {
			current += increment;
			if (current >= target) {
				setCount(target);
				clearInterval(timer);
			} else {
				setCount(Math.floor(current));
			}
		}, 16);

		return () => clearInterval(timer);
	}, [target]);

	return (
		<span>
			{count}
			{suffix}
		</span>
	);
}

export function StatsSection() {
	const generation = useAnimationReset();
	const stats = STAT_DATA;
	const section = SECTION_DATA.stats;

	const {
		useBackgroundImage,
		backgroundImage,
	} = section.options || {};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
	};

	const sectionHtml = (
		<section id={section.id} className="px-16 py-16 md:py-24 rounded-lg">
			<SectionHeader section={section} />
			<SpaceInner />

			<motion.div
				key={`stats-${generation}`}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				{stats.map((stat) => (
					<motion.div
						key={stat.id}
						variants={itemVariants}
						className="text-center p-6 bg-slate-900/60 dark:bg-slate-700/40 rounded-lg shadow-md"
					>
						<div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
							<Counter target={stat.value} suffix={stat.suffix} />
						</div>
						<p className="text-slate-600 dark:text-slate-300 font-semibold">{stat.label}</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);

	if (useBackgroundImage && backgroundImage) {
		return (
			<BackgroundImage imagePath={`${backgroundImage}`} className="rounded-lg">
				<GlassBackground variant={{ light: 'dark', dark: 'dark' }} className="rounded-lg">
					{sectionHtml}
				</GlassBackground>
			</BackgroundImage>
		);
	}

	return sectionHtml;
}
