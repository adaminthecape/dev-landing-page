import { motion } from 'framer-motion';
import { BASE_DATA, SECTION_DATA } from '../config/data';
import { GlassBackground } from './ui/GlassBackground';
import { BackgroundImage } from './ui/BackgroundImage';
import { extractSectionStyles } from '../config/utils';
import { BasicButton } from './buttons/BasicButton';
import { useAnimationReset } from '../hooks/useAnimationReset';

export function HeroSection() {
	const generation = useAnimationReset();
	const section = SECTION_DATA.hero;

	const {
		headerTextClasses,
		subheaderTextClasses,
		buttonColor,
	} = extractSectionStyles(section);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2, delayChildren: 0.1 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const sectionHtml = (
		<section id="hero" className="relative px-8 py-24 md:py-32 overflow-hidden rounded-lg">
			{/* Gradient background */}
			{!!section.options?.useGradientBackground && <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 -z-10" />}

			{/* Decorative shapes */}
			<div className="absolute top-10 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-20 dark:opacity-10 -z-10" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20 dark:opacity-10 -z-10" />

			<motion.div
				key={`hero-${generation}`}
				className="text-center max-w-3xl mx-auto"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				<motion.h1
					variants={itemVariants}
					className={`text-5xl md:text-7xl font-bold mb-6 ${headerTextClasses ?? 'text-slate-900 dark:text-white'}`}
				>
					Hi, I'm {BASE_DATA.author}
				</motion.h1>

				<motion.p
					variants={itemVariants}
					className={`text-xl md:text-2xl mb-8 leading-relaxed ${subheaderTextClasses ?? 'text-slate-600 dark:text-slate-300'}`}
				>
					{BASE_DATA.tagline}
				</motion.p>

				<motion.div
					variants={itemVariants}
					className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
				>
					<BasicButton
						variant="standard"
						color={buttonColor}
						onClick={() => {
							const element = document.getElementById('projects');
							if (element) {
								element.scrollIntoView({ behavior: 'smooth' });
							}
						}}
					>
						View My Work
					</BasicButton>
					<BasicButton
						variant="outline"
						color={buttonColor}
						onClick={() => {
							const element = document.getElementById('capabilities');
							if (element) {
								element.scrollIntoView({ behavior: 'smooth' });
							}
						}}
					>
						Learn More
					</BasicButton>
				</motion.div>
			</motion.div>
		</section>
	);

	if (section.options?.useBackgroundImage && section.options?.backgroundImage) {
		return (
			<BackgroundImage
				imagePath={`${section.options.backgroundImage}`}
				className="rounded-lg"
			>
				<GlassBackground className="rounded-lg" variant={{ light: 'dark', dark: 'dark' }}>
					{sectionHtml}
				</GlassBackground>
			</BackgroundImage>
		);
	}

	return sectionHtml;
}
